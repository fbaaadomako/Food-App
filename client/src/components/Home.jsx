import React from "react";
import Restaurants from "./Restaurants";
import "./css/Home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="container pt-5">
      <div className="logo">
        <br />
        <br />
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Chef-restaurant-logo-by-DEEMKA-STUDIO-4.jpg"
          alt="logo"
          width={200}
          height={100}
        />
      </div>
      <Restaurants />
    </div>
  );
}

export default Home;
