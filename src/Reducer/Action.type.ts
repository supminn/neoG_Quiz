import {
  DECREMENT,
  INCREMENT,
  RESET,
  SET_QUIZ,
  SET_STATS,
  UPDATE_ATTEMPT,
  UPDATE_HIGHSCORE,
  UNLOCK_QUIZ
} from "./typeValues";

export type Action =
  | {
      type: typeof SET_QUIZ;
      payload: string;
    }
  | {
      type: typeof SET_STATS;
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
      type: typeof UNLOCK_QUIZ;
    }
  | {
      type: typeof RESET;
    };
