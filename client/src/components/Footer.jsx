import React from "react";
import { Link } from "react-router-dom";
import whitelogo from "../assets/logo-white.png";
import "./css/index.css";

function Footer() {
  return (
    <div className="footersection">
      <div className="footercontainer">
        <div className="row m-5">
          <div className="col-5 ">
            <img src={whitelogo} className="footerlogo" />
          </div>
          <div className="col-7 footerlinks">
            <Link to="/">Home</Link>
            <br />
            <Link to="/favorites">Favorites</Link>
            <br />
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
            <br />
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
