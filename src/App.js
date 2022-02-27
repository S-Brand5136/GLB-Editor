import SceneOptions from "./components/SceneOptions";
import Viewer from "./components/Viewer";
import OptionsProvider from "./providers/OptionsProvider";

import "./App.scss";

const App = () => {
  return (
    <div className='App'>
      <OptionsProvider>
        <SceneOptions></SceneOptions>
      </OptionsProvider>
      <Viewer></Viewer>
    </div>
  );
};

export default App;
