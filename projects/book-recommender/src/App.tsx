import UserPrompts from "./components/UserPrompts";

const App: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10">Book Recommender</h1>
      <UserPrompts />
    </>
  );
};

export default App;
