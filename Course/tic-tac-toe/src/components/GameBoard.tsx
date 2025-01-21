import { Board, GameTurn } from "../types";

type Props = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: GameTurn[];
};

const initialBoard: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard: React.FC<Props> = ({ onSelectSquare, turns }) => {
  const gameBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
