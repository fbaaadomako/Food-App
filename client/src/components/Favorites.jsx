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
        filename: "favorites.pdf",
        image: { type: "webp", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
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
    } catch (e) {
      console.log(e);
    }
  };
  console.log(favRestaurants)

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
              {restaurant.photos && (
                <img src={restaurant.photos} alt="Restaurant" />
              )}
            </div>
          ))}
        </div>
      </div>
      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
}

export default Favorites;
