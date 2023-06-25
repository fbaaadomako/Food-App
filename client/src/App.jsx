import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Favorites from "./components/Favorites";
import SignUp from "./components/SignUp";
import About from "./components/About";
// import NavBar from "./components/NavBar";

import UserContext from "./context/UserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  let auth = {
    user: currentUser,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn,
    setCurrentUser,
  };

  return (
    // value is visible to the context of every component
    <UserContext.Provider value={auth}>
      <Router>
        {/* <NavBar /> */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
