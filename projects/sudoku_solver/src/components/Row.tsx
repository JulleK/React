import Cell from "./Cell";

type RowProps = {
  values: number[];
  onCellClick: (cell: HTMLDivElement) => void;
};

const Row: React.FC<RowProps> = ({ values, onCellClick }) => {
  return (
    <div className="row">
      {values.map((value, cellIndex) => (
        <Cell key={cellIndex} value={value} onCellClick={onCellClick} />
      ))}
    </div>
  );
};

export default Row;
