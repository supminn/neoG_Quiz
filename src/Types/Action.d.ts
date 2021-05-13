type Action =
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