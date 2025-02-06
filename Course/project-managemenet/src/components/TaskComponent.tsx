import { Task } from "../types";

type Props = {
  text: Task;
  index?: number;
  onClearTask: (index: number) => void;
};

const TaskComponent: React.FC<Props> = ({ text, index = 0, onClearTask }) => {
  return (
    <li key={index} className="mb-4 w-full flex">
      <span className="truncate flex-1 min-w-0 pr-4">{text}</span>
      <button
        className="flex-shrink-0 cursor-pointer"
        onClick={() => onClearTask(index)}
      >
        Clear
      </button>
    </li>
  );
};

export default TaskComponent;
