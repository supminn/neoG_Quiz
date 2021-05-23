import { Quiz } from "./Quiz.type";
import { Action } from "../Reducer/Action.type";
import { State } from "../Reducer/State.type";

export type ContextType ={
    quizState: State,
    quizDispatch: (args: Action) => void,
    quizData:Array<Quiz>
  }