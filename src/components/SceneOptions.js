import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { meshContext } from "../providers/MeshProvider";
import MeshLoader from "./MeshLoader";

import "./styles/SceneGraph.scss";
import TreeGraph from "./TreeGraph";

const SceneGraph = (props) => {
  let graphClass = classNames("graph", {
    "graph--hide": !props.show,
    "graph--show": props.show,
  });

  const [show, setShow] = useState(false);
  const { mesh, graph } = useContext(meshContext);

  useEffect(() => {
    if (mesh) {
      return setShow(false);
    }

    setShow(true);
  }, [mesh]);

  return (
    <main className={graphClass}>
      {show ? <MeshLoader></MeshLoader> : <TreeGraph graph={graph}></TreeGraph>}
    </main>
  );
};

export default SceneGraph;
