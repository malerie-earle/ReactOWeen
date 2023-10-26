import React from "react";
import "./../styles/homepage.css";
import pumpkin from "./../images/monster_pumpkin_halloween_vector_illustration.jpg";

const HomePage = () => {
  return (
    <>
    <h1>REACT-O-WEEN</h1>
      <div className="flex-figure">
        <figure>
          <img className="logo" src={pumpkin} alt="Pumpkin" />
          <figcaption>
            <a href="https://www.freepik.com/free-vector/monster-pumpkin-halloween-vector-illustration_16628717.htm#query=evil%20pumpkin&position=1&from_view=search&track=ais">
              Image by inksyndromeartwork
            </a>
            on Freepik
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default HomePage;
