import React, { useContext } from "react";
import html2pdf from "html2pdf.js";
import "./css/restaurants_favorites.css";
import UserContext from "../context/UserContext";

function Favorites() {
  let auth = useContext(UserContext);
  console.log("AUTH", auth);
  console.log("AUTH NAME", auth.user.name);

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

  return (
    <div>
      {/* Render the content to be converted to PDF */}
      <div id="pdf-container">
        <h2>{auth.user.name}</h2>
        <h1>Here is a list of your favorite restaurants, {auth.user.name}</h1>
        <h3>
          This page to list favorite restaurants that we've favorite using heart
          icon on the Home page
        </h3>
      </div>

      {/* Button to trigger PDF generation and download */}
      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
}

export default Favorites;
