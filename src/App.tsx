import { QuizData } from "./Components/QuizData";
import { Home } from "./Components/Home";
import {Routes, Route} from "react-router-dom";
import { ScoreBoard } from "./Components/ScoreBoard";
import { SET_STATS } from "./Reducer/typeValues";
import { useEffect } from "react";
import { useQuizContext } from "./Context/QuizProvider";

function App() {

  const {state:{stats},dispatch} = useQuizContext();

  useEffect(() => {
    dispatch({type:SET_STATS});
  }, [])

  return (
    <div className="text-center text-blue-900 bg-blue-50 p-4 h-screen">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<QuizData/>}/>
        <Route path="/score-board" element={<ScoreBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
