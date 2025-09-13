 import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import api from "../services/api";

const initial = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-QUESTION":
      return {
        ...state,
        questions: action.payload,
        loading: false,
        currentQuestion: 0,
        score: 0,
      }
    case "ANSWER-QUESTION": {
      const question = state.questions[state.currentQuestion];
      const iscurrent = action.payload === question.currentAnswer;
      return {
        ...state,
        score: iscurrent ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
      }
    }
    case "RESTART-QUIZ":
      return {
        ...initial,
        loading: false,
        questions: state.questions,

      }
  }
}
export const QuizContext = createContext();
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    api.get("/questio")
      .then(res => {
        const n = res.data.map((item) => ({
          question: item.question,
          options: item.answers,
          currentAnswer: item.currentAnswer,
          id: item.id,
        }))
        dispatch({ type: "SET-QUESTION", payload: n })
      });
  }, [])
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
export function useQuiz() {
  return useContext(QuizContext);
} 