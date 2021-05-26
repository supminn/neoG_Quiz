import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { UserState } from "../Reducer/State.type";
import { CLEAR_TEXT_FIELDS } from "../Reducer/typeValues";
import { userEntryReducer } from "../Reducer/userEntryReducer";
import { AuthenticationContextValue, UserData } from "./Context.type";

const AuthenticationContext = createContext({} as AuthenticationContextValue);

export const useAuthentication = () => useContext(AuthenticationContext);

export const initialUserState: UserState = {
  username: "",
  password: "",
  email: "",
  name: "",
};

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState(false);
  const [userEntryState, userEntryDispatch] = useReducer(
    userEntryReducer,
    initialUserState
  );
  const navigate = useNavigate();

  const loginUser = async (name: string, pwd: string) => {
    try {
      setShowLoader(true);
      const { data } = await axios.post(
        "https://api-supminn.herokuapp.com/users/login",
        {
          username: name.toLowerCase(),
          password: pwd,
        }
      );
      setLogin(true);
      localStorage.setItem("login", "true");
      setUserData(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
      userEntryDispatch({ type: CLEAR_TEXT_FIELDS });
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message);
    }
    finally{
      setShowLoader(false);
    }
  };

  const logOutUser = () => {
    setShowLoader(true);
    setLogin(false);
    setUserData(null);
    localStorage.removeItem("login");
    localStorage.removeItem("userData");
    setShowLoader(false);
    navigate("/");
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
      setLogin(true);
      localStorage.setItem("login", "true");
      setUserData(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
      userEntryDispatch({ type: CLEAR_TEXT_FIELDS });
      navigate("/profile");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message);
    }
    finally{
      setShowLoader(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        userData,
        login,
        userEntryState,
        userEntryDispatch,
        loginUser,
        logOutUser,
        registerUser,
        showLoader,
        setShowLoader
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
