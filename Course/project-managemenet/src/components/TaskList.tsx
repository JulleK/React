import { Task } from "../types";
import TaskComponent from "./TaskComponent";

type Props = {
  tasks: Task[];
  onClearTask: (index: number) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onClearTask }) => {
  return (
    <ul className="bg-stone-50 mt-8 rounded p-6 pb-4 text-stone-800">
      {tasks.map((task, index) => (
        <TaskComponent text={task} index={index} onClearTask={onClearTask} />
      ))}
    </ul>
  );
};

export default TaskList;
