import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuizContext } from "../Context/QuizProvider";

export const Rules = () => {
  const navigate = useNavigate();
  const {quizId} = useParams();
  const {
    quizData:quizzes
  } = useQuizContext();
  const quizDetail = quizzes.find((quiz) => quiz.id === quizId);

  useEffect(() => {
    document.title = "SupQuiz | Rules"
  }, []);

  return (
    <section className="flex items-center justify-center px-4 ">
      <div className="mt-16 w-full rounded-lg shadow-lg p-4 bg-white md:w-3/4 lg:w-6/12">
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
            <i className="fab fa-gg-circle fa-lg"></i> Each question is of{" "}
            <em className="font-semibold">10</em> points.
          </li>

          <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> You get <b>30 seconds</b>{" "}
            to answer each question.
          </li>

          <li className="py-2">
            <i className="fab fa-gg-circle fa-lg"></i> Score{" "}
            <em className="font-semibold">70%</em> or above to unlock the next
            level
          </li>

          {quizDetail?.level !== "Easy" && (
            <li className="py-2">
              <i className="fab fa-gg-circle fa-lg"></i> Every wrong answer has
              a negative marking of <b>5</b> points
            </li>
          )}
        </ul>
        <div>
          <button
            className="uppercase font-semibold tracking-wide bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mt-2 focus:outline-none hover:bg-blue-200"
            onClick={() => navigate(`/quiz/${quizId}`)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </section>
  );
};
