import React, { useState, useEffect } from "react";
import "../restaurants_favorites.css";

function Restaurants() {
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/restaurants?city=${city}`);
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant details');
      }

      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city" />
        <button type="submit">Get Restaurants</button>
      </form>

      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>Location: {restaurant.location}</p>
            <p>Website:
            <a href={restaurant.website} target="_blank">{restaurant.website}</a> 
            </p>
            <p>Phone: {restaurant.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
