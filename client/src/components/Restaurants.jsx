import React, { useState, useEffect } from "react";
import "../restaurants_favorites.css";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

function Restaurants() {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <div>
        {/* <h1>{restaurant.name}</h1>
        <p>Location: {restaurant.location}</p>
        <p>Address: {restaurant.address}</p>
        <p>Contact Details: {restaurant.contactDetails}</p>
        <p>Ratings: {restaurant.ratings}</p>
        <p>Reviews: {restaurant.reviews}</p>
        <p>Website: {restaurant.website}</p> */}
      </div>
      <div id="map"></div>
    </div>
  );
}

export default Restaurants;
