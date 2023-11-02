import React from "react";
import "./../styles/ContactUs.css";
import Picture from "./../images/12.png"
import ContactUsLogo from "./../images/ContactUs.png"
import AboutUsLogo from "./../images/AboutUs.png"
import malerie from "./../images/Screenshot 2023-07-27 at 12.39.58 PM.png";
import justin from "./../images/20231031_155043.jpg";
import ryan from "./../images/Snapchat-238488373.jpg";
import chris from "./../images/chris.png";


function ContactUs() {
  return (
    <div className="ContactUs">
      <div className="Main">
        <center>
          <img src={ContactUsLogo} className="ContactUsLogo" alt="contact-us"></img>
        </center>
        <div className="Bar"></div>
        <div class="container">
        <form action="mailto:ks.chris352010@gmail.com">

          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullname" placeholder="Your full name.."></input>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." className="ta"></textarea>

          <input type="submit" value="Submit"></input>

        </form>
        </div>
        <div className="Bar"></div>
        <center>
          <img src={AboutUsLogo} className="ContactUsLogo" alt="about us"></img>
        </center>
        <div className="Bar"></div>
        <div className="Grid">
          <div className="GridItem">
            <img src={ryan} alt="The Scrum Lord: Ryan" className="Portrait"></img>
            <center>
              <h3>Ryan</h3>
            </center>
            <p className="Desc">Rising from darkness Ryan holds the title of 'Scrum Lord'</p>
          </div>
          <div className="GridItem">
            <img src={justin} alt="Hackerman Justin" className="Portrait"></img>
            <center>
              <h3>Justin</h3>
            </center>
            <p className="Desc">The ultimate 'Hackerman' Justin is the ultimate hacker bro.</p>
          </div>
          <div className="GridItem">
            <img src={malerie} alt="Malerie: Of Darkness" className="Portrait"></img>
            <center>
              <h3>Malerie</h3>
            </center>
            <p className="Desc">Malerie is the 'Chuck Norris' of website development.</p>
          </div>
          <div className="GridItem">
            <img src={chris} alt="Chris 'The Chris' Chris" className="Portrait"></img>
            <center>
              <h3>Chris</h3>
            </center>
            <p className="Desc">They call him 'the streets' because you better look both ways before you cross him.</p>
          </div>
        </div>
        <div className="Bar"></div>
        <center>
          <a href="#top">Back to top</a>
        </center>
      </div>
    </div>
  );
};

export default ContactUs;

