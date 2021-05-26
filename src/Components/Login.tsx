import { useNavigate } from "react-router-dom";
import { Password } from "./Password";
import { useAuthentication } from "../Context/AuthenticationProvider";
import { SET_USERNAME } from "../Reducer/typeValues";
import { primaryBtn, secondaryBtn } from "../Styles/Style";

export const Login = () => {
  const {
    loginUser,
    userEntryDispatch,
    userEntryState: { username, password },
  } = useAuthentication();
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser(username, password);
  };

  return (
    <>
      <h2 className="text-2xl font-medium m-3">
        Login to <span className="text-yellow-700">continue!</span>
      </h2>
      <form
        className="border border-blue-900 rounded-xl p-6 md:w-3/4 m-auto lg:w-1/2"
        onSubmit={loginHandler}
      >
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
        <Password userValue={password} dispatch={userEntryDispatch} />
        <button type="submit" className={primaryBtn}>
          Login
        </button>
      </form>

      <div className="p-2 md:w-3/4 lg:w-1/2 m-auto">
        <b className="text-lg">Not a member? </b>
        <button className={secondaryBtn} onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </>
  );
};
