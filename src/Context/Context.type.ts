import { QuizAction, UserEntryAction } from "../Reducer/Action.type";
import { QuizState, UserState } from "../Reducer/State.type";

export type QuizContextValue = {
  quizState: QuizState;
  quizDispatch: (args: QuizAction) => void;
};

export type LoginData = {
  token: string;
  user: string;
} | null;


export type AuthenticationContextValue = {
  login: LoginData;
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
  setShowLoader: (loader: boolean) => void;
};
