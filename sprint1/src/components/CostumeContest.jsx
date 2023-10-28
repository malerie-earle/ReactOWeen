import "../styles/CostumeContest.css";
import React, { useState } from "react";

const imagePaths = [
  { name: "img1", path: require("../images/1.jpg") },
  { name: "img2", path: require("../images/2.jpg") },
  { name: "img3", path: require("../images/3.jpg") },
  { name: "img4", path: require("../images/4.jpg") },
  { name: "img5", path: require("../images/5.jpg") },
  { name: "img6", path: require("../images/6.jpg") },
  { name: "img7", path: require("../images/7.jpg") },
  { name: "img8", path: require("../images/8.jpg") },
  { name: "img9", path: require("../images/9.jpg") },
  { name: "img10", path: require("../images/10.jpg") },
  { name: "img11", path: require("../images/11.jpg") },
  { name: "img12", path: require("../images/12.png") },
  { name: "img13", path: require("../images/13.jpg") },
  { name: "img14", path: require("../images/14.jpg") },
];

const costumeData = imagePaths.map((imageInfo, index) => ({
  name: "Costume " + (index + 1),
  votes: 0,
  id: index + 1,
  image: imageInfo.path,
}));

function CostumeContest() {
  const [costumes, setCostumes] = useState(costumeData);

  const handleVote = (costumeId) => {
    // Find the costume by ID and update its votes
    const updatedCostumes = costumes.map((costume) => {
      if (costume.id === costumeId) {
        return { ...costume, votes: costume.votes + 1 };
      } else {
        return costume;
      }
    });

    setCostumes(updatedCostumes);
  };

  return (
    <div className="costumeContest">
      <div>
        {costumes.map((costume) => (
          <div key={costume.id}>
            <img src={costume.image} alt={costume.name} />
            <h3>{costume.name}</h3>
            <p>Votes: {costume.votes}</p>
            <button onClick={() => handleVote(costume.id)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CostumeContest;
