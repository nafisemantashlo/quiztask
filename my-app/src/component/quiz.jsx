import React, { useContext, useEffect } from "react";
import { QuizContext } from "../Context/quizContext";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  const { currentQuestion, questions, loading } = state;
  const question = questions[currentQuestion];
  useEffect(() => {
    if (!loading && currentQuestion >= questions.length) {
      navigate("/result");
    }
  }, [currentQuestion, questions.length, navigate, loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#a7c592]">
        <h2 className="text-2xl font-bold text-white">Loading Questions...</h2>
      </div>
    );
  }
  if (currentQuestion >= questions.length) {
    return null;
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#a7c592] p-4">
      <div className="bg-[#d9e6d0] px-8 sm:px-16 md:px-20 py-8 sm:py-12 rounded-2xl text-gray-900 max-w-md w-full shadow-[0_0_50px_#14532d]">
        <h1 className="text-3xl font-bold mb-6">
          Question {currentQuestion + 1}/{questions.length}
        </h1>
        <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
        <div>
          {question.options.map((opt, index) => (
            <button
              key={index}
              className="block w-full bg-[#accf95] rounded-lg py-2 my-2 hover:bg-[#42642b] transition hover:scale-110"
              onClick={() =>
                dispatch({ type: "ANSWER-QUESTION", payload: index })}>{opt}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
