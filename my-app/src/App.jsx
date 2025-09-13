import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./component/quiz";
import { QuizProvider } from "./Context/quizContext";
import Result from "./component/result";

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;