import { Cell } from "../types";

type Props = {
  playerSymbol: Cell;
  onSquareClick: () => void;
};

const Square: React.FC<Props> = ({ playerSymbol, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} disabled={playerSymbol !== null}>
      {playerSymbol}
    </button>
  );
};

export default Square;
