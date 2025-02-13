import { useCallback, useState } from "react";
import { Answer } from "../quizTypes";

import QUESTIONS from "../questions";
import UserAnswers from "./UserAnswers";
import QuestionTimer from "./QuestionTimer";
import QuizSummary from "./QuizSummary";

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const activeQuestionIndex = userAnswers.length;
  const activeQuestion = QUESTIONS[activeQuestionIndex];
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: Answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer("");
  }, [handleSelectAnswer]);

  if (quizIsOver) {
    return <QuizSummary />;
  }

  const shuffledAnswers = [...activeQuestion.answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          onTimerExpired={handleSkipAnswer}
          key={activeQuestionIndex}
        />
        <h2>{activeQuestion.text}</h2>
        <UserAnswers
          answers={shuffledAnswers}
          onSelectAnswer={handleSelectAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
