import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/login_signup.css";
import whitelogo from "../assets/logo-white.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const signup = async () => {
    let item = { name, email, username, password };

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
    // catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <div className="signuppage">
      <form>
        <img className="registerlogo" src={whitelogo} />
        <div className="signupcontainer">
          <h1 className="registerheading">Sign Up</h1>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-2"
            type="name"
          />
          E-mail:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
            type="email"
          />
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control mb-2"
            type="username"
          />
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-2"
            type="password"
          />
          <button className="btn btn-dark d-flex mx-auto mt-3" onClick={signup}>
            Register
          </button>
        </div>
      </form>
      <p className="signuptext">
        Already registered?
        <Link to="/login" className="signuptext font-weight-bold">
          {" "}
          Log In
        </Link>{" "}
        to see your favorites
      </p>
    </div>
  );
}

export default SignUp;
