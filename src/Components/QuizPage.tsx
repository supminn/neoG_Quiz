import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { useQuizContext } from "../Context/QuizProvider";
import { Options } from "../Context/Quiz.type";
import {
  DECREMENT,
  INCREMENT,
  NEXT_QUESTION,
  UPDATE_ATTEMPT,
} from "../Reducer/Values.type";
import {
  primaryBtn,
  optionBtn,
  optionRight,
  optionWrong,
} from "../Styles/Style";
import { createTimer } from "../Utils/timer";
import { RestartModal } from "./RestartModal";
import { Result } from "./Result";
import { useAuthentication } from "../Context/AuthenticationProvider";

export const QuizPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const {
    quizState: { questionNo, currentQuiz },
    quizDispatch,
  } = useQuizContext();
  const { login } = useAuthentication();

  const { seconds, minutes, start, restart, pause } = useTimer({
    expiryTimestamp: createTimer(),
    onExpire: () => updateAnswer({ isRight: false, value: "timer expired" }),
  });

  const totalQuestions = currentQuiz.questions.length;

  useEffect(() => {
    document.title = `SupQuiz | ${currentQuiz.level}`;
    start();
  }, [currentQuiz]);

  useEffect(() => {
    if (questionNo + 1 === 1 && login) {
      quizDispatch({
        type: UPDATE_ATTEMPT,
        payload: { quizName: currentQuiz.quizName, attempt: 1 },
      });
    }
    if (questionNo + 1 > totalQuestions) {
      pause();
    }
  }, [questionNo, login]);

  const updateAnswer = (option: Options) => {
    if (option.isRight) {
      quizDispatch({
        type: INCREMENT,
        payload: currentQuiz.questions[questionNo].points,
      });
    } else {
      quizDispatch({
        type: DECREMENT,
        payload: currentQuiz.questions[questionNo].negativePoints,
      });
    }
    setShowAnswer(true);
    pause();
  };

  const moveFurther = () => {
    setShowAnswer(false);
    quizDispatch({ type: NEXT_QUESTION });
    restart(createTimer());
  };
  return (
    <>
      {questionNo + 1 > totalQuestions && <Result />}
      {questionNo + 1 <= totalQuestions && (
        <>
          <div className="flex align items-center md:w-3/4 lg:w-1/2 m-auto">
            <Link to="/" className="px-2 py-1 rounded-full hover:bg-blue-200">
              <i className="fas fa-chevron-circle-left"></i>
            </Link>
            <p className="m-2 flex-grow italic text-lg">
              <span className="font-semibold text-xl">{questionNo + 1}</span>/
              {totalQuestions}
            </p>
            <span
              className={`font-medium md:text-lg lg:text-xl ${
                seconds < 11 && seconds > 0
                  ? "animate-bounce text-red-600"
                  : "animate-pulse"
              }`}
            >
              0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <section className="lg:flex lg:justify-center lg:items-start lg:p-4">
            <img
              className="w-auto m-auto md:w-3/4 lg:w-1/3 flex-grow max-h-96"
              src={currentQuiz.questions[questionNo].image}
              alt="jump rope quiz"
            />
            <div className="w-10/12 m-auto md:w-5/6 lg:flex-grow lg:w-1/2">
              <h3 className="p-2 italic font-medium text-xl">
                {currentQuiz.questions[questionNo].question}
              </h3>
              {currentQuiz.questions[questionNo].options.map((option) => (
                <button
                  disabled={showAnswer}
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
                <button
                  className={primaryBtn}
                  onClick={() => setShowModal(true)}
                >
                  Restart
                </button>
              )}
            </div>
          </section>
        </>
      )}

      {showModal && (
        <RestartModal
          setShowModal={setShowModal}
          restart={restart}
          setShowAnswer={setShowAnswer}
        />
      )}
    </>
  );
};
