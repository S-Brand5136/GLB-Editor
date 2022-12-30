import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import MeshLoader from "../MeshLoader";

import "./Viewer.scss";
import Editor from "./Editor";
import { useThreeStore } from "../../hooks/use-three-store.hook";

const Viewer = () => {
  let viewerClass = classNames("viewer", {});
  const {
    renderScene,
    enablePDB,
    enableLDP,
    enableLinear,
    enableFlat,
    enableLegacy,
  } = useThreeStore();

  return (
    <main className={viewerClass}>
      {!renderScene ? (
        <MeshLoader />
      ) : (
        <Canvas
          gl={{
            preserveDrawingBuffer: enablePDB,
            logarithmicDepthBuffer: enableLDP,
          }}
          linear={enableLinear}
          flat={enableFlat}
          legacy={enableLegacy}
        >
          <Editor />
        </Canvas>
      )}
    </main>
  );
};

export default Viewer;
