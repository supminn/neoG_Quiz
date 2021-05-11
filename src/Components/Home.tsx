import { useNavigate } from "react-router";
import { quizes } from "../data/getQuiz"

export const Home = ({setQuizName}: {setQuizName: React.Dispatch<React.SetStateAction<string>>}) => {
    const navigate = useNavigate();
    return(
        <>
        <h1>Jump Rope Quizes</h1>
        <p>Choose one of the following quizes to get started. Note that some questions might have a negative marking while the others may not. To make it easier, mulitple attempts are allowed!</p>
        {quizes.map(quiz => (
            <button key={quiz.quizName} onClick={() => {
                setQuizName(quiz.quizName);
                navigate("/quiz");
            }}>{quiz.quizName}</button>
        ))}
        </>
    )
}