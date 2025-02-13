import { useRef } from "react";
import { Answer, AnswerState } from "../quizTypes";

type Props = {
  answers: Answer[];
  onSelectAnswer: (answer: Answer) => void;
  answerState: AnswerState;
  selectedAnswer?: string | null;
};

const UserAnswers: React.FC<Props> = ({
  answers,
  onSelectAnswer,
  answerState,
  selectedAnswer = null,
}) => {
  const shuffledAnswers = useRef<Answer[]>(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, idx) => {
        const isSelected = selectedAnswer === answer;
        let cssButtonClasses = "";

        if (isSelected && answerState === "answered") {
          cssButtonClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssButtonClasses = answerState;
        }

        return (
          <li key={idx} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssButtonClasses}
              disabled={!!selectedAnswer}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserAnswers;
