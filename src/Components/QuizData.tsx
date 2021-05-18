import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { useQuizContext } from "../Context/QuizProvider";
import { quizzes } from "../Data/getQuiz";
import { Options, Quiz } from "../Data/Quiz.type";
import {
  DECREMENT,
  INCREMENT,
  NEXT_QUESTION,
  UPDATE_ATTEMPT,
} from "../Reducer/typeValues";
import {
  primaryBtn,
  optionBtn,
  optionRight,
  optionWrong,
} from "../Styles/Style";
import { createTimer } from "../Utils/timer";
import { Modal } from "./Modal";
import { Result } from "./Result";

export const QuizData = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const {
    state: { questionNo, quizName },
    dispatch,
  } = useQuizContext();

  const selectedQuiz: Quiz = quizzes.find(
    (quiz) => quiz.quizName === quizName
  )!;

  const totalQuestions: number = selectedQuiz.questions.length;

  const { seconds, minutes, start, restart, pause } = useTimer({
    expiryTimestamp: createTimer(),
    onExpire: () => updateAnswer({ isRight: false, value: "timer expired" }),
  });

  useEffect(() => {
    dispatch({ type: UPDATE_ATTEMPT, payload: { quizName, attempt: 1 } });
    start();
  }, []);

  const updateAnswer = (option: Options) => {
    if (option.isRight) {
      dispatch({
        type: INCREMENT,
        payload: selectedQuiz.questions[questionNo].points,
      });
    } else {
      dispatch({
        type: DECREMENT,
        payload: selectedQuiz.questions[questionNo].negativePoints,
      });
    }
    setShowAnswer(true);
    pause();
  };

  const moveFurther = () => {
    setShowAnswer(false);
    dispatch({ type: NEXT_QUESTION });
    restart(createTimer());
  };

  return (
    <>
      {questionNo + 1 > totalQuestions && <Result />}
      {questionNo + 1 <= totalQuestions && (
        <div>
          <div className="flex align items-center">
            <Link to="/" className="px-2 py-1 rounded-full hover:bg-blue-200">
              <i className="fas fa-chevron-circle-left"></i>
            </Link>
            <p className="m-2 flex-grow italic text-lg">
              <span className="font-semibold text-xl">{questionNo + 1}</span>/
              {totalQuestions}
            </p>
            <span
              className={`font-medium ${
                seconds < 11 && seconds > 0
                  ? "animate-bounce text-red-600"
                  : "animate-pulse"
              }`}
            >
              0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <img className="w-full m-auto h-auto" src={selectedQuiz.questions[questionNo].image} alt="jump rope quiz"/>
          <h3 className="p-2 italic font-medium text-xl">
            {selectedQuiz.questions[questionNo].question}
          </h3>
          {selectedQuiz.questions[questionNo].options.map((option) => (
            <button
              className={
                showAnswer
                  ? option.isRight
                    ? optionRight
                    : optionWrong
                  : optionBtn
              }
              key={option.value}
              onClick={() => updateAnswer(option)}
            >
              {option.value}
            </button>
          ))}
          {showAnswer ? (
            <button className={primaryBtn} onClick={moveFurther}>
              {questionNo + 1 < totalQuestions ? (
                <i className="fas fa-arrow-right"> Next</i>
              ) : (
                "Submit"
              )}
            </button>
          ) : (
            <button className={primaryBtn} onClick={() => setShowModal(true)}>
              Restart
            </button>
          )}
        </div>
      )}

      {showModal && <Modal setShowModal={setShowModal} restart={restart} />}
    </>
  );
};
