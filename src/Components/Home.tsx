import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useQuizContext } from "../Context/QuizProvider";
import { quizzes } from "../Data/getQuiz";
import { SET_QUIZ } from "../Reducer/typeValues";
import { primaryBtn, header1, secondaryBtn } from "../Styles/Style";

export const Home = () => {
  const navigate = useNavigate();
  const { dispatch } = useQuizContext();

  return (
    <>
      <h1 className={header1}>Jump Rope Quizes</h1>
      <Link to="/score-board">
        <button className={secondaryBtn}>
          View My Stats
        </button>
      </Link>
      <p>
        Choose one of the following quizes to get started. They are presented
        according to the level of difficulty. Note that some questions might
        have a negative marking while the others may not. To make it easier,
        mulitple attempts are allowed!
      </p>
      {quizzes.map((quiz) => (
        <button
          className={primaryBtn}
          key={quiz.quizName}
          onClick={() => {
            dispatch({ type: SET_QUIZ, payload: quiz.quizName });
            navigate("/rules");
          }}
        >
          {quiz.quizName}
        </button>
      ))}

      {/* <button className={primaryBtn} disabled>Disabled</button> */}
    </>
  );
};
