import React, { useEffect, useRef, useState } from "react";
import "./../styles/GameStyle.css";
import Monitor from "./../images/Pumpkinscreen.png";
import pumpSnake from "./../images/pumpkin_ghost_head.gif";
import pumpSnakeTail from "./../images/pumpkin_ghost_tail.gif";
import useInterval from "./../useInterval";
import candy1 from "./../images/candy1.png";
import candy2 from "./../images/candy2.png";
import candy3 from "./../images/candy3.png";
import candy4 from "./../images/candy4.png";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialGhost = [14, 10];
const scale = 50;
let initialTimeDelay = 150;
const speedIncreaseFactor = 5;
let timeDelay = initialTimeDelay;

const candyImages = [candy1, candy2, candy3, candy4];

function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(initialSnake);
  const [Ghost, setGhost] = useState(initialGhost);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [candyImage, setCandyImage] = useState(null);

  useInterval(() => runGame(), delay);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, canvasX, canvasY);
        ctx.fillStyle = "#a3d001";

        if (candyImage) {
          ctx.drawImage(candyImage, Ghost[0], Ghost[1], 1, 1);
        }
        // snake's head
        const snakeHeadImage = new Image();
        snakeHeadImage.src = pumpSnake;
        ctx.drawImage(snakeHeadImage, snake[0][0], snake[0][1], 1, 1);

        // snake's tail
        for (let i = 1; i < snake.length; i++) {
          const snakeTailImage = new Image();
          snakeTailImage.src = pumpSnakeTail;
          ctx.drawImage(snakeTailImage, snake[i][0], snake[i][1], 1, 1);
        }
      }
    }
  }, [candyImage, Ghost, snake, gameOver]);

  // random candy image
  useEffect(() => {
    const randomCandyImage =
      candyImages[Math.floor(Math.random() * candyImages.length)];
    const image = new Image();
    image.src = randomCandyImage;
    image.onload = () => {
      setCandyImage(image);
    };
  }, [Ghost, gameOver]);

  function handleSetScore() {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  //sound file
  const scoreSound = new Audio("Alright.mp3");
  scoreSound.id = "score-sound";
  scoreSound.volume = 0.03;

  function play() {
    setSnake(initialSnake);
    setGhost(initialGhost);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }
  function GhostAte(newSnake) {
    let coord = Ghost.map(() => Math.floor((Math.random() * canvasX) / scale));
    if (newSnake[0][0] === Ghost[0] && newSnake[0][1] === Ghost[1]) {
      let newGhost = coord;
      setScore(score + 1);
      setGhost(newGhost);
      scoreSound.play(); // sound when the snake scores
      return true;
    }
    return false;
  }
  function checkCollision(head) {
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }
  function runGame() {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      setGameOver(true);
      handleSetScore();
    }
    if (!GhostAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
    if (GhostAte(newSnake)) {
      setScore(score + 1);
      setDelay(initialTimeDelay - score * speedIncreaseFactor);
      scoreSound.play();
    }
  }

  function changeDirection(e) {
    // eslint-disable-next-line
    switch (e.key) {
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
    }
  }

  return (
    <div onKeyDown={(e) => changeDirection(e)}>
      <img src={Monitor} alt="food" width="4000" className="monitor" />
      <canvas
        className="playArea"
        ref={canvasRef}
        width={`${canvasX}px`}
        height={`${canvasY}px`}
      />
      {gameOver && <div className="gameOver">Game Over</div>}
      <button onClick={play} className="playButton">
        Play
      </button>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
      </div>
    </div>
  );
}

export default SnakeGame;
