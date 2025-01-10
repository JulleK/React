import { useState, useRef } from "react";
import Board from "./Board";
import { SudokuBoardLayout } from "./sudokuTypes";
import "./Game.css";

const sudokuBoard: SudokuBoardLayout = [
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
  const [currentGame, _setCurrentGame] =
    useState<SudokuBoardLayout>(sudokuBoard);

  // TODO: store selected cell and highlight it
  // const selectedCell = useRef(null);

  return <Board currentBoard={currentGame} />;
};

export default Game;
