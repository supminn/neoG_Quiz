import { useNavigate } from "react-router";
import Logo from "../Assets/logo.png";

export const Navigation = () => {
    const navigate = useNavigate();

  return (
    <nav className="flex justify-center items-center h-12 sticky top-0 mb-1 p-4 bg-blue-900 rounded-b-xl">
      <div className="flex justify-center items-center cursor-pointer w-6/12" onClick={() => navigate("/")}>
        <img
          className="h-auto w-12 rounded-full shadow-lg"
          src={Logo}
          alt="logo"
        />
        <h2 className="font-bold font-cursive text-2xl px-1 text-blue-100">
          SupQuiz
        </h2>
      </div>
    </nav>
  );
};
