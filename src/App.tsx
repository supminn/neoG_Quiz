import {
  Home,
  QuizPage,
  ScoreBoard,
  Rules,
  Navigation,
  Profile,
  Footer,
} from "./Components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-center text-blue-900 bg-blue-50 h-full min-h-screen">
      <Navigation />
      <div className="px-2 min-h-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/score-board" element={<ScoreBoard />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
