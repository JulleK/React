import { GameTurn } from "../types";

type Props = {
  turns: GameTurn[];
};

const Log: React.FC<Props> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
