import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useQuizContext } from "../Context/QuizProvider";
import { INITIALIZE_STATS, SET_CURRENT_QUIZ } from "../Reducer/Values.type";
import { header1, secondaryBtn } from "../Styles/Style";
import Hero from "../Assets/home.svg";
import Pic1 from "../Assets/Basic.png";
import Pic2 from "../Assets/JRD.png";
import Pic3 from "../Assets/Trick.png";
import { useEffect } from "react";
import { useAuthentication } from "../Context/AuthenticationProvider";
import { fetchQuizData } from "../serverRequest/requests";

export const Home = () => {
  const navigate = useNavigate();
  const { quizDispatch, quizState: {quizzes} } = useQuizContext();
  const {login, setShowLoader} = useAuthentication();

  useEffect(() => {
    document.title = "SupQuiz | Home";
  }, []);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("Stats")!) && login) {
      quizDispatch({ type: INITIALIZE_STATS, payload: { quizzes } });
    }
  }, [login]);

  const setCurrentQuiz = async (id: string) => {
    await fetchQuizData(quizDispatch, id, setShowLoader);
    navigate(`/rules/${id}`);
  }

  return (
    <>
      <h2 className={header1}>
        Welcome to <em>SupQuiz</em>
      </h2>
      <div className="lg:flex lg:items-center lg:justify-evenly lg:w-3/4 lg:m-auto">
        <img
          className="p-4 w-full sm:w-3/4 m-auto"
          src={Hero}
          alt="Quiz Hero"
        />
        <div className="lg:flex lg:flex-col-reverse">
          <Link to="/score-board">
            <button className={secondaryBtn}>
              <i className="fas fa-info-circle"></i> View My Statistics
            </button>
          </Link>
          <p className="p-3 md:text-lg lg:text-xl">
            Want to <em className="font-medium">test</em> your knowledge on{" "}
            <span className="text-lg  md:text-xl lg:text-2xl font-medium">
              Jump Rope
            </span>
            ? You have reached the right place 😎. We have{" "}
            <i className="fab fa-css3-alt fa-lg"></i> featured Quizzes
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-1 font-cursive">
        <i className="fas fa-arrow-left fa-sm"></i> Get Set JUMP!{" "}
        <i className="fas fa-arrow-right fa-sm"></i>
      </h1>
      {quizzes.map((quiz, index) => (
        <button
          className="border-2 border-blue-200 hover:shadow-2xl hover:border-blue-900 m-2 rounded-lg"
          key={quiz.quizName}
          onClick={() => setCurrentQuiz(quiz.id)}
        >
          <img
            className="w-60 rounded-lg"
            src={index === 0 ? Pic1 : index === 1 ? Pic2 : Pic3}
            alt={`Pic-${index + 1}`}
          />
        </button>
      ))}
    </>
  );
};
