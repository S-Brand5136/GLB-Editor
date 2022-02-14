import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import { meshContext } from "../providers/MeshProvider";

import "./styles/Viewer.scss";
import { OrbitControls } from "@react-three/drei";

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
    <Canvas className={viewerClass}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight color='white' position={[-2, -3, 5]} />
      {show ? <primitive object={mesh} /> : <></>}
    </Canvas>
  );
};

export default Viewer;
