import React, { useState } from "react";
import "../../assets/css/quiz.css";
import questions from "../../containers/QuizData/quizData";
import QuizResult from "../QuizResult/quizResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleNextOption = () => {
    setClicked(false);
    const nextQuesion = currentQuestion + 1;
    if (nextQuesion < questions.length) {
      setCurrentQuestion(nextQuesion);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAnswers(correctAnswers + 1);
    }
    setClicked(true);
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswers(0);
    setShowResult(false);
  };
  return ( 
    <div className="body-wrapper" >
    <h1>Let's explore what you got in here!!</h1>
    <div className="card-wrapper">
      {showResult ? (
        <QuizResult
          score={score}
          correctAnswers={correctAnswers}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <>
          <div className="question-section">
            <h3>Score: {score}</h3>
            <div className="question-count">
              <span className="">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((ans, i) => {
              return (
                <button
                  key={i}
                  className={`button ${
                    clicked & ans.isCorrect ? "correct" : "button"
                  } ${clicked & !ans.isCorrect ? "wrong" : "button"} `}
                  disabled={clicked}
                  onClick={() => handleAnswerOption(ans.isCorrect)}
                >
                  {ans.answerText}
                </button>
              );
            })}
            <div className="actions">
              <button onClick={handlePlayAgain}>Quit</button>
              <button className={`button ${clicked ? "button": "disabled-button" }`} disabled={!clicked}  onClick={handleNextOption}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Quiz;
