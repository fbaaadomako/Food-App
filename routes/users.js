var express = require("express");
var router = express.Router();
const db = require("../model/helper");
require("dotenv").config();
const fetch = require("node-fetch");
const apiKey = process.env.API_KEY;
// const emailKey = process.env.EMAIL_KEY;
// const { Resend } = require('resend');
// const ReactDOMServer = require('react-dom/server');
// const Email = require('./Email');
// *********** ADDED axios ***********
const axios = require('axios');

//1. install jsonwebtoken (token purpose) & bcrypt (encryption purpose) packages
//2. require jsonwebtoken & bcrypt
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
//require middleware for private route 
var userIsLoggedIn = require("../guards/userIsLoggedIn");

//variable needed for bcrypt to do the encryption
//saltRounds - how many times it runs the algorithms. The higher the saltRounds, the slower it runs
const saltRounds = 10;
//variable needed for creating the token
const supersecret = process.env.SUPER_SECRET;

/*  REGISTRATION via Postman, no form setup on front-end */
//localhost:4000/users/register
router.post("/register", async (req, res) => {
  //1. get user info from request body
  const { name, email, username, password } = req.body;
  try {
    //2. encrypt password using bcrypt.hash()
    const hashedPwd = await bcrypt.hash(password, saltRounds);
    console.log(hashedPwd);
    //3. create a new user on DB to store user credentials
    await db(
      `INSERT into users (name, email, username, password) VALUES ('${name}', '${email}', '${username}', '${hashedPwd}');`
    );
    //4. respond with ok
    res.status(200).send({ message: "Registration successful" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/* LOGIN */
//localhost:4000/users/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    //find on the DB the user that tries to login (if exists)
    const results = await db(
      `SELECT * FROM users WHERE username = "${username}"`
    );
    const user = results.data[0];

    //if user is found on DB
    if (user) {
      //check if password submitted through the form matches the one stored in DB
      //use bcrypt cause stored password is encrypted
      const correctPassword = await bcrypt.compare(password, user.password);

      //if not matching
      if (!correctPassword) throw new Error("Incorrect password");

      //else, create and send token. Send also user info to store in context
      //usersId = name, users_id is what we get from DB
      const token = jwt.sign({ usersId: user.users_id }, supersecret);
      delete user.password;
      res
        .status(200)
        .send({ message: "Login successful, here is your token", token, user });
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
});

  /*Private route code will run only if Middleware - Guards folder is successful
  PRIVATE ROUTE: LOGIN FOR USERS ONLY 
  GET - to fetch and display the list of user's favorite restaurants */
  //localhost:4000/users/restaurants
  router.get("/restaurants", userIsLoggedIn, async (req, res) => {
    try {
      const { data: restaurants } = await db(
        `SELECT * FROM users_restaurants JOIN restaurants ON restaurants.id = users_restaurants.restaurantsId WHERE users_restaurants.usersId = "${req.user_id}"`
      );

      // console.log("restaurants:", restaurants);

      const promises = Object.values(restaurants).map(async (restaurant) => {
        const { restaurant_id } = restaurant;

        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant_id}&fields=name,formatted_address,website,formatted_phone_number,rating,geometry,photos&key=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch restaurant details");
        }

        const data = await response.json();

        const placeData = data.result;
        const name = placeData.name;
        const address = placeData.formatted_address;
        const website = placeData.website;
        const phone = placeData.formatted_phone_number;
        const rating = placeData.rating;
        const longitude = placeData.geometry.location.lng;
        const latitude = placeData.geometry.location.lat;
        const photoReference = placeData.photos[0].photo_reference;
        // *********** CHANGED FROM photos ***********
        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&maxheight=1600&photoreference=${photoReference}&key=${apiKey}`;

        // *********** ADDED: Fetch the photo using Axios and serve it through your own server ***********
        // NOTE: tried just fetching the photoUrl with the result as text, and turning into a JSON string object, but did not work because image was received in binary
        const { data: photoData } = await axios.get(photoUrl, {
          responseType: 'arraybuffer',
        });

      // *********** ADDED: Convert the photo data to a base64 string, because it's received in binary ***********
      const photos = `data:image/jpeg;base64,${Buffer.from(photoData).toString('base64')}`;

        
        return {
          id: restaurant.id,
          name,
          address,
          website,
          phone,
          rating,
          longitude,
          latitude,
          photos,

          dairyFree: Boolean(restaurant.dairy_free),
          glutenFree: Boolean(restaurant.gluten_free),
          vegetarian: Boolean(restaurant.vegetarian),

          dairyFree: Boolean(restaurant.dairy_free), 
          glutenFree: Boolean(restaurant.gluten_free),
          vegetarian: Boolean(restaurant.vegetarian), 

          vegan: Boolean(restaurant.vegan),
        };
      });

      const listOfRestaurants = await Promise.all(promises);

      res.json(listOfRestaurants);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to fetch restaurant details" });
    }
  });


  /* PRIVATE ROUTE: ONLY CAN FAVORITE RESTAURANTS IF LOGGED IN 
  POST - to add a restaurant to the user's favorite list when the user clicks the heart icon
  //user id is get from the token
  */
  //localhost:4000/users/restaurants
  router.post("/restaurants", userIsLoggedIn, async (req, res) => {
    const { restaurantId } = req.body;
    try {
      await db(
        `INSERT INTO users_restaurants (usersId, restaurantsId) VALUES ("${req.user_id}", "${restaurantId}")`
      );
      res.status(200).send({ message: "Restaurant added to favorites" });
    } catch (err) {
      res.status(500).send({ error: "Failed to add restaurant to favorites" });
    }
  });


/* SEND EMAIL */
// localhost:4000/users/about

// const emailContent = ReactDOMServer.renderToString(<Email />);

// const resend = new Resend(`${emailKey}`);

// router.post("/about", async (req, res) => {
//   try {
//     const data = await resend.sendEmail({
//       from: 'you@example.com',
//       to: 'julichow94@gmail.com',
//       subject: 'Thanks for subscribing',
//       react: emailContent,
//     });

//     return res.json(data);
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ error: "Failed to send email" });
//   }
// });

  module.exports = router;
