import { useState } from "react";

type Props = {
  name: string;
  symbol: string;
};

const Player: React.FC<Props> = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // todo: save player name
    // setPlayerName();
  };

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" autoFocus required />}

        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing && <button onClick={handleEditClick}>Edit</button>}
      {isEditing && <button onClick={handleSaveClick}>Save</button>}
    </li>
  );
};

export default Player;
