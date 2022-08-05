import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import { threeContext } from "../../providers/ThreeProvider";
import { Environment, OrbitControls } from "@react-three/drei";
import MeshLoader from "../MeshLoader";

import "./Viewer.scss";

const Viewer = () => {
  const [show, setShow] = useState(false);
  let viewerClass = classNames("viewer", {});

  const { mesh, background, isTexture } = useContext(threeContext);

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
          {background && !isTexture && (
            <color attach='background' args={[background]} />
          )}
          <OrbitControls />
          <ambientLight intensity={1} />
          <directionalLight color='white' position={[-2, -3, 5]} />
          {isTexture && (
            <Environment
              background
              ground={{
                height: 15,
                radius: 80,
                scale: 200,
              }}
              files={background}
            />
          )}
          <primitive object={mesh} />
        </Canvas>
      )}
    </main>
  );
};

export default Viewer;
