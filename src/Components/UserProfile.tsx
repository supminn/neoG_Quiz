import { Link } from "react-router-dom";
import { useAuthentication } from "../Context/AuthenticationProvider";
import { primaryBtn, secondaryBtn } from "../Styles/Style";

export const UserProfile = () => {
  const { logOutUser, login } = useAuthentication();

  return (
    <>
      <h2 className="text-2xl font-medium m-2">
        User <span className="text-yellow-700">Profile</span>
      </h2>
      <div className="div-container">
        <i className="fas fa-5x fa-user-circle primaryBg-txt"></i>
        <h3 className="text-xl font-medium">
          Welcome <span className="font-bold">{login!.user}</span>
        </h3>
        <div className="user-nav-container">
          <Link
            to="/"
            className={secondaryBtn}
          >
            Home
          </Link>
          <Link
            to="/score-board"
            className={secondaryBtn}
          >
            Scores and Statistics
          </Link>
        </div>
        <button className={primaryBtn} onClick={logOutUser}>
          Logout
        </button>
      </div>
    </>
  );
};
