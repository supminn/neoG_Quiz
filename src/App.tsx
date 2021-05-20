import {
  Home,
  QuizData,
  ScoreBoard,
  Rules,
  Navigation,
  Profile,
  Footer,
} from "./Components";
import { Routes, Route } from "react-router-dom";
import { SET_STATS } from "./Reducer/typeValues";
import { useEffect } from "react";
import { useQuizContext } from "./Context/QuizProvider";
import { quizzes } from "./data/getQuiz";

function App() {
  const { dispatch } = useQuizContext();

  useEffect(() => {
    dispatch({ type: SET_STATS, payload: quizzes });
  }, []);

  return (
    <div className="text-center text-blue-900 bg-blue-50 h-full min-h-screen">
      <Navigation />
      <div className="px-2 min-h-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizData />} />
          <Route path="/score-board" element={<ScoreBoard />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
