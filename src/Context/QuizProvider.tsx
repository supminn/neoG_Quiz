import { createContext, useContext, useReducer } from "react";
import { initialState, quizReducer } from "../Reducer/quizReducer";
import { ContextType } from "./Context.type";

const QuizContext = createContext<ContextType>({} as ContextType);

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
