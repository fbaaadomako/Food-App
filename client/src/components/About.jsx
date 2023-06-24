import React from "react";
import NavBar from "./NavBar";
import "./css/index.css";

function About() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <h2>About Friendly Food Finder</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat id tellus ac posuere. Ut eget risus ultrices, euismod augue
          sed,{" "}
        </span>
        <h2>Meet the Team</h2>
        <div className="row">
          <div className="col-md-3 col-xs-6 profile-card">
            <img src="http://www.civilbeat.org/wp-content/uploads/2015/10/nick-grube5square-400x400.jpg" />
            <div>
              <a
                href="#"
                target="_blank"
                class="fa fa-linkedin-square"
                aria-hidden="true"
              ></a>
            </div>
            <p>JOHN DOE</p>
            <p>Front-end Developer</p>
          </div>
          <div className="col-md-9 col-xs-6 pt-3">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat id tellus ac posuere. Ut eget risus ultrices, euismod
              augue sed,{" "}
            </span>
          </div>
        </div>
        <div className="row">
          <div class="col-md-3 col-xs-6 profile-card">
            <img src="https://vlgux.com/img/team/headshots/nick-bray.jpg" />
            <div>
              <a
                href="#"
                target="_blank"
                class="fa fa-linkedin-square"
                aria-hidden="true"
              ></a>
              <p>JOHN DOE</p>
              <p>Front-end Developer</p>
            </div>
          </div>
          <div className="col-md-9 col-xs-6 pt-3">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat id tellus ac posuere. Ut eget risus ultrices, euismod
              augue sed,{" "}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-xs-6 profile-card">
            <img src="https://vlgux.com/img/team/headshots/nick-bray.jpg" />
            <div>
              <a
                href="#"
                target="_blank"
                class="fa fa-linkedin-square"
                aria-hidden="true"
              ></a>
              <p>JOHN DOE</p>
              <p>Front-end Developer</p>
            </div>
          </div>
          <div className="col-md-9 col-xs-6 bg danger">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat id tellus ac posuere. Ut eget risus ultrices, euismod
              augue sed,{" "}
            </span>
          </div>
        </div>
        <h2>Subscribe to our newsletter</h2>
      </div>
    </div>
  );
}

export default About;
