const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// const imagePaths = [
//   { 
//     name: "Red Riding Hood", 
//     className: "portrait",
//     // className: "img1",  
//     path: require("sprint1/src/images/1.jpg") 
//   },
//   { 
//     name: "Ghoul & Banshee", 
//     className: "landscape",
//     // className: "img2", 
//     path: require("sprint1/src/images/2.jpg") 
//   },
//   {
//     name: "Zombie Student", 
//     className: "landscape",
//     // className: 'img3', 
//     path: require('sprint1/src/images/3.jpg') 
//   },
//   {
//     name:"Zombie Hockey Player", 
//     className: "portrait",
//     // className: 'img4', 
//     path: require('sprint1/src/images/4.jpg') 
//   },
//   {
//     name:"1920s Gangster", 
//     className: "portrait",
//     // className: 'img5', 
//     path: require('sprint1/src/images/5.jpg') 
//   },
//   {
//     name:"Mrs. Clown", 
//     className: "portrait",
//     // className: 'img6', 
//     path: require('sprint1/src/images/6.jpg') 
//   },
//   {
//     name: "Lemon Wedge", 
//     className: "landscape",
//     // className: 'img7', 
//     path: require('sprint1/src/images/7.jpg') 
//   },
//   {
//     name:"Mr. Clown", 
//     className: "portrait",
//     // className:'img8', 
//     path: require('sprint1/src/images/8.jpg') 
//   },
//   {
//     name:"Cruella De Vil & 2 Dalmations", 
//     className: "portrait",
//     // className: 'img9', 
//     path: require('sprint1/src/images/9.jpg') 
//   },
//   {
//     name: "Mean One 'The Grinch'", 
//     className: "portrait",
//     // className: 'img10', 
//     path: require('sprint1/src/images/10.jpg') 
//   },
//   {
//     name:"Dead Seaman Capt. L. K. Holick", 
//     className: "portrait",
//     // className: 'img11', 
//     path: require('sprint1/src/images/11.jpg') 
//   },
//   {
//     name:"Voodoo Witch & Voodoo Doll", 
//     className: "portrait",
//     // className: 'img12', 
//     path: require('sprint1/src/images/12.png') 
//   },
//   {
//     name:"The Newly-Deads", 
//     className: "portrait",
//     // className: 'img13', 
//     path: require('sprint1/src/images/13.jpg') 
//   },
//   {
//     name:"Black Cat(s)", 
//     className: "portrait",
//     // className: 'img14', 
//     path: require('sprint1/src/images/14.jpg') 
//   },
//   ];
  
//   const costumeData = imagePaths.map((imageInfo, index) => ({
//   name: imageInfo.name,
//   votes: 0,
//   id: index + 1,
//   image: imageInfo.path, 
//   }));

// Define a variable to store the votes
let votes = [];

// Create a route for fetching votes
app.get('/votes', (req, res) => {
  res.json(votes);
});

// Create a route for voting
app.post('/vote/:costumeId', (req, res) => {
  const costumeId = parseInt(req.params.costumeId);

  // Simulate storing votes in memory (you'd use a database in a real app)
  votes = votes.map((vote) => {
    if (vote.id === costumeId) {
      return { ...vote, votes: vote.votes + 1 };
    }
    return vote;
  });

  res.json({ message: 'Vote recorded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
