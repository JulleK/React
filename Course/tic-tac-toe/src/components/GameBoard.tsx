import { useState } from "react";
import { PlayerSymbol, Board } from "../types";

const initialBoard: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type Props = {
  onSelectSquare: () => void;
  activePlayer: PlayerSymbol;
};

const GameBoard: React.FC<Props> = ({ onSelectSquare, activePlayer }) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
