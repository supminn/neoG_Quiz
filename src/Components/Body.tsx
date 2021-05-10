import { useReducer } from "react";
import { Quiz } from "../data/quiz.types";

type ActionType =
  | {
      type: "INCREMENT";
      payload: number;
    }
  | {
      type: "DECREMENT";
      payload?: number;
    }
  | {
      type: "RESET";
    };

const initialState = {
  score: 0,
  questionNo: 0,
};

const reducer = (state: typeof initialState, action: ActionType) => {
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
export const Body = ({ quiz }: { quiz: Quiz }) => {
  const [{ score, questionNo }, dispatch] = useReducer(reducer, initialState);
  const totalQuestions: number = quiz.questions.length;

  return (
    <>
      {questionNo + 1 > totalQuestions && <h3>Final scrore {score}</h3>}
      {questionNo + 1 <= totalQuestions && (
        <div>
          <p>
            Progress: {questionNo + 1}/{totalQuestions}
          </p>
          <p>{quiz.questions[questionNo].question}</p>
          {quiz.questions[questionNo].options.map((option) => (
            <button
              key={option.value}
              style={{ display: "block", margin: "auto" }}
              onClick={() =>
                option.isRight
                  ? dispatch({
                      type: "INCREMENT",
                      payload: quiz.questions[questionNo].points,
                    })
                  : dispatch({
                      type: "DECREMENT",
                      payload: quiz.questions[questionNo].negativePoints,
                    })
              }
            >
              {option.value}
            </button>
          ))}
        </div>
      )}
      <button onClick={() => dispatch({ type: "RESET" })}>Restart</button>
    </>
  );
};
