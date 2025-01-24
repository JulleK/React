import AuthInputs from "./components/AuthInputs.tsx";
import Header from "./components/Header.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
};

export default App;
