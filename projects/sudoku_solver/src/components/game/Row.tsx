import Cell from "./Cell";

type RowProps = {
  values: number[];
};

const Row: React.FC<RowProps> = ({ values }) => {
  return (
    <div className="row">
      <Cell value={values[0]} />
      <Cell value={values[1]} />
      <Cell value={values[2]} />
    </div>
  );
};

export default Row;
