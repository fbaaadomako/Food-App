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

      </div>
      <Restaurants />
    </div>
  );
}

export default Home;
