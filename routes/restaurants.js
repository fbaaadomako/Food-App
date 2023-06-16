const express = require("express");
const router = express.Router();
require("dotenv").config();
const fetch = require("node-fetch");

const apiKey = process.env.API_KEY; // Access the API key from .env

const db = require("../model/helper"); // Import the helper module

// localhost:4000/api/restaurants?city=cityname
router.get("/restaurants", async (req, res) => {
  const { city } = req.query;

  try {
    const { data: restaurants } = await db(
      `SELECT * FROM restaurants WHERE city = '${city}';`
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
      const photos = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&maxheight=1600&photoreference=${photoReference}&key=${apiKey}`;

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
      };
    });

    const listOfRestaurants = await Promise.all(promises);

    res.json(listOfRestaurants);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch restaurant details" });
  }
});

module.exports = router;
