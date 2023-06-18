var express = require("express");
var router = express.Router();
const db = require("../model/helper");
require("dotenv").config();

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

/***** LOGIN *****/
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
      const token = jwt.sign({ user_id: user.id }, supersecret);
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

//Private route code will run only if Middleware - Guards folder is successful
/* PRIVATE ROUTE: LOGIN FOR USERS ONLY */
// router.get("/restaurants", userIsLoggedIn, async (req, res) => {
//   try {
//     //select restauran info for restaurant with
//   }
// })


/* PRIVATE ROUTE: ONLY CAN FAVORITE RESTAURANTS IF LOGGED IN */

module.exports = router;
