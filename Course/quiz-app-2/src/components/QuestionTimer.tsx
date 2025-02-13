import { useEffect, useState } from "react";

type Props = {
  initialTime?: number;
  onTimerFinish: () => void;
};

const QuestionTimer: React.FC<Props> = ({
  initialTime = 10000,
  onTimerFinish,
}) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    console.log("START INTERVAL AND TIMEOUT");
    const interval = setInterval(() => {
      console.log("interval");
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    const timeout = setTimeout(() => {
      console.log("FINISH TIMEOUT");
      onTimerFinish();
      clearInterval(interval);
    }, initialTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [initialTime, onTimerFinish]);

  return <progress value={remainingTime} max={initialTime} />;
};

export default QuestionTimer;
