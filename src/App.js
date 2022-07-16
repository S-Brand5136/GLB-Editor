import SceneOptions from "./components/SceneOptions";
import Viewer from "./components/Viewer/Viewer";

import "./App.scss";

const App = () => {
  return (
    <main className='App'>
      <SceneOptions></SceneOptions>
      <Viewer></Viewer>
    </main>
  );
};

export default App;
