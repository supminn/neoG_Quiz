import { quizzes } from "../Data/getQuiz";
import { Action } from "./Action.type";
import { State } from "./State.type";
import {
  DECREMENT,
  INCREMENT,
  NEXT_QUESTION,
  RESET,
  SET_QUIZ,
  SET_STATS,
  UPDATE_ATTEMPT,
  UPDATE_HIGHSCORE,
} from "./typeValues";

export const initialState: State = {
  score: 0,
  questionNo: 0,
  quizName: "",
  stats: [],
};

export const quizReducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_QUIZ:
      return {
        ...state,
        quizName: action.payload,
        score: 0,
        questionNo: 0,
      };
    case SET_STATS:
      return {
        ...state,
        stats: quizzes.map((quiz) => ({
          name: quiz.quizName,
          highScore: 0,
          attempt: 0,
        })),
      };
    case INCREMENT:
      return {
        ...state,
        score: state.score + action.payload,
      };
    case DECREMENT:
      let val = action?.payload ? action.payload : 0;
      return {
        ...state,
        score: state.score - val,
      };
      case NEXT_QUESTION:
        return {
          ...state,
          questionNo: state.questionNo + 1
        }
    case RESET:
      return {
        ...state,
        score: 0,
        questionNo: 1,
      };
    case UPDATE_ATTEMPT:
      return {
        ...state,
        stats: state.stats.map((stat) =>
          stat.name === action.payload.quizName
            ? { ...stat, attempt: stat.attempt + 1 }
            : stat
        ),
      };
    case UPDATE_HIGHSCORE:
      return {
        ...state,
        stats: state.stats.map((stat) =>
          stat.name === action.payload.quizName
            ? stat.highScore < action.payload.score
              ? { ...stat, highScore: action.payload.score }
              : stat
            : stat
        ),
      };
    default:
      return state;
  }
};
