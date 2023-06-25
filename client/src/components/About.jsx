import React from "react";
import NavBar from "./NavBar";
import "./css/index.css";
import { FaLinkedin } from "react-icons/fa";
import JuLi from "../assets/JuLi.jpg";
import Felicia from "../assets/Felicia.jpg";
import Serena from "../assets/Serena.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-header">{/* <img src={foodimage} /> */}</div>
      <div className="team-container">
        <h2 className="pb-3">Meet the Team</h2>
        <div className="row mt-4 mb-5">
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
              <img src={Serena} />
            </div>
          </div>

          <div className="col-md-9 col-xs-6 pt-3">
            <div className="d-flex flex-row">
              <h5>
                Serena Ferri
                <div className=" d-inline text-secondary font-weight-normal font-italic">
                  {" "}
                  | Software Engineer
                </div>{" "}
              </h5>
              {/* <a href="#">
                <FaLinkedin className="linkedin-logo" />
              </a> */}
            </div>
            <p>
              Before creating the food finder App, Serena worked in childcare
              since she moved in England in 2019. She started being interested
              in coding by hearing stories from other people that switched their
              career with coding and got inspired by how their life changed.
              Apart from coding, Serena enjoys watching history documentaries,
              swimming and discovering and tasting other countries cuisine
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
              {/* <a href="#">
                <FaLinkedin className="linkedin-logo" />
              </a> */}
            </div>
            <p>
              Felicia is currently a social worker living and working in
              Philadelphia, that has always had an interest in tech and
              web-development. With a background in graphic design, she hopes to
              be able to combine her skills into a full stack role. When not
              coding, she enjoyes volunteering, spending time hiking and
              reading.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
