import { initialUserState } from "../Context/AuthenticationProvider";
import { UserEntryAction } from "./Action.type";
import { UserState } from "./State.type";
import {
  CLEAR_TEXT_FIELDS,
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
  SET_USERNAME,
} from "./typeValues";

export const userEntryReducer = (state: UserState, action: UserEntryAction) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload.name };

    case SET_USERNAME:
      return { ...state, username: action.payload.username };

    case SET_PASSWORD:
      return { ...state, password: action.payload.password };

    case SET_EMAIL:
      return { ...state, email: action.payload.email };

    case CLEAR_TEXT_FIELDS:
      return initialUserState;

    default:
      return state;
  }
};
