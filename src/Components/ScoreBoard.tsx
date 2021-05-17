import { useQuizContext } from "../Context/QuizProvider"

export const ScoreBoard = () => {
    const {state:{stats}} = useQuizContext();

    return(
        <>
        <h2 className="text-xl font-medium mb-2"> Score Board</h2>
        <ul className="text-left list-inside list-disc">
            {stats.map(stat => (
                <li key={stat.name}>{stat.name} - <b>{stat.highScore}</b></li>
            ))}
        </ul>
        </>
    )
}