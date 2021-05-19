import { useEffect } from "react";
import { useQuizContext } from "../Context/QuizProvider";
import { RESET, UPDATE_HIGHSCORE } from "../Reducer/typeValues";
import { primaryBtn, secondaryBtn } from "../Styles/Style";
import Party from "../Assets/Party.png";
import Sad from "../Assets/Sad.svg";
import { useNavigate } from "react-router";

export const Result = () => {
  const {
    state: { score, quizName },
    dispatch,
  } = useQuizContext();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: UPDATE_HIGHSCORE, payload: { quizName, score } });
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
          onClick={() => dispatch({ type: RESET })}
        >
          Replay this Quiz
        </button>
        <button className={primaryBtn} onClick={() => navigate("/")}>
          Play other Quizzes
        </button>
      </div>
    </div>
  );
};
