import { Task } from "../types";

type Props = {
  text: Task;
  index?: number;
  onClearTask: (index: number) => void;
  Tag?: JSX.ElementType;
};

const TaskComponent: React.FC<Props> = ({
  text,
  index = 0,
  onClearTask,
  Tag = "li",
}) => {
  return (
    <Tag key={index} className="mb-4 w-full flex">
      <span className="truncate flex-1 min-w-0 pr-4">{text}</span>
      <button
        className="flex-shrink-0 cursor-pointer"
        onClick={() => onClearTask(index)}
      >
        Clear
      </button>
    </Tag>
  );
};

export default TaskComponent;
