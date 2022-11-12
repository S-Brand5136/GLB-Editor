import { useRef } from "react";
import { createContext, useState } from "react";
import { useBackground } from "../hooks/use-background.hook";

export default function ThreeProvider(props) {
  const mesh = useRef(null);
  const [showGrid, setShowGrid] = useState(false);
  const [selectedMesh, setSelectedMesh] = useState();
  const [renderScene, setRenderScene] = useState(false);
  const [controlType, setControlType] = useState("translate");
  const { backgroundTools } = useBackground();

  const addMesh = (loadedGlb) => {
    mesh.current = loadedGlb;
    setRenderScene(true);
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
    renderScene,
    setRenderScene,
    ...backgroundTools,
  };

  return (
    <threeContext.Provider value={threeData}>
      {props.children}
    </threeContext.Provider>
  );
}

export const threeContext = createContext();
