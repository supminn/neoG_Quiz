import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Quiz } from "./Quiz.type";
import { initialState, quizReducer } from "../Reducer/quizReducer";
import { QuizContextValue } from "./Context.type";
import Loader from "react-loader-spinner";
import { allQuizes } from "./serverQueries";
import { useAuthentication } from "./AuthenticationProvider";

const QuizContext = createContext<QuizContextValue>({} as QuizContextValue);

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({ children }) => {
  const [quizData, setQuizData] = useState([] as Array<Quiz>);
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  const { showLoader, setShowLoader } = useAuthentication();
  useEffect(() => {
    (async () => {
      try {
        setShowLoader(true);
        const {
          data: {
            data: { Quiz },
          },
        } = await axios({
          method: "post",
          url: "https://supminn-quiz.hasura.app/v1/graphql",
          data: JSON.stringify({
            query: allQuizes,
          }),
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": process.env.REACT_APP_ADMIN_KEY,
          },
        });
        const QuizData: Array<Quiz> = Quiz;
        setQuizData(QuizData);
      } catch (error) {
        console.error(error);
      } finally {
        setShowLoader(false);
      }
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
    <QuizContext.Provider value={{ quizState, quizDispatch, quizData }}>
      {children}
    </QuizContext.Provider>
  );
};
