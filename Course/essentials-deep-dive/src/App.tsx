import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts.tsx";
import Examples from "./components/Examples.tsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
