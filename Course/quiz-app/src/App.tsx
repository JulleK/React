import Header from "./components/Header";
import Quiz from "./components/Quiz";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
};

export default App;
