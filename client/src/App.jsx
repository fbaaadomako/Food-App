import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Favorites from "./components/Favorites";
import SignUp from "./components/SignUp";
import About from "./components/About";
// import Translate from "./components/Translate";

import UserContext from "./context/UserContext";

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [currentUser, setCurrentUser] = useState({})

  let auth = {
    user: currentUser,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn,
    setCurrentUser
  }

  return (
  // value is visible to the context of every component
    <UserContext.Provider value={auth}>
      <Router>
    <NavBar/>
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* <Translate /> */}
        </div>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
