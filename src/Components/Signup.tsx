import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../Context/AuthenticationProvider";
import { SET_EMAIL, SET_NAME, SET_USERNAME } from "../Reducer/Values.type";
import { primaryBtn, secondaryBtn } from "../Styles/Style";
import { Password } from "./Password";

export const Signup = () => {
  const {
    userEntryState: { name, username, password, email },
    userEntryDispatch,
    registerUser,
  } = useAuthentication();

  const [errorMsg, setErrorMsg] = useState("");

  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPasswordValid()) {
      setErrorMsg(
        "Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters."
      );
    } else {
    await registerUser(name, username, password, email);
    }
  };

  const isPasswordValid = () => {
    if (
      password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/) ==
      null
    )
      return false;
    else return true;
  };

  return (
    <>
      <h2 className="text-2xl font-medium m-3">
        Sign <span className="text-yellow-700">up</span>
      </h2>
      <form
        className="border border-blue-900 rounded-xl p-6 md:w-3/4 m-auto lg:w-1/2"
        onSubmit={signupHandler}
      >
        <div className="p-2">
          <input
            required
            className="p-2 rounded-xl border border-transparent  focus:outline-none focus:ring-2 focus:ring-blue-900 w-3/4"
            type="text"
            value={name}
            onChange={(e) =>
              userEntryDispatch({
                type: SET_NAME,
                payload: { name: e.target.value },
              })
            }
            placeholder="Name"
          />
          <span className="p-2 bg-blue-900 text-blue-50 rounded-xl">
            <i className="fas fa-address-card fa-lg"></i>
          </span>
        </div>
        <div className="p-2">
          <span className="p-2 bg-blue-900 text-blue-50 rounded-xl">
            <i className="fas fa-at fa-lg"></i>
          </span>
          <input
            required
            className="p-2 rounded-xl border border-transparent  focus:outline-none focus:ring-2 focus:ring-blue-900 w-3/4"
            type="text"
            value={username}
            onChange={(e) =>
              userEntryDispatch({
                type: SET_USERNAME,
                payload: { username: e.target.value },
              })
            }
            placeholder="Username"
          />
        </div>
        <div className="p-2">
          <span className="p-2 bg-blue-900 text-blue-50 rounded-xl">
            <i className="fas fa-envelope fa-lg"></i>
          </span>
          <input
            required
            className="p-2 rounded-xl border border-transparent  focus:outline-none focus:ring-2 focus:ring-blue-900 w-3/4"
            type="email"
            value={email}
            onChange={(e) =>
              userEntryDispatch({
                type: SET_EMAIL,
                payload: { email: e.target.value },
              })
            }
            placeholder="Email address"
          />
        </div>
        <Password userValue={password} dispatch={userEntryDispatch} />
        <button type="submit" className={primaryBtn}>
          Register
        </button>
        {errorMsg && <p className="txt-desc primaryBg-txt">{errorMsg}</p>}
      </form>
      <div className="text-lg font-semibold p-2 md:w-3/4 lg:w-1/2 m-auto">
        Already a member?{" "}
        <NavLink to="/login">
          <button className={secondaryBtn}>Login</button>
        </NavLink>
      </div>
    </>
  );
};
