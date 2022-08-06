import { createContext, useState } from "react";
import { useBackground } from "../hooks/use-background.hook";

export default function ThreeProvider(props) {
  const [mesh, setMesh] = useState(null);
  const [showGrid, setShowGrid] = useState(false);
  const [selectedMesh, setSelectedMesh] = useState();
  const [controlType, setControlType] = useState("translate");
  const { tools } = useBackground();

  const addMesh = (mesh) => {
    setMesh(mesh);
  };

  const threeData = {
    mesh,
    addMesh,
    showGrid,
    setShowGrid,
    selectedMesh,
    setSelectedMesh,
    controlType,
    setControlType,
    ...tools,
  };

  return (
    <threeContext.Provider value={threeData}>
      {props.children}
    </threeContext.Provider>
  );
}

export const threeContext = createContext();
