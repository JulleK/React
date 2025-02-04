type Props = {
  projects: string[];
};

const Sidebar: React.FC<Props> = ({ projects }) => {
  return (
    <div
      className="bg-black text-white h-screen w-88 rounded-tr-2xl mt-20
    px-10 pt-18"
    >
      <h2 className="font-bold mb-8 text-2xl">YOUR PROJECTS</h2>
      <ul className="mb-10">
        {projects.map((project, idx) => (
          <li key={idx}>{project}</li>
        ))}
      </ul>
      <button className="bg-stone-700 text-stone-400 rounded px-4 pb-3 pt-2">
        + Add Project
      </button>
    </div>
  );
};

export default Sidebar;
