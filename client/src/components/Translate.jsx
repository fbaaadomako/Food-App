import React from "react";
import "../index.css";

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
  // return <div>About Us</div>;
}

export default Translate;
