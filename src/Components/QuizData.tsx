import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "../Context/QuizProvider";
import { quizzes } from "../Data/getQuiz";
import { Quiz } from "../Data/Quiz.type";
import { DECREMENT, INCREMENT, UPDATE_ATTEMPT } from "../Reducer/typeValues";
import { primaryBtn, optionBtn } from "../Styles/Style";
import { Modal } from "./Modal";
import { Result } from "./Result";

export const QuizData = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    state: { questionNo, quizName },
    dispatch,
  } = useQuizContext();

  const selectedQuiz: Quiz = quizzes.find((quiz) => quiz.quizName === quizName)!;

  const totalQuestions: number = selectedQuiz.questions.length;

  useEffect(() => {
    dispatch({ type: UPDATE_ATTEMPT, payload: { quizName, attempt: 1 } });
  }, []);

  return (
    <>
      {questionNo + 1 > totalQuestions && <Result />}
      {questionNo + 1 <= totalQuestions && (
        <div>
         <div className="flex align items-center">
         <Link to="/" className="px-3 py-1 rounded-full hover:bg-blue-200"><i className="fas fa-angle-left"></i></Link>
          <p className="m-2 flex-grow">
            <span className="underline">Progress</span>: {questionNo + 1}/
            {totalQuestions}
          </p>
         </div>
          <p className="p-2 italic font-medium text-xl">
            {selectedQuiz.questions[questionNo].question}
          </p>
          {selectedQuiz.questions[questionNo].options.map((option) => (
            <button
              className={optionBtn}
              key={option.value}
              onClick={() =>
                option.isRight
                  ? dispatch({
                      type: INCREMENT,
                      payload: selectedQuiz.questions[questionNo].points,
                    })
                  : dispatch({
                      type: DECREMENT,
                      payload:
                        selectedQuiz.questions[questionNo].negativePoints,
                    })
              }
            >
              {option.value}
            </button>
          ))}
          <button className={primaryBtn} onClick={() => setShowModal(true)}>
            Restart
          </button>
        </div>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};
