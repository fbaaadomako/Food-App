import React, { useContext, useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import "./css/Favorites.css";
import UserContext from "../context/UserContext";
<<<<<<< HEAD
import Star from "./Star";
||||||| 4948032
=======
import Footer from "./Footer";
>>>>>>> 9169577815f1c4c680f6cfa661c8e82776a15592

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
        jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
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

  return (
    <div>
      <div id="pdf-container">
<<<<<<< HEAD
        <h1>Here is a list of your favorite restaurants, {auth.user.name}</h1>
        <div>
          {favRestaurants.map((restaurant) => (
            <div className="card col-md-4" key={restaurant.id}>
              <h5 className="card-header">{restaurant.name}</h5>
              <Star rating={restaurant.rating} />
            </div>
          ))}
        </div>
      </div>

      {/* Button to trigger PDF generation and download */}
      <button onClick={onButtonClick}>Download PDF</button>
||||||| 4948032
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
=======
        <h1>Here is your saved restaurants, {auth.user.name}</h1>
        <div className="favorites-container">
          {favRestaurants && favRestaurants.map((restaurant) => (
            <div className="favorites-card" key={restaurant.id}>
              <h5>{restaurant.restaurant_id}</h5>
              {restaurant.photos && (
                <img src={restaurant.photos} alt="Restaurant" />
              )}
              <p>Name: {restaurant.name}</p>
              <p>Address: {restaurant.address}</p>
              <p>Phone: {restaurant.phone}</p>
              <p>Rating: {restaurant.rating}</p>
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
            </div>
          ))}
        </div>
      </div>
      <p>Share your favorites with friends & family in a PDF</p>
      <button onClick={onButtonClick}>Download</button>
      <Footer />
>>>>>>> 9169577815f1c4c680f6cfa661c8e82776a15592
    </div>
  );
}

export default Favorites;
