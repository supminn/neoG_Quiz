import React, { useState } from "react";
import { QuizData } from "./Components/QuizData";
import { Home } from "./Components/Home";
import {Routes, Route} from "react-router-dom";
import { ScoreBoard } from "./Components/ScoreBoard";

function App() {
  const [quizName, setQuizName] = useState("");

  return (
    <div className="text-center text-blue-900 bg-blue-50 p-4 h-screen">
      <Routes>
        <Route path="/" element={<Home setQuizName={setQuizName}/>}/>
        <Route path="/quiz" element={<QuizData quizName={quizName}/>}/>
        <Route path="/score-board" element={<ScoreBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
