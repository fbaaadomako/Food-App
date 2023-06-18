import React from "react";
import Restaurants from "./Restaurants";
import "./css/Home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="container pt-5">
      <Restaurants />
    </div>
  );
}

export default Home;
