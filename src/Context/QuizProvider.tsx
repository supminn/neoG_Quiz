import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, quizReducer } from "../Reducer/quizReducer";
import { QuizContextValue } from "./Context.type";
import Loader from "react-loader-spinner";
import { useAuthentication } from "./AuthenticationProvider";
import { fetchQuizzes } from "../serverRequest/requests";

const QuizContext = createContext<QuizContextValue>({} as QuizContextValue);

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  const { showLoader, setShowLoader } = useAuthentication();

  useEffect(() => {
    (async () => {
      await fetchQuizzes(quizDispatch, setShowLoader);
    })();
  }, []);

  return showLoader ? (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-50">
      <Loader type="Oval" color="#3B82F6" height={100} width={100} />
      <h2 className="ml-4 mt-4 text-blue-900 text-3xl font-bold tracking-widest">
        Loading...
      </h2>
    </div>
  ) : (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
