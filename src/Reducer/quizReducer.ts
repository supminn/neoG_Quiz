import { Quiz } from "../Context/Quiz.type";
import { QuizAction } from "./Action.type";
import { QuizState } from "./State.type";
import {
  CLEAR_STATS,
  DECREMENT,
  INCREMENT,
  INITIALIZE_STATS,
  NEXT_QUESTION,
  RESET,
  SET_QUIZ,
  UPDATE_ATTEMPT,
  UPDATE_HIGHSCORE,
} from "./typeValues";


export const initialState: QuizState = {
  score: 0,
  questionNo: 0,
  currentQuiz: {} as Quiz,
  stats: JSON.parse(localStorage.getItem("Stats")!) || [],
};

export const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case SET_QUIZ:
      return {
        ...state,
        currentQuiz: action.payload,
        score: 0,
        questionNo: 0,
      };
    case INITIALIZE_STATS:
      const initialStats =  action.payload.quizzes.map((quiz) => ({
        name: quiz.quizName,
        highScore: 0,
        attempt: 0,
      }))
      localStorage.setItem("Stats", JSON.stringify(initialStats));
      return {
        ...state,
        stats: initialStats
      }
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
        questionNo: state.questionNo + 1,
      };

    case RESET:
      return {
        ...state,
        score: 0,
        questionNo: 0,
      };

    case UPDATE_ATTEMPT: {
      const updatedState = {
        ...state,
        stats: state.stats.map((stat) =>
          stat.name === action.payload.quizName
            ? { ...stat, attempt: stat.attempt + 1 }
            : stat
        ),
      };
      localStorage.setItem("Stats", JSON.stringify(updatedState.stats));
      return updatedState;
    }

    case UPDATE_HIGHSCORE: {
      const updatedState = {
        ...state,
        stats: state.stats.map((stat) =>
          stat.name === action.payload.quizName
            ? stat.highScore < action.payload.score
              ? { ...stat, highScore: action.payload.score }
              : stat
            : stat
        ),
      };
      localStorage.setItem("Stats", JSON.stringify(updatedState.stats));
      return updatedState;
    }

    case CLEAR_STATS:
      localStorage.removeItem("Stats");
      return {
        ...state,
        stats: action.payload.quizzes.map((quiz) => ({
          name: quiz.quizName,
          highScore: 0,
          attempt: 0,
        }))
      };

    default:
      return state;
  }
};
