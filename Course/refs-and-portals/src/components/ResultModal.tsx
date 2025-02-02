import React from "react";

type Props = {
  result: "won" | "lost";
  targetTime: number;
};

const ResultModal = React.forwardRef<HTMLDialogElement, Props>(
  ({ result, targetTime }, ref) => {
    return (
      <dialog className="result-modal" ref={ref}>
        <h2>You {result}</h2>
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>{"x"} seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
