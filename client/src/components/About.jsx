import React, { useState } from "react";
import NavBar from "./NavBar";
import "./css/index.css";
import { FaLinkedin } from "react-icons/fa";
import JuLi from "../assets/JuLi.jpg";
import Felicia from "../assets/Felicia.jpg";
import Serena from "../assets/Serena.jpg";
import Footer from "./Footer";
import axios from "axios";

function About() {
  const [email, setEmail] = useState("");

  const subscribeNewsletter = async () => {
    try {
      await axios.post("/users/about", { email });
      alert("Subscribed to newsletter successfully!");
    } catch (error) {
      alert("Failed to subscribe to newsletter.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="about-header"></div>
      <div className="team-container">
        <h2 className="pb-3">Meet the Team</h2>
        <div className="row mt-4 mb-5">
          <div className="col-md-3 col-xs-6 profile-card">
            <div className="profile">
              <img src={JuLi} alt="JuLi" />
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
              Ju Li worked as a consultant at KPMG in Malaysia after completing
              her Degree and Masters in the United States. She also gained work
              experience in the US. Although she had always been interested in
              coding, she never pursued it due to fear. However, one day she
              came across a Medium post shared by a friend from CodeOp, who
              shared her own experience of a career change, which inspired Ju
              Li. Apart from coding, Ju Li also enjoys engaging in
              adrenaline-pumping activities such as paragliding, kayaking and
              scuba diving.
            </p>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-md-3 col-xs-6 profile-card">
            <div className="profile">
              <img src={Serena} alt="Serena" />
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
              Before creating the Food Finder App,, Serena worked in childcare
              since she moved to England in 2019. She started being interested
              in coding by hearing stories from other people who switched their
              career to coding and got inspired by how their lives changed.
              Apart from coding, Serena enjoys watching history documentaries,
              swimming, and discovering and tasting cuisine from different
              countries.
            </p>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-md-3 col-xs-6 profile-card">
            <div className="profile">
              <img src={Felicia} alt="Felicia" />
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
              Philadelphia, who has always had an interest in tech and web
              development. With a background in graphic design, she hopes to be
              able to combine her skills into a full-stack role. When not
              coding, she enjoys volunteering, spending time hiking, and
              reading.
            </p>
          </div>
          <h2 className="pb-3 mt-5 mb-6">What is Friendly FoodFinder?</h2>
          <br></br>
          <p>
            Our app offers a user-friendly interface, allowing you to quickly
            discover allergen-friendly options in any location. From gluten-free
            to vegan, nut-free to dairy-free, we have a wide range of filters to
            customize your search. No more scrolling through endless menus or
            calling restaurants to inquire about allergens - we've simplified
            the process for you.
            <br></br>
            <br></br>Whether you're traveling to a new city or exploring your
            local area, FriendlyFood Finder empowers you to make informed dining
            choices. Join our community today and experience the convenience and
            peace of mind that comes with finding allergen-friendly restaurants
            worldwide. Your food adventure awaits!
          </p>
        </div>
      </div>
      <header className="newsletter-container">
        <div className="section">
          <h2>Subscribe to our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive valuable content, exclusive
            offers, and more!
          </p>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="subscribe-button" onClick={subscribeNewsletter}>
              Subscribe
            </button>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default About;
