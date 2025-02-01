import { useState, useRef } from "react";

export default function Player() {
  const input = useRef<HTMLInputElement>(null);

  const [playerName, setPlayerName] = useState("");

  const handleClick = () => {
    if (input.current) {
      setPlayerName(input.current.value);
    }
  };

  return (
    <section id="player">
      <h2>Welcome {playerName || "unknown entity"}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
