import React, { useContext, useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import "./css/restaurants_favorites.css";
import UserContext from "../context/UserContext";

function Favorites() {
  const [favRestaurants, setFavRestaurants] = useState([]);

  let auth = useContext(UserContext);

  const onButtonClick = () => {
    const element = document.getElementById("pdf-container");

    html2pdf()
      .set({
        margin: 0.5,
        filename: "webpage.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  useEffect(() => {
    requestData();
  }, []);

  const requestData = async () => {
    try {
      let options = {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      let results = await fetch("/users/restaurants", options);
      let data = await results.json();
      console.log(data);
      setFavRestaurants(data);
      // ******* Commented out, this comes from the back end now *******
      // fetchRestaurantDetails(data.restaurants);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(favRestaurants)

  // ******* Commented out, this comes from the back end now *******
  // const fetchRestaurantDetails = async (restaurants) => {
  //   try {
  //     // const apiKey = "YOUR_GOOGLE_PLACES_API_KEY";

  //     const updatedRestaurants = await Promise.all(
  //       restaurants.map(async (restaurant) => {
  //         const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant.restaurant_id}&fields=name,formatted_address,formatted_phone_number,rating,photos&key=AIzaSyAA5EhIjx8DcDyiaucSKHJNbpqTZr5WKhg`;
  //         const response = await fetch(url);
  //         const data = await response.json();
  //         console.log(data);

  //         const {
  //           name,
  //           formatted_address,
  //           formatted_phone_number,
  //           rating,
  //           photos,
  //         } = data.result;

  //         return {
  //           ...restaurant,
  //           name,
  //           formatted_address,
  //           formatted_phone_number,
  //           rating,
  //           photos,
  //         };
  //       })
  //     );

  //     setFavRestaurants(updatedRestaurants);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div>
      <div id="pdf-container">
        <h1>Here is a list of your favorite restaurants, {auth.user.name}</h1>
        <div>
          {favRestaurants && favRestaurants.map((restaurant) => (
            <div className="card col-md-4" key={restaurant.id}>
              <h5 className="card-header">{restaurant.restaurant_id}</h5>
              <p>Name: {restaurant.name}</p>
              {/* CHANGED FROM formatted_address */}
              <p>Address: {restaurant.address}</p>
              {/* CHANGED FROM formatted_phone_number */}
              <p>Phone: {restaurant.phone}</p>
              <p>Rating: {restaurant.rating}</p>
              {restaurant.photos &&
                // restaurant.photos.map((photo) => ( // removed map, also removed key={photo} attribute from img tag
                  <img src={restaurant.photos} alt="Restaurant" />
                // ))
              }
            </div>
          ))}
        </div>
      </div>
      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
}

export default Favorites;
