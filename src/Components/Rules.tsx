import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useQuizContext } from "../Context/QuizProvider";
import { quizzes } from "../Data/getQuiz";

export const Rules = () => {
  const navigate = useNavigate();
  const {
    state: { quizName },
  } = useQuizContext();
  const quizDetail = quizzes.find((quiz) => quiz.quizName === quizName);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 ">
         <Link to="/" className="font-medium px-2 py-1 rounded-full hover:bg-blue-200 absolute top-2 left-2">
           <i className="fas fa-chevron-circle-left"></i> Home
           </Link>
      <div className="max-w-lg w-full rounded-lg shadow-lg p-4 bg-white">
        <h3 className="font-semibold text-lg text-blue-800 tracking-wide mb-2">
          Instructions
        </h3>
        <ul className="list-inside mb-1 text-left">
          <li className="py-2">
            {" "}
            <i className="fab fa-gg-circle fa-lg"></i> This quiz is of level:{" "}
            <em className="font-semibold">{quizDetail?.level}</em>
          </li>

          <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> There are a total of{" "}
            <b>{quizDetail?.questions.length}</b> questions
          </li>

          <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> Each question is of <em className="font-semibold">10</em> points.
          </li>

          <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> You get <b>30 seconds</b> to answer each question.
          </li>

          <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> Score <em className="font-semibold">70</em> or above to unlock the next level
          </li>

         {quizDetail?.level!=="Easy" && <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> Every wrong answer has a negative marking of 5 points
          </li>}
        </ul>
        <div>
          <button
            className="uppercase font-semibold tracking-wide bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mt-2 focus:outline-none hover:bg-blue-200"
            onClick={() => navigate("/quiz")}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </section>
  );
};
