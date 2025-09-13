import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../Context/quizContext";

function Home() {
  const { state } = useQuiz();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#a7c592] p-4">
      <div className="bg-[#d9e6d0] px-8 sm:px-16 md:px-20 py-8 sm:py-12 rounded-2xl text-center text-gray-900 max-w-md w-full shadow-[0_0_50px_#14532d]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
          Welcome
        </h1>
        <button
          onClick={handleStart}
          disabled={state.loading}
          className="bg-[#7fb45c] text-white font-bold text-xl sm:text-lg md:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
          shadow-[#2d6607] shadow-lg transition-all duration-300 hover:bg-[#2d6607] inline-block hover:scale-110 disabled:opacity-50"
        >
          {state.loading ? "Loading..." : "Start Quiz"}
        </button>
      </div>
    </div>
  );
}

export default Home;
