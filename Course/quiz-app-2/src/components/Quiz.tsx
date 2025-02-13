import { useCallback, useState } from "react";
import QUESTIONS from "../questions.ts";
import { Answer } from "../quizTypes.ts";
import QuizSummary from "./QuizSummary.tsx";
import AnswersList from "./AnswersList.tsx";
import QuestionTimer from "./QuestionTimer.tsx";

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const currentQuestionIndex = userAnswers.length;

  const handleAnswerClick = (answer: Answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  const handleSkipQuestion = useCallback(() => {
    setUserAnswers((prevAnswers) => [...prevAnswers, null]);
  }, []);

  if (currentQuestionIndex === QUESTIONS.length) {
    return <QuizSummary />;
  }

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const availableAnswers = [...currentQuestion.answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          onTimerFinish={handleSkipQuestion}
          key={currentQuestionIndex}
        />
        <h2>{currentQuestion.text}</h2>
      </div>
      <AnswersList
        availableAnswers={availableAnswers}
        onAnswerClick={handleAnswerClick}
      />
    </div>
  );
};

export default Quiz;
