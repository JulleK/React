import { useState } from "react";
import { Answer, Question } from "../quizTypes";

import QUESTIONS from "../questions";

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const activeQuestionIndex = userAnswers.length;
  const activeQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = (selectedAnswer: Answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{activeQuestion.text}</h2>
        <ul id="answers">
          {activeQuestion.answers.map((answer, idx) => {
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
