import _ from "lodash";

type CellProps = {
  value: number | null;
};

const Cell: React.FC<CellProps> = ({ value }) => {
  if (value === 0) {
    value = null;
  }
  return <div className="cell">{value}</div>;
};

export default Cell;
