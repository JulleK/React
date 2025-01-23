import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Result from "./components/Result";
import { useState } from "react";

const App: React.FC = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  const handleChange = (value: number, userInputKey: string) => {
    // const regex = /^[0-9\b]+$/;
    // let regex = /^\d{0,12}$/;
    if (userInputKey === "duration" && value > 100) return;
    // if (userInputKey === "duration" && value < 0) return;
    if (userInputKey === "expectedReturn" && value > 100) return;
    if (value > 1_000_000_000) return;

    setUserInput((prevInput) => {
      return { ...prevInput, [userInputKey]: value };
    });
  };

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} handleChange={handleChange} />
      {!isValidInput && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isValidInput && <Result userInput={userInput} />}
    </>
  );
};

export default App;
