
import React from 'react';
import Restaurants from './Restaurants';
import '../Home.css';
import logo from '../assets/logo-text.png';




function Home() {
  return (
    <div>
      <div
      className='logo'>
        <br/><br/>
      <img 
      src= {logo}
      alt='logo'
      width={200}
      height={100} />


import React from "react";
import Restaurants from "./Restaurants";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
}

export default Home;
