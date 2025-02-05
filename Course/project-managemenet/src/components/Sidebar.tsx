type Props = {
  projects: string[];
  onAddProject: () => void;
  onSelectProject: (title: string) => void;
};

const Sidebar: React.FC<Props> = ({
  projects,
  onAddProject,
  onSelectProject,
}) => {
  const unselectProject = () => {
    onSelectProject("");
  };

  return (
    <div
      className="bg-black text-white h-[calc(100vh-5rem)] w-88 rounded-tr-2xl mt-20
    px-10 pt-18"
    >
      <h2
        className="font-bold mb-8 text-2xl cursor-pointer"
        onClick={unselectProject}
      >
        YOUR PROJECTS
      </h2>
      <button className="button add-project-button" onClick={onAddProject}>
        + Add Project
      </button>
      <ul className="mt-10 ml-2">
        {projects.map((project, idx) => (
          <li
            className="mb-4 text-lg text-stone-400 hover:cursor-pointer w-fit"
            key={idx}
            onClick={() => onSelectProject(project)}
          >
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
