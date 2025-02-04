import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="text-xl">
      <Sidebar projects={["Tailwind", "React", "Typescript"]} />
    </div>
  );
};

export default App;
