type Action =
  | {
      type: "SET_QUIZ";
      payload: string;
    }
  | {
      type: "SET_STATS";
    }
  | {
      type: "INCREMENT";
      payload: number;
    }
  | {
      type: "DECREMENT";
      payload?: number;
    }
  | {
      type: "UPDATE_ATTEMPT";
      payload: {
        quizName: string;
        attempt: number;
      };
    }
  | {
      type: "UPDATE_HIGHSCORE";
      payload: {
        quizName: string;
        highScore: number;
      };
    }
  | {
      type: "RESET";
    };
