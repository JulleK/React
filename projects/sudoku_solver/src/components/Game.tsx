import { useState } from "react";
import Board from "./Board";
import { SudokuBoard } from "../sudokuTypes";
import { solve } from "../backtracking_algorithm.ts";
import "../Game.css";

const sudokuBoard: SudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [0, 4, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 0, 6, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 5, 0],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const Game: React.FC = () => {
  const [currentGame, setCurrentGame] = useState<SudokuBoard>(sudokuBoard);
  const [selectedCell, setSelectedCell] = useState<HTMLDivElement | null>(null);

  setCurrentGame(solve(sudokuBoard)[1] as SudokuBoard);

  const handleCellClick = (cell: HTMLDivElement) => {
    setSelectedCell(cell);
  };

  return <Board currentBoard={currentGame} onCellClick={handleCellClick} />;
};

export default Game;
