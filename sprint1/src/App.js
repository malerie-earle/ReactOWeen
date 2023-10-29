import "./App.css";
import HomePage from "./components/HomePage";
import SnakeGame from "./components/SnakeGame";
import CostumeContest from "./components/CostumeContest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageComponent from "./components/banner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/snakeGame" element={<SnakeGame />} />
          <Route path="/costumeContest" element={<div><ImageComponent /><CostumeContest /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
