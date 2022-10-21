import React from "react";
import questions from "../../containers/QuizData/quizData";

const QuizResult = ({ score, correctAnswers, handlePlayAgain }) => {
  return (
    <div className="score-section">
      <h2>Completed!</h2>
      <h3>Total score {score}/30</h3>
      <h4>
        Your correct question {correctAnswers} out of {questions.length}
      </h4>
      <button onClick={handlePlayAgain}>play again</button>
    </div>
  );
};

export default QuizResult;
