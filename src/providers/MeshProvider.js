import { createContext, useState } from "react";

export default function MeshProvider(props) {
  const [mesh, setMesh] = useState(null);
  const [graph, setGraph] = useState(null);

  const addMesh = (mesh) => {
    setMesh(mesh);
  };

  const addGraph = (treeGraph) => {
    setGraph(treeGraph);
  };

  const meshData = {
    mesh,
    addMesh,
    addGraph,
    graph,
  };

  return (
    <meshContext.Provider value={meshData}>
      {props.children}
    </meshContext.Provider>
  );
}

export const meshContext = createContext();
