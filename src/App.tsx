import {
  Home,
  QuizPage,
  ScoreBoard,
  Rules,
  Navigation,
  UserProfile,
  Footer,
  Login,
  Signup,
} from "./Components";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./Components";

function App() {
  return (
    <div className="text-center text-blue-900 bg-blue-50 h-full min-h-screen">
      <Navigation />
      <div className="px-2 min-h-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules/:quizId" element={<Rules />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <PrivateRoute path="/score-board" element={<ScoreBoard />} />
          <PrivateRoute path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
