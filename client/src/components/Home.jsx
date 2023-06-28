import React from "react";
import Restaurants from "./Restaurants";
import "./css/Home.css";
import logo from "../assets/logo-text.png";
import Footer from "./Footer";
import NavBar from "./NavBar";
import logo2 from "../assets/logo-red.png";

function Home() {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className="row w-25 mx-auto pb-3">
        <img
          src={logo2}
          alt="logo2"
          width={100}
          height={100}
          className="logo2"
        />
        <div className="col w-25">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
      <Restaurants />
      <Footer />
    </div>
  );
}

export default Home;
