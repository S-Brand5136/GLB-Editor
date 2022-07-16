import { createContext, useState } from "react";

export default function MeshProvider(props) {
  const [mesh, setMesh] = useState(null);

  const addMesh = (mesh) => {
    setMesh(mesh);
    console.log(mesh);
  };

  const meshData = {
    mesh,
    addMesh,
  };

  return (
    <meshContext.Provider value={meshData}>
      {props.children}
    </meshContext.Provider>
  );
}

export const meshContext = createContext();
