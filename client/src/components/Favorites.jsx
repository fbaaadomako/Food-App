import React, { useContext, useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import "./css/Favorites.css";
import UserContext from "../context/UserContext";
import Star from "./Star";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Favorites() {
  const [favRestaurants, setFavRestaurants] = useState([]);

  let auth = useContext(UserContext);

  const onButtonClick = () => {
    const element = document.getElementById("pdf-container");

    html2pdf()
      .set({
        margin: 0.1,
        filename: "favorites.pdf",
        image: { type: "webp", quality: 0.98 },
        // html2canvas: "html2canvas",
        html2canvas: { width: "1000" },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

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

  useEffect(() => {
    requestData();
  }, []);

  return (
    <div>
      {auth.user && <NavBar />}
      <div className="favorites-container">
        <div id="pdf-container">
          <h1>Here is your saved restaurants, {auth.user.name}</h1>
          <div className="favorites-grid">
            {favRestaurants &&
              favRestaurants.map((restaurant) => (
                // <div className="col-3">
                <div className="favorites-card" key={restaurant.id}>
                  <h5>{restaurant.restaurant_id}</h5>
                  {restaurant.photos && (
                    <img
                      src={restaurant.photos}
                      alt="Restaurant"
                      className="favorites-image"
                    />
                  )}
                  <div className="favorites-text">
                    <p>Name: {restaurant.name}</p>
                    <p>Address: {restaurant.address}</p>
                    <p>Phone: {restaurant.phone}</p>
                    <Star rating={restaurant.rating} />
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
                </div>
                // </div>
              ))}
          </div>
        </div>
        <p>Share your favorites with friends & family in a PDF</p>
        <button className="btn btn-dark" onClick={onButtonClick}>
          Download
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;
