import axios from "axios";
import { QuizAction } from "../Reducer/Action.type";
import { SET_CURRENT_QUIZ, SET_QUIZZES } from "../Reducer/typeValues";
import { individualQuizQuery, quizzesQuery } from "./queries";

export const fetchQuizzes = async (
  quizDispatch: (args: QuizAction) => void,
  setShowLoader: (value: boolean) => void
) => {
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
        query: quizzesQuery,
      }),
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.REACT_APP_ADMIN_KEY,
      },
    });
    quizDispatch({ type: SET_QUIZZES, payload: Quiz });
  } catch (error) {
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};

export const fetchQuizData = async (
  quizDispatch: (args: QuizAction) => void,
  id: string,
  setShowLoader: (value: boolean) => void
) => {
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
        query: individualQuizQuery(id),
      }),
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.REACT_APP_ADMIN_KEY,
      },
    });
    quizDispatch({ type: SET_CURRENT_QUIZ, payload: Quiz[0] });
  } catch (error) {
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};
