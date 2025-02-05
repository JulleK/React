import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Project } from "./types";
import NewProject from "./components/NewProject";

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [projects, setProjects] = useState<Project[]>([
    { title: "Learning React", description: "learn react", date: "today" },
    {
      title: "Learning Tailwind",
      description: "practice tailwind",
      date: "today",
    },
  ]);

  const handleAddNewProject = () => {
    setSelectedProject("new");
  };

  const handleCancelNewProject = () => {
    setSelectedProject("");
  };

  const handleSaveNewProject = (newProject: Project) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <>
      <Sidebar
        projects={projects.map((proj) => proj.title)}
        onAddProject={handleAddNewProject}
      />
      <div className="flex flex-col items-center w-full">
        {!selectedProject && (
          <div className="text-stone-600 text-center">
            <h3 className="text-3xl mb-6 font-bold">No Project Selected</h3>
            <p className="mb-10 text-stone-500">
              Select a project to get started
            </p>
            <button
              className="button add-project-button"
              onClick={handleAddNewProject}
            >
              Create new project
            </button>
          </div>
        )}
        {selectedProject === "new" && (
          <NewProject
            onSave={handleSaveNewProject}
            onCancel={handleCancelNewProject}
          />
        )}
      </div>
    </>
  );
};

export default App;
