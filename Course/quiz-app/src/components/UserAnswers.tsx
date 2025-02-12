import { Answer } from "../quizTypes";

type Props = {
  answers: Answer[];
  onSelectAnswer: (answer: Answer) => void;
};

const UserAnswers: React.FC<Props> = ({ answers, onSelectAnswer }) => {
  return (
    <ul id="answers">
      {answers.map((answer, idx) => {
        return (
          <li key={idx} className="answer">
            <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserAnswers;
