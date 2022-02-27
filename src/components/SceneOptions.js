import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { meshContext } from "../providers/MeshProvider";
import MeshLoader from "./MeshLoader";

import "./styles/SceneOptions.scss";
import TreeGraph from "./TreeGraph";

const SceneOptions = (props) => {
  let graphClass = classNames("graph", {});

  const { mesh, graph } = useContext(meshContext);

  return (
    <main className={graphClass}>
      <TreeGraph graph={graph}></TreeGraph>
    </main>
  );
};

export default SceneOptions;
