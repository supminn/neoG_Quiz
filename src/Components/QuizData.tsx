import { useReducer } from "react";
import { quizes } from "../Data/getQuiz";
import { primaryBtn, secondaryBtn } from "../Styles/Style";



const initialState = {
  score: 0,
  questionNo: 0,
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        score: state.score + action.payload,
        questionNo: state.questionNo + 1,
      };
    case "DECREMENT":
      let val = action?.payload ? action.payload : 0;
      return {
        score: state.score - val,
        questionNo: state.questionNo + 1,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const QuizData = ({ quizName }: { quizName: string }) => {
  const [{ score, questionNo }, dispatch] = useReducer(reducer, initialState);
  const selectedQuiz: Quiz = quizes.find((quiz) => quiz.quizName === quizName)! //not-null assertion operator
  const totalQuestions: number = selectedQuiz.questions.length;

  return (
    <>
      {questionNo + 1 > totalQuestions && <h3>Final scrore {score}</h3>}
      {questionNo + 1 <= totalQuestions && (
        <div>
          <p className="m-2">
            <span className="underline">Progress</span>: {questionNo + 1}/{totalQuestions}
          </p>
          <p className="p-2 italic font-medium text-xl">{selectedQuiz.questions[questionNo].question}</p>
          {selectedQuiz.questions[questionNo].options.map((option) => (
            <button className={secondaryBtn}
              key={option.value}
              onClick={() =>
                option.isRight
                  ? dispatch({
                      type: "INCREMENT",
                      payload: selectedQuiz.questions[questionNo].points,
                    })
                  : dispatch({
                      type: "DECREMENT",
                      payload:
                        selectedQuiz.questions[questionNo].negativePoints,
                    })
              }
            >
              {option.value}
            </button>
          ))}
        </div>
      )}
      <button className={primaryBtn} onClick={() => dispatch({ type: "RESET" })}>Restart</button>
    </>
  );
};
