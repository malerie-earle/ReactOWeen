import React from "react";
import "./../styles/homepage.css";
import about from "../images/construction.png";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <img src = {about}
        alt= "Under Construction" />

      </div>
    </>
  );
};

export default AboutUs;