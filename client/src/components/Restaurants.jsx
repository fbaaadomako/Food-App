import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "./css/restaurants_favorites.css";
import heart from "../assets/heart.png";
import map from "../assets/map.png";
import "./css/Home.css";
import Star from "./Star";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Restaurants() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [allergen, setAllergen] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [isCheckedGF, setIsCheckedGF] = useState(false);
  const [isCheckedDF, setIsCheckedDF] = useState(false);
  const [isCheckedVeg, setIsCheckedVeg] = useState(false);
  const [isCheckedVegan, setIsCheckedVegan] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    zoom: 14,
  });

  // Restaurant Search
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

  // Filter by allergens
  const handleFilter = (e) => {
    if (e.target.checked) {
      setAllergen([...allergen, e.target.value]);
      console.log(allergen);
    } else {
      setAllergen(allergen.filter((a) => a !== e.target.value));
      console.log("allergen2", allergen);
    }
  };

  // Setting as Favorites (heart icon)
  const handleHeartClick = (e) => {
    console.log(isClicked);
    setIsClicked(!isClicked);
  };

  const addFavoriteRestaurant = async (restaurantId) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ restaurantId }),
      };
      const response = await fetch("/users/restaurants", options);
      const data = await response.json();
      console.log(data);
      // Handle the response from the server as needed
    } catch (error) {
      console.log(error);
    }
  };

  //Map Icon on each restaurants
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

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  // Pop up on Mapbox when marker is clicked
  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.key === "Escape") {
  //       setSelectedRestaurant(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  return (
    <div>
      {/* HOME - SEARCH */}
      <form onSubmit={handleSubmit}>
        <div
          className="img"
          style={{
            height: "500px",
            width: "900px",
            backgroundImage:
              'url("https://media.istockphoto.com/id/1204371265/photo/flat-lay-of-turkish-traditional-foods-for-celebrating-holiday-wode-composition.jpg?s=612x612&w=0&k=20&c=X-9XA8TIOe-GxtYnojNLUfu-_rXR1Zab1GYqAu1ne64=")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <input
            className="home-input"
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city"
          />
          <button className="home-btn" type="submit">
            Get Restaurants
          </button>
        </div>

        {/* FILTER */}
      </form>
      <h3>Filter by preference</h3>
      <label name="gluten-free">
        <input
          type="checkbox"
          onChange={() => setIsCheckedGF(!isCheckedGF)}
          checked={isCheckedGF}
          value={allergen}
          id="gluten free"
        />{" "}
        Gluten Free
      </label>

      <h3></h3>
      <label name="dairy-free">
        <input
          type="checkbox"
          onChange={() => setIsCheckedDF(!isCheckedDF)}
          checked={isCheckedDF}
          value={allergen}
          id="dairy free"
        />
        Dairy free
      </label>
      <h3></h3>
      <label name="vegetarian">
        <input
          type="checkbox"
          onChange={() => setIsCheckedVeg(!isCheckedVeg)}
          checked={isCheckedVeg}
          value={allergen}
          id="vegetarian"
        />
        Vegetarian
      </label>
      <h3></h3>
      <label name="vegan">
        <input
          type="checkbox"
          onChange={() => setIsCheckedVegan(!isCheckedVegan)}
          checked={isCheckedVegan}
          value={allergen}
          id="vegan"
        />
        Vegan
      </label>
      <h3></h3>
      <label name="best-rated">
        <input
          type="checkbox"
          onChange={handleFilter}
          value={allergen}
          id="best rated"
        />
        Best rated
      </label>

      <ul>
        {restaurants
          .filter(function (restaurant) {
            if (isCheckedGF && restaurant.glutenFree) return true;
            if (!isCheckedGF) return true;
            return false;
          })
          .filter(function (restaurant) {
            if (isCheckedDF && restaurant.dairyFree) return true;
            if (!isCheckedDF) return true;
            return false;
          })
          .filter(function (restaurant) {
            if (isCheckedVeg && restaurant.vegetarian) return true;
            if (!isCheckedVeg) return true;
            return false;
          })
          .filter(function (restaurant) {
            if (isCheckedVegan && restaurant.vegan) return true;
            if (!isCheckedVegan) return true;
            return false;
          })
          .map((restaurant) => (
            <li key={restaurant.id} className="card">
              <img src={restaurant.photos} className="restaurant-image" />
              <h3>
                <button onClick={() => addFavoriteRestaurant(restaurant.id)}>
                  Add to Favorites
                </button>
                <img
                  src={map}
                  alt="map"
                  className="map-icon"
                  onClick={() =>
                    handleMapIconClick(
                      restaurant.longitude,
                      restaurant.latitude
                    )
                  }
                />
                {restaurant.name}
              </h3>
              <p>Rating: {restaurant.rating}</p>
              <Star rating={restaurant.rating} />
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

      {/* MAP */}
      <div style={{ width: "auto", height: "400px" }}>
        {/* <ReactMapGl
          {...viewport}
          mapboxAccessToken="pk.eyJ1IjoianVqdWJlYXIiLCJhIjoiY2xpc3V6ZDQ1MDAwMjNkcGRpb29vczkwbCJ9.ynb8k6DPxCinQvBLKXIFqg"
          width="100%"
          height="100%"
          transitionDuration="200"
          mapStyle="mapbox://styles/mapbox/streets-v12"
          onMove={(evt) => setViewport(evt.viewport)}
        >
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              latitude={restaurant.latitude}
              longitude={restaurant.longitude}
            >
              <FaMapMarkerAlt
                className="marker"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("clicked");
                  setSelectedRestaurant(restaurant);
                  console.log(selectedRestaurant);
                }}
              />
            </Marker>
          ))}

          {selectedRestaurant ? (
            <Popup
              latitude={selectedRestaurant.latitude}
              longitude={selectedRestaurant.longitude}
              onClose={() => {
                setSelectedRestaurant(null);
              }}
            >
              <div>
                <h2>{selectedRestaurant.name}</h2>
                <p>{selectedRestaurant.address}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGl> */}
      </div>
    </div>
  );
}
export default Restaurants;
