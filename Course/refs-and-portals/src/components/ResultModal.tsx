import React from "react";

type Props = {
  remainingTime: number;
  targetTime: number;
  onReset: () => void;
};

const ResultModal = React.forwardRef<HTMLDialogElement, Props>(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const isWin = remainingTime > 0;
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return (
      <dialog className="result-modal" ref={ref} onClose={onReset}>
        {!isWin && <h2>You Lost</h2>}
        {isWin && <h2>Your Score: {score}</h2>}
        <p>
          The target time was{" "}
          <strong>
            {targetTime} second{targetTime > 1 && "s"}.
          </strong>
        </p>
        {isWin && (
          <p>
            You stopped the timer with
            <strong> {formattedRemainingTime} seconds left.</strong>
          </p>
        )}

        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
