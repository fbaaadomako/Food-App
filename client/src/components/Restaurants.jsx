import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./css/restaurants_favorites.css";
import heart from "../assets/heart.png";
import map from "../assets/map.png";
import "./css/Home.css";

function Restaurants() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [allergen, setAllergen] = useState("");
  const [userLocation, setUserLocation] = useState(null);

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
    // let word = "all"

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

  const handleMapIconClick = (longitude, latitude) => {
    if (userLocation) {
      const userCoordinates = `${userLocation.coords.latitude},${userLocation.coords.longitude}`;
      const restaurantCoordinates = `${latitude},${longitude}`;
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userCoordinates}&destination=${restaurantCoordinates}`;
      window.open(mapsUrl);
    } else {
      alert("Could not determine your location.");
    }
  };

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="img"
          style={{
            height: "500px",
            width: "900px",
            backgroundImage:
              'url("https://static.vecteezy.com/system/resources/thumbnails/020/115/455/small/food-background-breakfast-with-yogurt-granola-or-muesli-strawberries-banner-image-for-website-photo.jpg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city"
          />
          <button type="submit">Get Restaurants</button>
        </div>
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
            <img src={restaurant.photos} className="restaurant-image" />
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
              <a
                href={restaurant.website}
                target="_blank"
                rel="noopener noreferrer"
              >
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
