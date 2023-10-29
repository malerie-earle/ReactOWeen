import React from "react";
import "./../styles/homepage.css";
import pumpkin from "./../images/monster_pumpkin_halloween_vector_illustration.jpg";
import banner from "./../images/coollogo_com-279531859.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="flex-banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="flex-icons">
        <Link to="/snakeGame">
          <div className="icon">
            <span>Snake Game</span>
          </div>
        </Link>
        <Link to="/costumeContest">
          <div className="icon">
            <span>Costume Contest</span>
          </div>
        </Link>
        <Link to="/contactUs">
          <div className="icon">
            <span>Contact Us</span>
          </div>
        </Link>
      </div>
      <div className="flex-figure">
        <figure>
          <img className="logo" src={pumpkin} alt="Pumpkin" />
          <figcaption>
            <a href="https://www.freepik.com/free-vector/monster-pumpkin-halloween-vector-illustration_16628717.htm#query=evil%20pumpkin&position=1&from_view=search&track=ais">
              Image by inksyndromeartwork on Freepik
            </a>
          </figcaption>
        </figure>
      </div>
      <footer></footer>
    </div>
  );
};

export default HomePage;
