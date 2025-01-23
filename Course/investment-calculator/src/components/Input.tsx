type Props = {
  label: string;
  id: string;
  value: string | number;
  onChange: (value: number, userInputKey: string) => void;
};

// this turns a string like "initial-investment"
//  into "initialInvestment"
function kebabToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

const Input: React.FC<Props> = ({ label, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={(event) =>
          onChange(+event.target.value, kebabToCamelCase(id))
        }
        required
      />
    </div>
  );
};

export default Input;
