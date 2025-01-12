import Row from "./Row";
import { SudokuBoard } from "../sudokuTypes";

type BoardProps = {
  currentBoard: SudokuBoard;
  onCellClick: (cell: HTMLDivElement) => void;
};

const Board: React.FC<BoardProps> = ({ currentBoard, onCellClick }) => {
  return (
    <div className="board">
      {currentBoard.map((row, rowIndex) => (
        <Row key={rowIndex} values={row} onCellClick={onCellClick} />
      ))}
    </div>
  );
};

export default Board;
