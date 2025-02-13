import quizCompleteImg from "../assets/quiz-complete.png";

const QuizSummary: React.FC = () => {
  return (
    <div id="summary">
      <h2>Quiz Completed!</h2>
      <img src={quizCompleteImg} />
    </div>
  );
};

export default QuizSummary;
