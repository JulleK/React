import Input from "./Input";
import { UserInput } from "../util/types";

type Props = {
  userInput: UserInput;
  handleChange: (value: number, userInputKey: string) => void;
};

const UserInputs: React.FC<Props> = ({ userInput, handleChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          id="initial-investment"
          value={userInput.initialInvestment}
          onChange={handleChange}
        />
        <Input
          label="Annual Investment"
          id="annual-investment"
          value={userInput.annualInvestment}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          id="expected-return"
          value={userInput.expectedReturn}
          onChange={handleChange}
        />
        <Input
          label="Duration (Years)"
          id="duration"
          value={userInput.duration}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserInputs;
