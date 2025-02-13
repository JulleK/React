import { Answer } from "../quizTypes";

type Props = {
  availableAnswers: Answer[];
  onAnswerClick: (answer: Answer) => void;
};

const AnswersList: React.FC<Props> = ({ availableAnswers, onAnswerClick }) => {
  return (
    <ul id="answers">
      {availableAnswers.map((answer, idx) => {
        return (
          <li key={idx} className="answer">
            <button onClick={() => onAnswerClick(answer)}>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default AnswersList;
