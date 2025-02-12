import { useEffect, useState } from "react";

type Props = {
  time?: number;
  onTimerExpired: () => void;
};

const QuestionTimer: React.FC<Props> = ({ time = 5000, onTimerExpired }) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timeout = setTimeout(onTimerExpired, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time, onTimerExpired]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      console.log("interval");
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={time} />;
};

export default QuestionTimer;
