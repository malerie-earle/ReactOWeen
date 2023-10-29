import React, { useState } from "react";
import "../styles/CostumeContest.css";
import banner from './banner'; // Import the correct image source

const imagePaths = [
  { name: "img1", path: require("../images/1.jpg") },
  { name: "img2", path: require("../images/2.jpg") },
  // Add other image paths here
];

const costumeData = imagePaths.map((imageInfo, index) => ({
  name: "Costume " + (index + 1),
  votes: 0,
  id: index + 1,
  image: imageInfo.path, // Add the image path
}));

function CostumeContest() {
  const [costumes, setCostumes] = useState(costumeData);

  const handleVote = (costumeId) => {
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
      <div className="banner">
        <img
          src={banner} // Correct the src attribute
          alt="Costume Contest"
          style={{ width: "90%" }}
        />
      </div>
      <div className="costume">
        {costumes.map((costume) => (
          <div key={costume.id} className="costume-item">
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
