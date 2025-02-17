import { useRef } from "react";

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
    <div className="user-prompt-container">
      <label htmlFor={id} className="user-prompt-label">
        {children}
      </label>
      <div>
        <input
          ref={input}
          type="text"
          id={id}
          placeholder={placeholder}
          className="user-prompt-input"
        />
        <button onClick={handleClick} className="user-prompt-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Input;
