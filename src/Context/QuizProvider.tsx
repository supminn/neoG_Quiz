import { createContext, useContext, useReducer } from "react";
import { initialState, quizReducer } from "../Reducer/quizReducer";

const QuizContext = createContext({
  state: initialState,
  dispatch: function (args: Action) {
    console.log("Dispatch");
  },
});

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
