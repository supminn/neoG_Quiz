import { Quiz } from "../Context/Quiz.type";
import {
  DECREMENT,
  INCREMENT,
  RESET,
  SET_QUIZ,
  UPDATE_ATTEMPT,
  UPDATE_HIGHSCORE,
  NEXT_QUESTION,
  CLEAR_STATS,
  INITIALIZE_STATS,
  SET_USERNAME,
  SET_PASSWORD,
  SET_NAME,
  SET_EMAIL,
  CLEAR_TEXT_FIELDS,
} from "./typeValues";

export type QuizAction =
  | {
      type: typeof SET_QUIZ;
      payload: string;
    }
  | {
      type: typeof INCREMENT;
      payload: number;
    }
  | {
      type: typeof DECREMENT;
      payload?: number;
    }
  | {
      type: typeof UPDATE_ATTEMPT;
      payload: {
        quizName: string;
        attempt: number;
      };
    }
  | {
      type: typeof UPDATE_HIGHSCORE;
      payload: {
        quizName: string;
        score: number;
      };
    }
  | {
      type: typeof INITIALIZE_STATS;
      payload: { quizzes: Array<Quiz> };
    }
  | {
      type: typeof CLEAR_STATS;
      payload: { quizzes: Array<Quiz> };
    }
  | {
      type: typeof NEXT_QUESTION;
    }
  | {
      type: typeof RESET;
    };

export type UserEntryAction =
  | {
      type: typeof SET_USERNAME;
      payload: { username: string };
    }
  | {
      type: typeof SET_PASSWORD;
      payload: { password: string };
    }
  | {
      type: typeof SET_NAME;
      payload: { name: string };
    }
  | {
      type: typeof SET_EMAIL;
      payload: { email: string };
    }
  | {
      type: typeof CLEAR_TEXT_FIELDS;
    };
