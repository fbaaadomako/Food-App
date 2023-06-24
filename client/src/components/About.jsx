import React from "react";
import NavBar from "./NavBar";
import "./css/index.css";
import JuLi from "../assets/JuLi.jpg";

function About() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <h2>About Friendly Food Finder</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat id tellus ac posuere. Ut eget risus ultrices, euismod augue
          sed, consectetur adipiscing elit. Donec placerat id tellus ac posuere.
          Ut eget risus ultrices, euismod augue sed.{" "}
        </p>
        <h2>Meet the Team</h2>
        <div className="row">
          <div className="col-md-3 col-xs-6 profile-card">
            <img src={JuLi} />
            <div>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGxkM0dy06udgAAAYjtZ2-YhMYFIwWe1OS2OdIJuXM8eMN9pzmTAv8U553RynJJaPNOm0kOt48-JiUEA3jaKc61eShKFKP66s770KNI7NZTu8SsTIrLAIFJO0eEHwxf_LbxPpU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fju-li-c-a7863394%2F"
                target="_blank"
                class="fa fa-linkedin-square"
                aria-hidden="true"
              ></a>
            </div>
            <p>Ju Li Chow</p>
            <p>Front-end Developer</p>
          </div>
          <div className="col-md-9 col-xs-6 pt-3">
            <p>
              Before creating the Food Finder App, Ju Li worked as a consultant
              at KPMG in Malaysia after completing her Degree and Masters in the
              United States. She also gained work experience in the US. Although
              she had always been interested in coding, she never pursued it due
              to fear. However, one day she came across a Medium post shared by
              a friend from CodeOp, who shared her own experience of a career
              change, which inspired Ju Li. Apart from coding, Ju Li also enjoys
              engaging in adrenaline-pumping activities such as paragliding,
              flying helicopters, and scuba diving.
            </p>
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
