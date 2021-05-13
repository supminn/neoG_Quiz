import { quizes } from "../Data/getQuiz"

export const ScoreBoard = () => {
    return(
        <>
        <h2> Score Board</h2>
        <ul>
            {quizes.map(quiz => (
                <li key={quiz.quizName}>{quiz.quizName} - <b>{quiz.highScore}</b></li>
            ))}
        </ul>
        </>
    )
}