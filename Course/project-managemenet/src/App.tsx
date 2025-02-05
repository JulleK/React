import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Project } from "./types";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectPage from "./components/ProjectPage";

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
    setProjects((prevProjects) => {
      if (!prevProjects.find((project) => project.title === newProject.title))
        return [...prevProjects, newProject];
      else {
        const filteredProjects = prevProjects.filter(
          (project) => project.title !== newProject.title
        );
        return [...filteredProjects, newProject];
      }
    });

    setSelectedProject(newProject.title);
  };

  const handleSelectProject = (title: string) => {
    setSelectedProject(title);
  };

  return (
    <>
      <Sidebar
        projects={projects.map((proj) => proj.title)}
        onAddProject={handleAddNewProject}
        onSelectProject={handleSelectProject}
      />
      <div className="flex flex-col items-center w-full text-stone-700">
        {projects.map((project) => (
          <ProjectPage
            project={project}
            active={project.title === selectedProject}
          />
        ))}

        {!selectedProject && (
          <NoProjectSelected onButtonClick={handleAddNewProject} />
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
