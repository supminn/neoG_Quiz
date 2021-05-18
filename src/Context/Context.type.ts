import { Action } from "../Reducer/Action.type";
import { State } from "../Reducer/State.type";

export type ContextType ={
    state: State,
    dispatch: (args: Action) => void,
  }