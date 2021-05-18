import { Link } from "react-router-dom";
import { useQuizContext } from "../Context/QuizProvider";
import { primaryBtn } from "../Styles/Style";

export const ScoreBoard = () => {
  const {
    state: { stats },
  } = useQuizContext();

  return (
    <>
      <h2 className="text-xl font-medium mb-2"> Score Board and Statistics</h2>
      <table className="rounded-t-lg m-5 w-full mx-auto bg-blue-200 text-blue-800">
        <tr className="text-center border-b-2 border-blue-300">
          <th className="px-3 py-2">Quiz Name</th>
          <th className="px-3 py-2">Attempts</th>
          <th className="px-3 py-2">High Score</th>
        </tr>
        {stats.map((stat) => (
          <tr key={stat.name} className="bg-blue-100 border-b border-blue-200">
            <td className="px-3 py-2">{stat.name}</td>
            <td className="px-3 py-2">{stat.attempt}</td>
            <td className="px-3 py-2">{stat.highScore}</td>
          </tr>
        ))}
      </table>
      {/* 
        <ul className="text-left list-inside list-disc">
            {stats.map(stat => (
                <li key={stat.name}>{stat.name} - <b>{stat.highScore}</b></li>
            ))}
        </ul> */}
      <Link to="/">
        <button className={primaryBtn}>Home</button>
      </Link>
    </>
  );
};
