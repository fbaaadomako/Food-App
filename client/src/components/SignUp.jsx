import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../login_signup.css";

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
    // navigate("/login");
    // catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <div className="form-signin w-100 m-auto">
      <form>
        <h1>Sign Up</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="name"
          placeholder="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          type="email"
          placeholder="name@example.com"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          type="username"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
          placeholder="password"
        />
        <button className="w-100 btn btn-lg btn-primary" onClick={signup}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
