import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import { meshContext } from "../providers/MeshProvider";
import { OrbitControls } from "@react-three/drei";
import MeshLoader from "./MeshLoader";

import "./styles/Viewer.scss";

const Viewer = () => {
  const [show, setShow] = useState(false);
  let viewerClass = classNames("viewer", {});

  const { mesh } = useContext(meshContext);

  useEffect(() => {
    if (mesh) {
      setShow(true);
    }
  }, [mesh]);

  return (
    <main className={viewerClass}>
      {!show ? (
        <MeshLoader />
      ) : (
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={1} />
          <directionalLight color='white' position={[-2, -3, 5]} />
          <primitive object={mesh} />
        </Canvas>
      )}
    </main>
  );
};

export default Viewer;
