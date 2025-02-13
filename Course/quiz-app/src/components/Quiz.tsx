import { useCallback, useState } from "react";
import { Answer } from "../quizTypes";

import QUESTIONS from "../questions";
import QuizSummary from "./QuizSummary";
import Question from "./Question";

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex >= QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: Answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer("");
  }, [handleSelectAnswer]);

  if (quizIsOver) {
    return <QuizSummary />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
