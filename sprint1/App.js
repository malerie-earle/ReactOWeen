import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import Player from "./costumes";
import pic from "../src/assets/Images/coollogo_com-257131058.png";
import img1 from "../src/assets/Images/1.jpg";
import img2 from "../src/assets/Images/2.jpg";
import img3 from "../src/assets/Images/3.jpg";
import img4 from "../src/assets/Images/4.jpg";
import img5 from "../src/assets/Images/5.jpg";
import img6 from "../src/assets/Images/6.jpg";
import img7 from "../src/assets/Images/7.jpg";
import img8 from "../src/assets/Images/8.jpg";
import img9 from "../src/assets/Images/9.jpg";
import img10 from "../src/assets/Images/10.jpg";
import img11 from "../src/assets/Images/11.jpg";
import img12 from "../src/assets/Images/12.png";
import img13 from "../src/assets/Images/13.jpg";
import img14 from "../src/assets/Images/14.jpg";
// import group1 from "../src/assets/Images/group1.jpg";
// import group2 from "../src/assets/Images/group2.jpeg";
const costumeData = [
  {
  image: pic,
  },
  {
    name: "Red Riding Hood",
    votes: 0,
    id: 1,
    image: img1
  },
  {
    name: "Banshee and Ghoul",
    votes: 0,
    id: 2,
    image: img2
  },
  {
    name: "Zombie Student",
    votes: 0,
    id: 3,
    image: img3
  },
  {
    name: "Zombie Hockey Player",
    votes: 0,
    id: 4,
    image: img4
  },
  {
    name: "Gangster",
    votes: 0,
    id: 5,
    image: img5
  },
  {
    name: "Clown",
    votes: 0,
    id: 6,
    image: img6
  },
    {
    name: "Lemon Wedge",
    votes: 0,
    id: 7,
    image: img7
  },
  {
    name: "Clown 2",
    votes: 0,
    id: 8,
    image: img8
  },
  {
    name: "Cruella De Vil and 2 Dalmations",
    votes: 0,
    id: 9,
    image: img9
  },
  {
    name: "Grinch",
    votes: 0,
    id: 10,
    image: img10
  },
  {
    name: "Dead Capt. L. K. Holick",
    votes: 0,
    id: 11,
    image: img11
  },
  {
    name: "Voodoo Witch & her doll",
    votes: 0,
    id: 12,
    image: img12
  },
  {
    name: "The NewlyDeads",
    votes: 0,
    id: 13,
    image: img13
  },
  {
    name: "Black Cat",
    votes: 0,
    id: 14,
    image: img14
  },

];
class App extends Component {
  state = {
    costumeDetails: []
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone('rnfUw67dSNAn5zsk');
    this.drone.on('open', error => {
      if (error) {
        return console.error("Error");
      }
    })
    const room = this.drone.subscribe('live-votes');
    room.on('data', (data) => {
      this.state.costumeDetails.map(costume => {
        if (costume.name === data) {
          return Object.assign({}, costume, {
            votes: costume.votes += 5
          });
        } else {
          return costume;
        }
      });
      this.setState({
        costumeDetails: this.state.costumeDetails
      });
    });
  }

  componentDidMount() {
    this.setState({ costumeDetails: costumeData });
  }
  handleEvent = costumeId => {
    const vote = { costume_id: costumeId };
    axios.post("http://localhost:4000/vote", { vote }).then(response => {
      console.log(response);
    });
  };
  render() {
    return costumeData.map(costume => (
      <Player
        key={costume.id}
        name={costume.name}
        image={costume.image}
        votes={costume.votes}
        id={costume.id}
      />
    ));
  }
}
export default App;