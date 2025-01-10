import Box from "./Box";
import { SudokuBoardLayout } from "./sudokuTypes";

type BoardProps = {
  currentBoard: SudokuBoardLayout;
};

const Board: React.FC<BoardProps> = ({ currentBoard }) => {
  return (
    <div className="board">
      <Box values={currentBoard[0]} />
      <Box values={currentBoard[1]} />
      <Box values={currentBoard[2]} />
      <Box values={currentBoard[3]} />
      <Box values={currentBoard[4]} />
      <Box values={currentBoard[5]} />
      <Box values={currentBoard[6]} />
      <Box values={currentBoard[7]} />
      <Box values={currentBoard[8]} />
    </div>
  );
};

export default Board;
