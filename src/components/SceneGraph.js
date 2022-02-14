import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { meshContext } from "../providers/MeshProvider";
import MeshLoader from "./MeshLoader";

import "./styles/SceneGraph.scss";

const SceneGraph = (props) => {
  let graphClass = classNames("graph", {
    "graph--hide": !props.show,
    "graph--show": props.show,
  });

  const [show, setShow] = useState(false);
  const { mesh } = useContext(meshContext);

  useEffect(() => {
    if (mesh && mesh.children) {
      setShow(true);
    }

    setShow(false);
  }, [mesh]);

  return (
    <main className={graphClass}>
      {show ? <h1>GLB LOADED</h1> : <MeshLoader></MeshLoader>}
    </main>
  );
};

export default SceneGraph;
