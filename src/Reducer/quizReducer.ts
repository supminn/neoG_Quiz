import { DECREMENT, INCREMENT, RESET, SET_QUIZ } from "./typeValues";

export const initialState: State = {
  score: 0,
  questionNo: 0,
  quizName: "",
};

export const quizReducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_QUIZ:
      return {
        quizName: action.payload,
        score:0,
        questionNo: 1
      };
    case INCREMENT:
      return {
        ...state,
        score: state.score + action.payload,
        questionNo: state.questionNo + 1,
      };
    case DECREMENT:
      let val = action?.payload ? action.payload : 0;
      return {
        ...state,
        score: state.score - val,
        questionNo: state.questionNo + 1,
      };
    case RESET:
      return {
        ...state,
        score:0,
        questionNo: 1
      };
    default:
      return state;
  }
};
