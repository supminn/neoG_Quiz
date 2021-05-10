import React from "react";
import "./App.css";
import { Body } from "./Components/Body";
import { Header } from "./Components/Header";
import { quiz } from "./data/getQuiz";

function App() {
  return (
    <div className="App">
      <Header quizName={quiz.quizName}/>
      <Body quiz={quiz}/>
    </div>
  );
}

export default App;
