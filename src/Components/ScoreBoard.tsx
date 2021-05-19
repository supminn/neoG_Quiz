import { useQuizContext } from "../Context/QuizProvider";

export const ScoreBoard = () => {
  const {
    state: { stats },
  } = useQuizContext();

  return (
    <div className="md:px-4 lg:px-12">
      <h2 className="text-xl font-medium mb-2"> Score Board and Statistics</h2>
      <table className="rounded-t-lg m-5 w-full mx-auto bg-blue-200 text-blue-800">
        <thead>
        <tr className="text-center border-b-2 border-blue-300">
          <th className="px-3 py-2">Quiz Name</th>
          <th className="px-3 py-2">Attempts</th>
          <th className="px-3 py-2">High Score</th>
        </tr>
        </thead>
        <tbody>
        {stats.map((stat) => (
          <tr key={stat.name} className="bg-blue-100 border-b border-blue-200">
            <td className="px-3 py-2">{stat.name}</td>
            <td className="px-3 py-2">{stat.attempt}</td>
            <td className="px-3 py-2">{stat.highScore}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
