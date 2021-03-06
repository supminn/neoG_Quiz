import { useEffect } from "react";
import { useQuizContext } from "../Context/QuizProvider";
import { CLEAR_STATS } from "../Reducer/Values.type";
import { secondaryBtn } from "../Styles/Style";

export const ScoreBoard = () => {
  const {
    quizState: { stats, quizzes },
    quizDispatch,
  } = useQuizContext();

  useEffect(() => {
    document.title = "SupQuiz | Scores"
  }, []);


  return (
    <div className="md:px-4 lg:px-12">
      <h2 className="text-xl font-medium mb-2"> Score Board and Statistics</h2>
      <table className="rounded-t-lg m-5 w-full mx-auto bg-blue-200 text-blue-800">
        <thead>
          <tr className="text-center border-b-2 border-blue-300">
            {/* <th className="px-3 py-2">User Name</th> */}
            <th className="px-3 py-2">Quiz Name</th>
            <th className="px-3 py-2">Attempts</th>
            <th className="px-3 py-2">High Score</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr
              key={stat.name}
              className="bg-blue-100 border-b border-blue-200"
            >
              {/* <td className="px-3 py-2">{stat.username}</td> */}
              <td className="px-3 py-2">{stat.name}</td>
              <td className="px-3 py-2">{stat.attempt}</td>
              <td className="px-3 py-2">{stat.highScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className={secondaryBtn}
        onClick={() => quizDispatch({ type: CLEAR_STATS, payload:{quizzes} })}
      >
        <i className="fas fa-eraser fa-lg"></i> Clear Stats
      </button>
    </div>
  );
};
