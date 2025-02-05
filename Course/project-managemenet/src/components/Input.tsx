import React from "react";

type Props = {
  title: string;
  id: string;
  type?: "text" | "number" | "date" | "textarea";
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ title, id, type = "text" }, ref) => {
    return (
      <div className="w-[40vw]">
        <label htmlFor={id} className="label">
          {title}
        </label>

        <input type={type} id={id} className="input" ref={ref} />
      </div>
    );
  }
);

export default Input;
