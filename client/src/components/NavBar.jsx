import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let auth = useContext(UserContext);
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    auth.setIsLoggedIn(false);
    auth.setCurrentUser({});
    navigate("/");
  };

  return (
    <div className="nav-container">
      <Link to="/">
        <button className="btn btn-outline-secondary nav-btn">Home</button>
      </Link>
      <Link to="/about">
        <button className="btn btn-outline-secondary nav-btn">About Us</button>
      </Link>
      {!auth.isLoggedIn && (
        <>
          <Link to="/login">
            <button className="btn btn-outline-secondary nav-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-danger">Sign Up</button>
          </Link>
        </>
      )}

      {auth.isLoggedIn && (
        <>
          <Link to="/favorites">
            <button className="btn btn-outline-secondary nav-btn">
              Your Favorites
            </button>
          </Link>

          <button
            className="btn btn-outline-secondary nav-btn"
            onClick={logout}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default NavBar;
