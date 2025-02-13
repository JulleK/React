import quizCompleteImg from "../assets/quiz-complete.png";
import { Answer } from "../quizTypes";
import QUESTIONS from "../questions";

type Props = {
  userAnswers: Answer[];
};

const QuizSummary: React.FC<Props> = ({ userAnswers }) => {
  const correctAnswers = QUESTIONS.map((question) => question.answers[0]);
  const numberOfQuestions = correctAnswers.length;

  let userScore = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) userScore++;
  }

  let statsMessage = "WOW! You did amazing! I'd hire you :)";
  if (userScore * 3 < numberOfQuestions) {
    statsMessage = "man, that's horrible, to be honest.";
  } else if (userScore * 2 < numberOfQuestions) {
    statsMessage = "Not bad, but you still have to learn.";
  } else if (userScore * 1.33 < numberOfQuestions) {
    statsMessage = "Damn, that's a nice looking React Developer over here!";
  }

  return (
    <div id="summary">
      <h2>Quiz Completed!</h2>
      <img src={quizCompleteImg} />

      <div id="summary-stats">
        <p>
          <span className="number">
            {userScore} / {numberOfQuestions}
          </span>
          <span className="text">{statsMessage}</span>
        </p>
      </div>

      <ol className="answer-details">
        {userAnswers.map((answer, index) => {
          let cssClassUserAnswer = "user-answer";

          if (answer === "") {
            cssClassUserAnswer += " skipped";
          } else if (answer === correctAnswers[index]) {
            cssClassUserAnswer += " correct";
          } else {
            cssClassUserAnswer += " wrong";
          }

          return (
            <li key={index}>
              <div className="question">{QUESTIONS[index].text}</div>
              <div className={cssClassUserAnswer}>{answer}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default QuizSummary;
