import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/login_signup.css";
import whitelogo from "../assets/logo-white.png";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let item = { name, email, username, password };

  //Handling "REGISTER" Button
  const signup = async (e) => {
    e.preventDefault();

    // 1. send the registration credentials to server
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    let results = await fetch("/users/register", options);
    results = await results.json();

    localStorage.setItem("user-info", JSON.stringify(results));
    //3. once logged in, redirect user to log-in page
    navigate("/login");
  };

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   const currentRoute = window.location.pathname;

  //   if (currentRoute === "/signup") {
  //     body.style.backgroundColor = "#e71212";
  //   } else if (currentRoute === "/login") {
  //     body.style.backgroundColor = "#ffffff";
  //   } else {
  //     body.style.backgroundColor = "";
  //   }
  // }, []);

  return (
    <div className="signuppage">
      <form onSubmit={signup}>
        <img className="registerlogo" src={whitelogo} />
        <Helmet>
          {/* <meta name="google" content="notranslate" /> */}
          <script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            async
          ></script>
          <script>
            {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
          }
          `}
          </script>
        </Helmet>
        <div className="signupcontainer">
          <h1 className="registerheading">Sign Up</h1>
          <div id="google_translate_element"></div>
          Name:
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-2"
            type="name"
          />
          E-mail:
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
            type="email"
          />
          Username:
          <input
            required
            type="username"
            className="form-control mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          Password:
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-2"
            type="password"
          />
          <button className="btn btn-dark d-flex mx-auto mt-4">Register</button>
        </div>
      </form>
      <p className="signuptext">
        Already registered?
        <Link to="/login" className="font-weight-bold">
          {" "}
          Log In
        </Link>{" "}
        to see your favorites
      </p>
      <Footer />
    </div>
  );
}

export default SignUp;
