import React, { useState, useEffect } from 'react';
import html2pdf from "html2pdf.js";

function Favorites() {

  const onButtonClick = () => {
    const element = document.getElementById("pdf-container");

    html2pdf().set({
      margin: 0.5,
      filename: "webpage.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).from(element).save();
  };

  return (
  <div>
      {/* Render the content to be converted to PDF */}
      <div id="pdf-container">
        <h1>Test 1 2 3</h1>
        <h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumv Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h3>
      </div>

      {/* Button to trigger PDF generation and download */}
      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
}

export default Favorites;