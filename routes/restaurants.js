const express = require('express');
const router = express.Router();
require('dotenv').config();

const apiKey = process.env.API_KEY; // Access the API key from .env

//localhost:4000/api/restaurants/:name
router.get('/restaurants/:name', async (req, res, next) => {
  const { name } = req.params; // Access the restaurant name from the URL parameter
  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${name}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch restaurant details');
    }

    const data = await response.json();
    if (data.results.length === 0) {
      throw new Error('Restaurant not found');
    }

    const restaurant = data.results[0];
    const name = restaurant.name;
    const location = restaurant.geometry.location;
    const address = restaurant.formatted_address;
    const contactDetails = restaurant.formatted_phone_number;
    const ratings = restaurant.rating;
    const reviews = restaurant.reviews;
    const website = restaurant.website;

    const restaurantDetails = {
      name,
      location,
      address,
      contact_details: contactDetails,
      ratings,
      reviews,
      website,
    };

    res.json(restaurantDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
