import React from "react";

type Props = {
  title: string;
  id: string;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ title, id }, ref) => {
    return (
      <div className="w-[40vw]">
        <label htmlFor={id} className="label">
          {title}
        </label>
        <textarea id={id} className="input" ref={ref} />
      </div>
    );
  }
);

export default TextArea;
