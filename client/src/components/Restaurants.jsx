import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "./css/Restaurants.css";
import map from "../assets/map.png";
import "./css/Home.css";
import Star from "./Star";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";

function Restaurants() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isCheckedGF, setIsCheckedGF] = useState(false);
  const [isCheckedDF, setIsCheckedDF] = useState(false);
  const [isCheckedVeg, setIsCheckedVeg] = useState(false);
  const [isCheckedVegan, setIsCheckedVegan] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [viewport, setViewport] = useState({});
  const view = [
    {
      cityName: "london",
      latitude: 51.509865,
      longitude: -0.118092,
    },
    {
      cityName: "philadelphia",
      latitude: 39.9526,
      longitude: -75.1652,
    },
    {
      cityName: "istanbul",
      latitude: 28.9784,
      longitude: 41.0082,
    },
    {
      cityName: "kyoto",
      latitude: 135.7681,
      longitude: 35.0116,
    },
    {
      cityName: "kuala lumpur",
      latitude: 3.1357,
      longitude: 101.688,
    },
    {
      cityName: "new york",
      latitude: 40.7128,
      longitude: -74.006,
    },
  ];


  const [favoriteRestaurants, setFavoriteRestaurants] = useState({});

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

    let updatedCity = view.find((item) => item.cityName === city);
    console.log(updatedCity);
    setViewport({
      latitude: updatedCity.latitude,
      longitude: updatedCity.longitude,
    });
  };

  // Setting as Favorites (heart icon)
  const handleHeartClick = (restaurantId) => {
    setFavoriteRestaurants((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      updatedFavorites[restaurantId] = !updatedFavorites[restaurantId];
      return updatedFavorites;
    });
    addFavoriteRestaurant(restaurantId);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="home-img-container mb-5">
          <div className="home-img">
            <div className="slides slowFade">
              <div className="slide">
                <img src={home1} alt="img" />
              </div>
              <div className="slide">
                <img src={home2} alt="img" />
              </div>
              <div className="slide">
                <img src={home3} alt="img" />
              </div>
              <div className="slide">
                <img src={home4} alt="img" />
              </div>
              <div className="slide">
                <img src={home1} alt="img" />
              </div>
              <div className="slide">
                <img src={home2} alt="img" />
              </div>
              <div className="slide">
                <img src={home3} alt="img" />
              </div>
              <div className="slide">
                <img src={home4} alt="img" />
              </div>
            </div>
          </div>
          <div className="home-searchbar-wrapper">
            <div className="home-searchbar">
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
          </div>
        </div>
      </form>

      {/* FILTER */}
      {restaurants.length > 0 && (
        <div className="filter-by-preference">
          <br />
          <br />
          <h3 className="filter-pref-title">Filter by preference</h3>
          <label className="gluten" name="gluten-free">
            <input
              type="checkbox"
              onChange={() => setIsCheckedGF(!isCheckedGF)}
              checked={isCheckedGF}
              id="gluten free"
            />{" "}
            Gluten Free
          </label>

          <h3></h3>
          <label className="dairy" name="dairy-free">
            <input
              type="checkbox"
              onChange={() => setIsCheckedDF(!isCheckedDF)}
              checked={isCheckedDF}
              id="dairy free"
            />
            Dairy free
          </label>
          <h3></h3>
          <label className="vegetarian" name="vegetarian">
            <input
              type="checkbox"
              onChange={() => setIsCheckedVeg(!isCheckedVeg)}
              checked={isCheckedVeg}
              id="vegetarian"
            />
            Vegetarian
          </label>
          <h3></h3>
          <label className="vegan" name="vegan">
            <input
              type="checkbox"
              onChange={() => setIsCheckedVegan(!isCheckedVegan)}
              checked={isCheckedVegan}
              id="vegan"
            />
            Vegan
          </label>
        </div>
      )}

      {/* RESTAURANT LIST */}
      {restaurants.length > 0 ? (
        <ol className="res-grid">
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
              <li key={restaurant.id} className="restaurant-card">
                <img src={restaurant.photos} className="restaurant-image" />
                <div className="res-text">
                  <FontAwesomeIcon
                    font-size="1.5em"
                    icon={faHeart}
                    style={{
                      color: favoriteRestaurants[restaurant.id]
                        ? "#eb0a15"
                        : "#272525",
                    }}
                    onClick={() => handleHeartClick(restaurant.id)}
                  />
                  <img
                    src={map}
                    alt="map"
                    className="card-icon"
                    onClick={() =>
                      handleMapIconClick(
                        restaurant.longitude,
                        restaurant.latitude
                      )
                    }
                  />
                  <h3>{restaurant.name}</h3>
                  <p>
                    <Star rating={restaurant.rating} />
                  </p>
                  <p>Address: {restaurant.address}</p>
                  <p>Phone: {restaurant.phone}</p>
                  <p>
                    View the{" "}
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      menu
                    </a>
                  </p>
                </div>
              </li>
            ))}
        </ol>
      ) : (
        <p></p>
      )}

      {restaurants.length > 0 ? (
        <div>
          <div className="map-text-container">
            <h2>Check out these retaurants near you</h2>
            <p className="font-weight-light font-italic">
              (Click and drag the map to see more)
            </p>
          </div>
          <div className="map mb-4">
            <ReactMapGl
              {...viewport}
              mapboxAccessToken="pk.eyJ1IjoianVqdWJlYXIiLCJhIjoiY2xpc3V6ZDQ1MDAwMjNkcGRpb29vczkwbCJ9.ynb8k6DPxCinQvBLKXIFqg"
              width="100%"
              height="100%"
              transitionDuration="200"
              mapStyle="mapbox://styles/mapbox/streets-v12"
              zoom="14"
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
                      console.log(restaurant);
                    }}
                  />
                </Marker>
              ))}
              {selectedRestaurant != null ? (
                <Popup
                  latitude={selectedRestaurant.latitude}
                  longitude={selectedRestaurant.longitude}
                  onClose={() => {
                    setSelectedRestaurant(null);
                  }}
                  closeOnClick={false}
                >
                  <div>
                    <img
                      src={selectedRestaurant.photos}
                      className="restaurant-popup-image"
                    />
                    <h5 className="font-weight-bold">
                      {selectedRestaurant.name}
                    </h5>
                    <p className="font-weight-light">
                      {selectedRestaurant.address}
                    </p>
                  </div>
                </Popup>
              ) : null}
            </ReactMapGl>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Restaurants;
