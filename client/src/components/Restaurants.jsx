import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "../restaurants_favorites.css";
import heart from "../assets/heart.png";
import map from "../assets/map.png";

function Restaurants() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [allergen, setAllergen] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/restaurants?city=${city}`);
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant details");
      }

      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const allAllergens = restaurants.filter((r) =>
  //   allergen.length > 0 ? allergen.every((a) => r.restaurants.map)

  // }

  const handleFilter = (e) => {
    if (e.target.checked) {
      setAllergen([...allergen, e.target.value]);
      console.log(allergen);
    } else {
      setAllergen(allergen.filter((a) => a !== e.target.value));
      console.log("allergen2", allergen);
    }
  };

  const handleHeartClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoianVqdWJlYXIiLCJhIjoiY2xpc3V6ZDQ1MDAwMjNkcGRpb29vczkwbCJ9.ynb8k6DPxCinQvBLKXIFqg";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);

  const handleMapIconClick = (longitude, latitude) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
        />
        <button type="submit">Get Restaurants</button>
      </form>

      <h3>Filter</h3>
      <label name="gluten free">
        <input
          type="checkbox"
          onChange={handleFilter}
          value={allergen}
          id="gluten free"
        />{" "}
        Gluten Free
      </label>

      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="card">
            <h3>
              <img
                src={heart}
                alt="heart"
                className={`heart-icon ${isClicked ? "clicked" : ""}`}
                onClick={handleHeartClick}
              />
              <img
                src={map}
                alt="map"
                className="map-icon"
                onClick={() =>
                  handleMapIconClick(restaurant.longitude, restaurant.latitude)
                }
              />
              {restaurant.name}
            </h3>
            <p>Rating: {restaurant.rating}</p>
            <p>Address: {restaurant.address}</p>
            <p>Phone: {restaurant.phone}</p>
            <p>
              Website:{" "}
              <a href={restaurant.website} target="_blank">
                {restaurant.website}
              </a>
            </p>
          </li>
        ))}
      </ul>

      <div id="map"></div>
    </div>
  );
}

export default Restaurants;
