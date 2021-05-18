import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useQuizContext } from "../Context/QuizProvider"
import { RESET, UPDATE_HIGHSCORE } from "../Reducer/typeValues";
import { primaryBtn, secondaryBtn } from "../Styles/Style"

export const Result = () => {
  const {state:{score, quizName}, dispatch} = useQuizContext();

  useEffect(() => {
      dispatch({type: UPDATE_HIGHSCORE, payload:{quizName, score}})
  },[]);

    return(
        <>
          <h3 className="text-2xl">
            Your final score: <b>{score}</b>
          </h3>
          <Link to="/" className={`${primaryBtn} w-max`}>
            Play other Quizes
          </Link>
          <button
            className={secondaryBtn}
            onClick={() => dispatch({ type: RESET })}
          >
            Replay this Quiz
          </button>
        </>
    )
}