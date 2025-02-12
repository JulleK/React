import { useState } from "react";
import { Answer } from "../quizTypes";
import quizCompleteImg from "../assets/quiz-complete.png";

import QUESTIONS from "../questions";

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const activeQuestionIndex = userAnswers.length;
  const activeQuestion = QUESTIONS[activeQuestionIndex];
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer: Answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  if (quizIsOver) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
        <img src={quizCompleteImg} />
      </div>
    );
  }

  const shuffledAnswers = [...activeQuestion.answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <h2>{activeQuestion.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, idx) => {
            return (
              <li key={idx} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
