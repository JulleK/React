import { useState } from "react";
import { PlayerSymbol } from "../types";

type Props = {
  name: string;
  symbol: PlayerSymbol;
  isActive?: boolean;
  onNameChange: (symbol: PlayerSymbol, name: string) => void;
};

const Player: React.FC<Props> = ({
  name,
  symbol,
  isActive = false,
  onNameChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (isEditing) {
        onNameChange(symbol, playerName);
      }
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            value={playerName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
            required
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
