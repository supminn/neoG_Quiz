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
} from "../Reducer/typeValues";
import {
  primaryBtn,
  optionBtn,
  optionRight,
  optionWrong,
} from "../Styles/Style";
import { createTimer } from "../Utils/timer";
import { RestartModal } from "./RestartModal";
import { Result } from "./Result";

export const QuizPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const {
    quizState: { questionNo, quizName },
    quizDispatch,
    quizData: quizzes
  } = useQuizContext();

  const selectedQuiz = quizzes.find(
    (quiz) => quiz.quizName === quizName
  )!;

  const totalQuestions = selectedQuiz.questions.length;

  const { seconds, minutes, start, restart, pause } = useTimer({
    expiryTimestamp: createTimer(),
    onExpire: () => updateAnswer({ isRight: false, value: "timer expired" }),
  });

  useEffect(() => {
    document.title = `SupQuiz | ${selectedQuiz.level}`
    start();
  }, []);

  useEffect(() => {
    if (questionNo + 1 === 1) {
      quizDispatch({ type: UPDATE_ATTEMPT, payload: { quizName, attempt: 1 } });
    }
  }, [questionNo]);

  useEffect(() => {
    if (questionNo + 1 > totalQuestions) {
      pause();
    }
  }, [questionNo]);

  const updateAnswer = (option: Options) => {
    if (option.isRight) {
      quizDispatch({
        type: INCREMENT,
        payload: selectedQuiz.questions[questionNo].points,
      });
    } else {
      quizDispatch({
        type: DECREMENT,
        payload: selectedQuiz.questions[questionNo].negativePoints,
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
              className="w-full m-auto h-auto md:w-3/4 lg:w-1/3  flex-grow"
              src={selectedQuiz.questions[questionNo].image}
              alt="jump rope quiz"
            />
            <div className="w-10/12 m-auto md:w-5/6 lg:flex-grow lg:w-1/2">
              <h3 className="p-2 italic font-medium text-xl">
                {selectedQuiz.questions[questionNo].question}
              </h3>
              {selectedQuiz.questions[questionNo].options.map((option) => (
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