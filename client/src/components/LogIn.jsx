import React, { useState } from "react";
import "../login_signup.css";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("Password Incorrect");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

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
      // 2. get token (the data) from server and store in localStorage
      localStorage.setItem("token", data.token);
      //3. once logged in, redirect user home page with favorites option
      // navigate("/favorites");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-4 offset-4">
          Username
          <input
            value={credentials.username}
            onChange={handleChange}
            name="username"
            type="text"
            className="form-control mb-2"
          />
          Password
          <input
            value={credentials.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control mb-2"
          />
          <button className="btn btn-danger" onClick={login}>
            Log in
          </button>
        </div>

        {error}
      </div>
    </div>
  );
}

export default LogIn;
