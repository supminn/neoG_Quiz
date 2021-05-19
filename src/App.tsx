import { QuizData } from "./Components/QuizData";
import { Home } from "./Components/Home";
import {Routes, Route} from "react-router-dom";
import { ScoreBoard } from "./Components/ScoreBoard";
import { SET_STATS } from "./Reducer/typeValues";
import { useEffect } from "react";
import { useQuizContext } from "./Context/QuizProvider";
import { Rules } from "./Components/Rules";
import { Navigation } from "./Components/Navigation";
import { Profile } from "./Components/Profile";

function App() {

  const {dispatch} = useQuizContext();

  useEffect(() => {
    dispatch({type:SET_STATS});
  }, [])

  return (
    <div className="text-center text-blue-900 bg-blue-50 h-full min-h-screen">
      <Navigation/>
      <div className="px-2">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<QuizData/>}/>
        <Route path="/score-board" element={<ScoreBoard/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
