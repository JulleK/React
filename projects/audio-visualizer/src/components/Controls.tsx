type Props = {};

const Controls: React.FC<Props> = ({}) => {
  return (
    <div className="controls">
      <label htmlFor="load-file">Load Some Music</label>
      <input type="file" id="load-file" />
    </div>
  );
};

export default Controls;
