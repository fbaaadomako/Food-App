import React from "react";
import NavBar from "./NavBar";
import "./css/index.css";
import { FaLinkedin } from "react-icons/fa";
import JuLi from "../assets/JuLi.jpg";
import Felicia from "../assets/Felicia.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-header">{/* <img src={foodimage} /> */}</div>
      <div className="team-container">
        <h2 className="pb-3">Meet the Team</h2>
        <div className="row">
          <div className="col-md-3 col-xs-6 profile-card">
            <div className="profile">
              <img src={JuLi} />
            </div>
          </div>

          <div className="col-md-9 col-xs-6 pt-3">
            <div className="d-flex flex-row">
              <h5>
                Ju Li Chow
                <div className=" d-inline text-secondary font-weight-normal font-italic">
                  {" "}
                  | Software Engineer
                </div>{" "}
              </h5>
              <a href="https://www.linkedin.com/in/ju-li-c-a7863394/">
                <FaLinkedin className="linkedin-logo" />
              </a>
            </div>
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
        <div className="row mt-4 mb-5">
          <div className="col-md-3 col-xs-6 profile-card">
            <div className="profile">
              <img src={Felicia} />
            </div>
          </div>

          <div className="col-md-9 col-xs-6 pt-3">
            <div className="d-flex flex-row">
              <h5>
                Felicia Baa-Adomako
                <div className=" d-inline text-secondary font-weight-normal font-italic">
                  {" "}
                  | Web Developer
                </div>{" "}
              </h5>
              <a href="#">
                <FaLinkedin className="linkedin-logo" />
              </a>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
