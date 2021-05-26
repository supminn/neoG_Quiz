import { Quiz } from "./Quiz.type";
import { QuizAction, UserEntryAction } from "../Reducer/Action.type";
import { QuizState, UserState } from "../Reducer/State.type";

export type QuizContextValue = {
  quizState: QuizState;
  quizDispatch: (args: QuizAction) => void;
  quizData: Array<Quiz>;
};

export type UserData = {
  name: string;
  _id: string;
} | null;

export type AuthenticationContextValue = {
  userData: UserData;
  login: boolean;
  userEntryState: UserState;
  userEntryDispatch: (args: UserEntryAction) => void;
  loginUser: (name: string, pwd: string) => void;
  logOutUser: () => void;
  registerUser: (
    name: string,
    username: string,
    password: string,
    email: string
  ) => void;
  showLoader: boolean;
  setShowLoader: (loader:boolean) => void;
};
