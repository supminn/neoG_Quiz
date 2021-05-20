import {
  DECREMENT,
  INCREMENT,
  RESET,
  SET_QUIZ,
  UPDATE_ATTEMPT,
  UPDATE_HIGHSCORE,
  NEXT_QUESTION,
  CLEAR_STATS,
} from "./typeValues";

export type Action =
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
      type: typeof CLEAR_STATS;
    }
  | {
      type: typeof NEXT_QUESTION;
    }
  | {
      type: typeof RESET;
    };
