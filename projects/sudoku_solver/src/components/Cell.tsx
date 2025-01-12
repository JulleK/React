type CellProps = {
  value: number | null;
  onCellClick: (cell: HTMLDivElement) => void;
};

const Cell: React.FC<CellProps> = ({ value }) => {
  if (value === 0) {
    value = null;
  }

  return <div className="cell">{value}</div>;
};

export default Cell;
