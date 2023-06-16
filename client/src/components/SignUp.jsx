import React from "react";
import "../login_signup.css";

function SignUp() {
  return (
    <div className="form-signin w-100 m-auto">
      <form>
        <h1>Sign Up</h1>
      <input className="form-control" type="name" placeholder="name"></input>
        <input className="form-control" type="email" placeholder="name@example.com"></input>
        <input className="form-control" type="username" placeholder="username"></input>
        <input className="form-control" type="password" placeholder="password"></input>
        <button className="w-100 btn btn-lg btn-primary"type="submit">Register</button>
    </form>
    </div>
      )
}

export default SignUp;
