import React, { useState } from "react";
import "../styles/CostumeContest.css";
import banner from '../images/15.png';
import top from "../images/Screenshot_2023-10-31_at_8.31.19_PM-removebg-preview.png";

const imagePaths = [
{ 
  name: "Red Riding Hood", 
  className: "portrait",
  // className: "img1",  
  path: require("../images/1.jpg"),
},
{ 
  name: "Ghoul & Banshee", 
  className: "landscape",
  // className: "img2", 
  path: require("../images/2.jpg") 
},
{
  name: "Zombie Student", 
  className: "landscape",
  // className: 'img3', 
  path: require('../images/3.jpg') 
},
{
  name:"Zombie Hockey Player", 
  className: "portrait",
  // className: 'img4', 
  path: require('../images/4.jpg') 
},
{
  name:"1920s Gangster", 
  className: "portrait",
  // className: 'img5', 
  path: require('../images/5.jpg') 
},
{
  name:"Mrs. Clown", 
  className: "portrait",
  // className: 'img6', 
  path: require('../images/6.jpg') 
},
{
  name: "Lemon Wedge", 
  className: "landscape",
  // className: 'img7', 
  path: require('../images/7.jpg') 
},
{
  name:"Mr. Clown", 
  className: "portrait",
  // className:'img8', 
  path: require('../images/8.jpg') 
},
{
  name:"Cruella De Vil & 2 Dalmations", 
  className: "portrait",
  // className: 'img9', 
  path: require('../images/9.jpg') 
},
{
  name: "Mean One 'The Grinch'", 
  className: "portrait",
  // className: 'img10', 
  path: require('../images/10.jpg') 
},
{
  name:"Dead Seaman Capt. L. K. Holick", 
  className: "portrait",
  // className: 'img11', 
  path: require('../images/11.jpg') 
},
{
  name:"Voodoo Witch & Voodoo Doll", 
  className: "portrait",
  // className: 'img12', 
  path: require('../images/12.png') 
},
{
  name:"The Newly-Deads", 
  className: "portrait",
  // className: 'img13', 
  path: require('../images/13.jpg') 
},
{
  name:"Black Cat(s)", 
  className: "portrait",
  // className: 'img14', 
  path: require('../images/14.jpg') 
},
];

const costumeData = imagePaths.map((imageInfo, index) => ({
  name: imageInfo.name,
  votes: 0,
  id: index + 1,
  image: imageInfo.path,
}));

function CostumeContest() {
  const [costumes, setCostumes] = useState(costumeData);
  const [totalVotes, setTotalVotes] = useState(0);

  const handleVote = (costumeId) => {
    const updatedCostumes = costumes.map((costume) => {
      if (costume.id === costumeId) {
        return { ...costume, votes: costume.votes + 1 };
      } else {
        return costume;
      }
    });

    const newTotalVotes = updatedCostumes.reduce((total, costume) => total + costume.votes, 0);

    // Update the state with the updatedCostumes here
    setCostumes(updatedCostumes);
    setTotalVotes(newTotalVotes);
  };

  return (
    <div className="costumeContest">
      <div className="banner">
        <img
          src={banner}
          alt="Costume Contest"
          className="banner1"
        />
      </div>
      <div className="costume">
        {costumes.map((costume) => (
          <div key={costume.id} className="costume-item">
            <img
              src={costume.image}
              alt={costume.name}
              className="costumePic"
            />
            <div className="info">
              <h3>{costume.name}</h3>
              <p>Votes: {costume.votes}</p>
              <button className="myButton" onClick={() => handleVote(costume.id)}>
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalVotes">
        Total Votes: {totalVotes}
      </div>
    </div>
  );
}
export default CostumeContest;

