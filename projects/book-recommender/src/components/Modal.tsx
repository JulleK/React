import { createPortal } from "react-dom";
import "./Modal.css";
import React from "react";

type Props = {
  message: string;
  ref: React.RefObject<HTMLDialogElement | null>;
};

const Modal: React.FC<Props> = ({ message = "something went wrong", ref }) => {
  return createPortal(
    <dialog className="result-modal" ref={ref}>
      <h2>{message}</h2>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,

    document.querySelector("#modal")!
  );
};

export default Modal;
