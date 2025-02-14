import { useState } from "react";
import { log } from "../../log";

export default function ConfigureCounter({ onSetClick }) {
  log("<ConfigureCounter />", 1);

  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  const handleSetClick = () => {
    setEnteredNumber(0);
    onSetClick(enteredNumber);
  };

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
