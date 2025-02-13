import { useEffect, useState } from "react";

type Props = {
  time?: number;
  onTimerExpired: () => void;
  mode?: string;
};

const QuestionTimer: React.FC<Props> = ({
  time = 10000,
  onTimerExpired,
  mode = "",
}) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const timeout = setTimeout(onTimerExpired, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time, onTimerExpired]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={time}
      className={mode}
    />
  );
};

export default QuestionTimer;
