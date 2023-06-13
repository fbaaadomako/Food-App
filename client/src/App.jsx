import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Restaurants from "./components/Restaurants";
// import Translate from "./components/Translate";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
          <Link to="/restaurants">Restaurants</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>

        {/* <Translate /> */}
      </div>
    </Router>
  );
}

export default App;
