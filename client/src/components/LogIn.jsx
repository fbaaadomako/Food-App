import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/login_signup.css";
import redlogo from "../assets/logo-red.png";
import Footer from "./Footer";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //Autheticaton of User & Navigation
  let auth = useContext(UserContext);
  let navigate = useNavigate();

  //log in fetch from DB
  const login = async () => {
    //do the login
    try {
      // 1. send credentials to server
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      };
      const results = await fetch("/users/login", options);
      const data = await results.json(); //this is the token
      console.log(data);
      // 2. get token (the data) from server and store in localStorage
      localStorage.setItem("token", data.token);
      // 3. add to context the current user info received from server
      auth.setCurrentUser(data.user);
      // 3. set isLoggedIn to true
      auth.setIsLoggedIn(true);
      //3. once logged in, redirect user home page with favorites option
      navigate("/favorites");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div>
      <div className="loginpage">
        <img className="registerlogo" src={redlogo} />
        <div className="logincontainer">
          <div className="row pb-3">
            <div className="col-12">
              <h1 className="registerheading">Log In</h1>
              Username:
              <input
                value={credentials.username}
                onChange={handleChange}
                name="username"
                type="text"
                className="form-control mb-2"
              />
              Password:
              <input
                value={credentials.password}
                onChange={handleChange}
                name="password"
                type="password"
                className="form-control mb-2"
              />
              <button
                className="btn btn-dark d-flex mx-auto mt-3"
                onClick={login}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
        <p className="logintext">
          <Link to="/signup" className="font-weight-bold">
            {" "}
            Register
          </Link>{" "}
          to start saving your favorite restaurants
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
