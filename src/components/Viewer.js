import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import { meshContext } from "../providers/MeshProvider";
import { OrbitControls } from "@react-three/drei";

import "./styles/Viewer.scss";

const Viewer = (props) => {
  const [show, setShow] = useState(false);
  let viewerClass = classNames("viewer", {
    "viewer--hide": !props.show,
    "viewer--show": props.show,
  });

  const { mesh } = useContext(meshContext);

  useEffect(() => {
    if (mesh) {
      setShow(true);
    }
  }, [mesh]);

  return (
    <main className={viewerClass}>
      {show ? (
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={1} />
          <directionalLight color='white' position={[-2, -3, 5]} />
          <primitive object={mesh} />
        </Canvas>
      ) : (
        <h1>No File Loaded</h1>
      )}
    </main>
  );
};

export default Viewer;
