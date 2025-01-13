import { useState } from "react";
import Board from "./Board";
import { SudokuBoard } from "../sudokuTypes";
import { solveSudoku } from "../backtracking_algorithm.ts";
import "../Game.css";

const sudokuBoard: SudokuBoard = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

// console.log(solveSudoku(sudokuBoard));

const Game: React.FC = () => {
  const [currentBoard, setCurrentBoard] = useState<SudokuBoard>(sudokuBoard);
  const [selectedCell, setSelectedCell] = useState<HTMLDivElement | null>(null);
  const [solving, setSolving] = useState(false);

  const handleCellClick = (cell: HTMLDivElement) => {
    setSelectedCell(cell);
  };

  const solve = async () => {
    if (solving) return;

    setSolving(true);

    // Wrapper for introducing delays between steps
    const updateBoardWithDelay = async (board: SudokuBoard) => {
      setCurrentBoard(board);

      // Delay for visualization
      await new Promise((resolve) => setTimeout(resolve, 40));
    };

    const solved = solveSudoku([...currentBoard], updateBoardWithDelay);

    if (!solved) {
      alert("No solution exists!");
    }

    setSolving(false);
  };

  return (
    <div>
      <Board currentBoard={currentBoard} onCellClick={handleCellClick} />
      <button onClick={solve}>Solve</button>
    </div>
  );
};

export default Game;
