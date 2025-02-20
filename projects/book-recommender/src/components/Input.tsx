import { useRef } from "react";
import "./Input.css";

type Props = {
  children?: React.ReactNode;
  id: string;
  buttonText?: string;
  onButtonClick: (inputValue: string) => void;
  placeholder?: string;
};

const Input: React.FC<Props> = ({
  children,
  id,
  buttonText = "add",
  onButtonClick,
  placeholder,
}) => {
  const input = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (input.current) onButtonClick(input.current.value);
  };

  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {children}
      </label>
      <div>
        <input
          ref={input}
          type="text"
          id={id}
          placeholder={placeholder}
          className="input"
        />
        <button onClick={handleClick} className="input-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Input;
