import { useRef, useState } from "react";
import { Project, Task } from "../types";

type Props = {
  project: Project;
  active?: boolean;
  onDeleteProject: (title: string) => void;
};

const ProjectPage: React.FC<Props> = ({
  project,
  active = false,
  onDeleteProject,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.current?.value) {
      setTasks((prevTasks) => [input.current!.value, ...prevTasks]);
    }
  };

  const clearTask = (targetIndex: number) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((_task, index) => index !== targetIndex);
    });
  };

  return (
    <div className={`w-[50%]${!active ? " hidden" : ""}`}>
      <button
        className="float-right text-stone-600 button"
        onClick={() => onDeleteProject(project.title)}
      >
        Clear
      </button>
      <h2 className="text-4xl font-bold">{project.title}</h2>
      <p className="text-stone-400 mt-3">{project.date}</p>
      <p className="mt-5">{project.description}</p>

      <hr className="mt-8 text-transparent h-0.5 bg-stone-300" />

      <h3 className="text-3xl font-bold mt-8">Tasks</h3>
      <form onSubmit={handleAddTask}>
        <input type="text" className="task-input mt-5" ref={input} />
        <button className="button">Add Task</button>
      </form>

      {tasks.length === 0 && (
        <p className="text-stone-900 mt-8">
          This project does not have any tasks yet.
        </p>
      )}

      {tasks.length !== 0 && (
        <ul className="bg-stone-50 mt-8 rounded p-6 pb-4 text-stone-800">
          {tasks.map((task, index) => (
            <li key={index} className="mb-4 w-full flex">
              <span className="truncate flex-1 min-w-0 pr-4">{task}</span>
              <button
                className="flex-shrink-0 cursor-pointer"
                onClick={() => clearTask(index)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectPage;
