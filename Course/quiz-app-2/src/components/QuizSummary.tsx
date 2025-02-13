import quizCompleteImg from "../assets/quiz-complete.png";

type Props = {};

const QuizSummary: React.FC<Props> = ({}) => {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="" />
      <h2>Quiz Completed!</h2>
    </div>
  );
};

export default QuizSummary;
