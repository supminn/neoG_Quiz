type Action =
  | {
      type: "SET_QUIZ";
      payload: string;
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
      type: "RESET";
    };
