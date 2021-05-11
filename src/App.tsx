import React, { useState } from "react";
import "./App.css";
import { QuizData } from "./Components/QuizData";
import { Home } from "./Components/Home";
import {Routes, Route} from "react-router-dom";
import { ScoreBoard } from "./Components/ScoreBoard";

function App() {
  const [quizName, setQuizName] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setQuizName={setQuizName}/>}/>
        <Route path="/quiz" element={<QuizData quizName={quizName}/>}/>
        <Route path="/score-board" element={<ScoreBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
