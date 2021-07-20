import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

export const Navigation = () => {
    const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center h-12 sticky top-0 mb-1 p-4 bg-blue-900 rounded-b-xl">
      <div className="flex justify-center items-center cursor-pointer " onClick={() => navigate("/")}>
        <img
          className="h-auto w-12 rounded-full shadow-lg"
          src={Logo}
          alt="logo"
        />
        <h2 className="font-cursive text-2xl px-1 text-blue-100">
          SupQuiz
        </h2>
      </div>
      <Link to="/profile">
        <i className="fas fa-user fa-lg text-blue-100"></i>
      </Link>
    </nav>
  );
};
