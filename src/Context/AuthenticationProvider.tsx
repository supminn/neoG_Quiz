import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { UserState } from "../Reducer/State.type";
import { CLEAR_TEXT_FIELDS } from "../Reducer/Values.type";
import { userEntryReducer } from "../Reducer/userEntryReducer";
import { AuthenticationContextValue, LoginData } from "./Context.type";
import jwt_decode from "jwt-decode";

const AuthenticationContext = createContext({} as AuthenticationContextValue);

export const useAuthentication = () => useContext(AuthenticationContext);

export const initialUserState: UserState = {
  username: "",
  password: "",
  email: "",
  name: "",
};

const initialLoginState = JSON.parse(localStorage.getItem("login")!) || null;

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [login, setLogin] = useState<LoginData>(initialLoginState);
  const [showLoader, setShowLoader] = useState(false);
  const [userEntryState, userEntryDispatch] = useReducer(
    userEntryReducer,
    initialUserState
  );
  const navigate = useNavigate();

  const loginUser = async (name: string, password: string) => {
    try {
      setShowLoader(true);
      const { data } = await axios.post(
        "https://api-supminn.herokuapp.com/users/login",
        {
          username: name.toLowerCase(),
          password,
        }
      );
      const decodedValue: {
        token: string;
        name: string;
        iat: number;
        _id: string;
      } = jwt_decode(data.token);
      const loginData = {
        token: data.token,
        user: decodedValue.name,
        userId: decodedValue._id,
      };
      setLogin(loginData);
      localStorage.setItem("login", JSON.stringify(loginData));
      userEntryDispatch({ type: CLEAR_TEXT_FIELDS });
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message);
    } finally {
      setShowLoader(false);
    }
  };

  const logOutUser = () => {
    setLogin(null);
    localStorage.clear();
  };

  const registerUser = async (
    name: string,
    username: string,
    password: string,
    email: string
  ) => {
    try {
      setShowLoader(true);
      const { data } = await axios.post(
        "https://api-supminn.herokuapp.com/users/signup",
        {
          name,
          username: username.toLowerCase(),
          password,
          email: email.toLowerCase(),
        }
      );
      if (data.success) {
        alert(
          `Thank you ${name} for signing up with us! \nLogin to continue 🙂`
        );
        userEntryDispatch({ type: CLEAR_TEXT_FIELDS });
        navigate("/");
      }
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        login,
        userEntryState,
        userEntryDispatch,
        loginUser,
        logOutUser,
        registerUser,
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
