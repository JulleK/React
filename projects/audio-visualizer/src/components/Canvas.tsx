type Props = {
  id?: string;
};

const Canvas: React.FC<Props> = ({ id = "visualizer" }) => {
  return <canvas id={id}></canvas>;
};

export default Canvas;
