import React, { useContext } from "react";
import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import "./css/restaurants_favorites.css";
import UserContext from "../context/UserContext";

function Favorites() {
  const [favRestaurants, setFavRestaurants] = useState([""]);

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
      setFavRestaurants(data.restaurants);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* Render the content to be converted to PDF */}
      <div id="pdf-container">
        <h1>Here is a list of your favorite restaurants, {auth.user.name}</h1>
        <div>
        {favRestaurants.map((restaurant) => (
        <div className="card col-md-4" key={restaurant.id}>
        <h5 className="card-header">{restaurant.name}</h5>
      </div>
      ))}
          </div>
      </div>

      {/* Button to trigger PDF generation and download */}
      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
}

export default Favorites;
