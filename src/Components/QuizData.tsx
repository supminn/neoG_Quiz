import {  useState } from "react";
import { useQuizContext } from "../Context/QuizProvider";
import { quizes } from "../Data/getQuiz";
import { DECREMENT, INCREMENT } from "../Reducer/typeValues";
import { primaryBtn, optionBtn } from "../Styles/Style";
import { Modal } from "./Modal";
import { Result } from "./Result";


export const QuizData = () => {
  const [showModal, setShowModal] = useState(false);

  const {state:{questionNo, quizName}, dispatch} = useQuizContext();

  const selectedQuiz: Quiz = quizes.find((quiz) => quiz.quizName === quizName)!;

  const totalQuestions: number = selectedQuiz.questions.length;

  return (
    <>
      {questionNo + 1 > totalQuestions && <Result />}
      {questionNo + 1 <= totalQuestions && (
        <div>
          <p className="m-2">
            <span className="underline">Progress</span>: {questionNo + 1}/
            {totalQuestions}
          </p>
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
