import { useState } from "react";
import SceneOptions from "./components/SceneOptions";
import Viewer from "./components/Viewer";
import Button from "./components/Button";

import "./App.scss";

const App = () => {
  const [show, setShow] = useState(true);

  const clickHandler = (view) => {
    if (view === "viewer") {
      return setShow(false);
    }

    setShow(true);
  };

  return (
    <div className='App'>
      <SceneOptions show={show}></SceneOptions>
      <Viewer show={!show}></Viewer>

      <div className='btn-group'>
        <Button
          viewSelect
          selected={!show}
          onClick={() => clickHandler("viewer")}
        >
          <img
            src={process.env.PUBLIC_URL + `/assets/icons8-view-64.png`}
            alt='viewer'
          />
        </Button>
        <Button
          viewSelect
          selected={show}
          onClick={() => clickHandler("graph")}
        >
          <img
            src={process.env.PUBLIC_URL + `/assets/icons8-graph-64.png`}
            alt='graph'
          />
        </Button>
      </div>
    </div>
  );
};

export default App;
