import React, { useState, useEffect } from "react";
import "../restaurants_favorites.css";

function Restaurants() {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Location: {restaurant.location}</p>
      <p>Address: {restaurant.address}</p>
      <p>Contact Details: {restaurant.contactDetails}</p>
      <p>Ratings: {restaurant.ratings}</p>
      <p>Reviews: {restaurant.reviews}</p>
      <p>Website: {restaurant.website}</p>
    </div>
  );
}

export default Restaurants;
