import { useNavigate } from "react-router";
import { useQuizContext } from "../Context/QuizProvider";
import { quizes } from "../Data/getQuiz"
import { SET_QUIZ } from "../Reducer/typeValues";
import { primaryBtn, header1 } from "../Styles/Style";


export const Home = () => {
    const navigate = useNavigate();
    const {dispatch} = useQuizContext();

    return(
        <>
        <h1 className={header1}>Jump Rope Quizes</h1>
        <p>Choose one of the following quizes to get started. They are presented according to the level of difficulty. Note that some questions might have a negative marking while the others may not. To make it easier, mulitple attempts are allowed!</p>
        {quizes.map(quiz => (
            <button className={primaryBtn} key={quiz.quizName} onClick={() => {
                dispatch({type:SET_QUIZ, payload:quiz.quizName});
                navigate("/quiz");
            }}>{quiz.quizName}</button>
        ))}
        <button className={primaryBtn} disabled>Disabled</button>
        </>
    )
}