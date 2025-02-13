import { useState } from "react";
import UserAnswers from "./UserAnswers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions";

import { Answer, AnswerState } from "../quizTypes";

type Props = {
  index: number;
  onSelectAnswer: (answer: Answer) => void;
  onSkipAnswer: () => void;
};

type AnswerStateObject = {
  selectedAnswer: Answer;
  isCorrect: boolean | null;
};

const Question: React.FC<Props> = ({ index, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState<AnswerStateObject>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 15000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer: Answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState: AnswerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        onTimerExpired={answer.selectedAnswer === "" ? onSkipAnswer : () => {}}
        time={timer}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <UserAnswers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
