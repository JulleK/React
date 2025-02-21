import { useState } from "react";
import "./Input.css";

type Props = {
  children?: React.ReactNode;
  id: string;
  buttonText?: string;
  onButtonClick: (inputValue: string) => void;
  placeholder?: string;
  autocompleteData: string[];
};

const Input: React.FC<Props> = ({
  children,
  id,
  onButtonClick,
  placeholder,
  autocompleteData = [],
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredAutocompleteData = autocompleteData.filter((value) =>
    value.toLowerCase().includes(inputValue.trim().toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    onButtonClick(suggestion);
    setInputValue("");
    setShowSuggestions(false);
  };

  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {children}
      </label>
      <div>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className="input"
          value={inputValue}
          onChange={handleInputChange}
        />

        {showSuggestions && inputValue && (
          <div className="input-suggestions-container">
            {filteredAutocompleteData.length > 0 ? (
              filteredAutocompleteData.map((suggestion) => (
                <div
                  key={suggestion}
                  onClick={() => handleSelectSuggestion(suggestion)}
                  className="input-suggestion"
                >
                  {suggestion}
                </div>
              ))
            ) : (
              <div className="input-no-suggestion-found">No authors found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
