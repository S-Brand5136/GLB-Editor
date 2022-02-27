import { useState } from "react";
import SceneOptions from "./components/SceneOptions";
import Viewer from "./components/Viewer";
import Button from "./components/inputs/Button";

import "./App.scss";

const App = () => {
  return (
    <div className='App'>
      <SceneOptions></SceneOptions>
      <Viewer></Viewer>
    </div>
  );
};

export default App;
