import React from "react";
import "./../styles/homepage.css";
import pumpkin from "./../images/pumpkin-cropped.png";
import banner from "./../images/banner-reactoween.png";
import { Link } from "react-router-dom";
import footer from "./../images/footer.png";
import home from "./../images/home.png";
import snakeGame from "./../images/hungryHaunts.png";
import costumeContest from "./../images/costumeContest.png";
import aboutUs from "./../images/aboutUs2.png";
import contactUs from "./../images/contactUs2.png";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="flex-banner">
          <img src={banner} alt="banner" />
        </div>

        <div className="main-section">
          
          
          <div className="flex-icons">
            <Link to="/aboutUs">
              <div className="icon">
              </div>
              <img
                  src={aboutUs}
                  alt="About Us"
                  className="words"
                />
            </Link>
          </div>

          <div className="flex-icons">
            <Link to="/snakeGame">
              <div className="icon">
              </div>
              <img
                  src={snakeGame}
                  alt="Snake Game"
                  className="words"
                />
            </Link>
          </div>

          <div className="flex-figure">
            <figure>
              <img className="logo" src={pumpkin} alt="Pumpkin" />
            </figure>
          </div>

          <div className="flex-icons">
            <Link to="/costumeContest">
              <div className="icon">
              </div>
              <img
                  src={costumeContest}
                  alt="Costume Contest"
                  className="words"
                />
            </Link>
          </div>

          <div className="flex-icons">
            <Link to="/contactUs">
              <div className="icon">
              </div>
              <img
                  src={contactUs}
                  alt="Contact Us"
                  className="words"
                />
            </Link>
          </div>
        </div>

        <footer>
          <img src={footer} alt="footer" className="footer" />
        </footer>
      </div>
    </>
  );
};

export default HomePage;
