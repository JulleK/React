import UserPrompt from "./components/UserPrompt";

const App: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10">Book Recommender</h1>
      <UserPrompt />
    </>
  );
};

export default App;
