import SceneOptions from "./components/SceneOptions";
import Viewer from "./components/Viewer/Viewer";
import ControlOptions from "./components/ControlOptions";

import "./App.scss";

const App = () => {
  return (
    <main className='App'>
      <SceneOptions></SceneOptions>
      <Viewer></Viewer>
      <ControlOptions></ControlOptions>
    </main>
  );
};

export default App;
