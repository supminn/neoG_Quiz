import { useEffect } from "react";
import { useQuizContext } from "../Context/QuizProvider";
import { RESET, UPDATE_HIGHSCORE } from "../Reducer/typeValues";
import { primaryBtn, secondaryBtn } from "../Styles/Style";
import Party from "../Assets/Party.png";
import Sad from "../Assets/Sad.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Result = () => {
  const {
    quizState: { score, currentQuiz },
    quizDispatch,
  } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "SupQuiz | Results"
  }, []);

  useEffect(() => {
    quizDispatch({ type: UPDATE_HIGHSCORE, payload: { quizName: currentQuiz.quizName, score } });
  }, []);

  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <img
        className="m-auto md:w-3/4 lg:w-1/2 h-auto"
        src={score >= 35 ? Party : Sad}
        alt="result"
      />
      <div className="flex-grow">
        <h3 className="text-2xl">
          Your final score: <b>{score}</b>
        </h3>
        <button
          className={secondaryBtn}
          onClick={() => quizDispatch({ type: RESET })}
        >
          Replay this Quiz
        </button>
        <button className={primaryBtn} onClick={() => navigate("/")}>
          Play other Quizzes
        </button>
        <Link to="/score-board">
        <button className={secondaryBtn}>
          <i className="fas fa-info-circle"></i> View My Statistics
        </button>
      </Link>
      </div>
    </div>
  );
};
