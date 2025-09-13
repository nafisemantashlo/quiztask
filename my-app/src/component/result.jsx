 import React, { useContext } from "react";
import { QuizContext } from "../Context/quizContext";
import { useNavigate } from "react-router-dom";
function Result() {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  const { score, questions } = state;
  const handleRestart = () => {
    dispatch({ type: "RESTART-QUIZ" });
    navigate("/quiz");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#a7c592] p-4">
      <div className="bg-[#d9e6d0] px-8 sm:px-16 md:px-20 py-8 sm:py-12 rounded-2xl text-center text-gray-900 max-w-md w-full shadow-[0_0_50px_#14532d]">
        <h1 className="text-3xl font-bold mb-6">Quiz Result </h1>
        <p className="text-xl mb-4">Total Questions: {questions.length}</p>
        <p className="text-xl mb-4">Correct Answers: {score}</p>
        <div className="space-x-2">
          <button
            onClick={handleRestart}
            className="bg-[#7fb45c] text-white font-bold px-6 py-2 rounded-lg shadow-[#2d6607] shadow-lg transition-all duration-300 hover:bg-[#2d6607] inline-block hover:scale-110"> Restart Quiz </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
