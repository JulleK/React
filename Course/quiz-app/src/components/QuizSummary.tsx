import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

import {
  Answer,
  SummaryAnswer,
  SummaryUserAnswers,
  SummaryStats,
  SummaryStatus,
} from "../quizTypes";

type Props = {
  userAnswers: Answer[];
};

const QuizSummary: React.FC<Props> = ({ userAnswers }) => {
  const correctAnswers = QUESTIONS.map((question) => question.answers[0]);
  const summaryUserAnswers: SummaryUserAnswers = userAnswers.map(
    (answer, index) => {
      let status = "";
      if (answer === "") status = "skipped";
      else if (answer === correctAnswers[index]) status = "correct";
      else status = "wrong";

      return { text: answer, status } as SummaryAnswer;
    }
  );

  const summaryStats: SummaryStats = {
    skipped: 0,
    correct: 0,
    wrong: 0,
  };

  for (const answer of summaryUserAnswers) {
    summaryStats[answer.status]++;
  }

  const getStatusValue = (status: string) => {
    const statusAsKey = status as SummaryStatus;
    return summaryStats[statusAsKey];
  };

  return (
    <div id="summary">
      <h2>Quiz Completed!</h2>
      <img src={quizCompleteImg} />

      <div id="summary-stats">
        {Object.keys(summaryStats).map((status) => (
          <p key={status}>
            <span className="number">
              {Math.round((getStatusValue(status) / QUESTIONS.length) * 100)}%
            </span>
            <span className="text">{status}</span>
          </p>
        ))}
      </div>

      <ol className="answer-details">
        {summaryUserAnswers.map((answer, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={`user-answer ${answer.status}`}>
                {answer.text ?? "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default QuizSummary;
