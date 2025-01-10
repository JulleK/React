import Row from "./Row";

type BoxProps = {
  values: number[];
};

const Box: React.FC<BoxProps> = ({ values }) => {
  console.log(values);
  return (
    <div className="box">
      <Row values={values.slice(0, 3)} />
      <Row values={values.slice(3, 6)} />
      <Row values={values.slice(6, 9)} />
    </div>
  );
};

export default Box;
