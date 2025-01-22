import { Board } from "../types";
import Square from "./Square";

type Props = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: Board;
};

const GameBoard: React.FC<Props> = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <Square
                  playerSymbol={playerSymbol}
                  onSquareClick={() => onSelectSquare(rowIndex, colIndex)}
                />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
