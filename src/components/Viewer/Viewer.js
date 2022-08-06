import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import { threeContext } from "../../providers/ThreeProvider";
import {
  Environment,
  OrbitControls,
  Plane,
  Select,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import MeshLoader from "../MeshLoader";

import "./Viewer.scss";
import { BoxHelper } from "three";

const UserObject = ({ mesh, transformMesh }) => {
  useHelper(
    transformMesh !== null && { current: transformMesh },
    BoxHelper,
    "yellow"
  );

  return <primitive object={mesh} />;
};

const Viewer = () => {
  let viewerClass = classNames("viewer", {});

  const [renderScene, setRenderScene] = useState(false);
  const [orbitOn, setOrbitOn] = useState(true);

  const {
    mesh,
    background,
    isTexture,
    showGrid,
    selectedMesh,
    setSelectedMesh,
  } = useContext(threeContext);

  useEffect(() => {
    if (mesh) {
      setRenderScene(true);
    }
  }, [mesh]);

  return (
    <main className={viewerClass}>
      {!renderScene ? (
        <MeshLoader />
      ) : (
        <Canvas>
          {/* Controls */}
          {selectedMesh && (
            <TransformControls
              onMouseUp={() => setOrbitOn(true)}
              onMouseDown={() => setOrbitOn(false)}
              mode='translate'
              object={selectedMesh}
            />
          )}
          {orbitOn && <OrbitControls />}

          {/* Lights */}
          <ambientLight intensity={1} />
          <directionalLight color='white' position={[-2, -3, 5]} />
          {/* Backgrounds */}
          {background && !isTexture && (
            <color attach='background' args={[background]} />
          )}
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
          {/* Mesh */}
          <Select
            box
            multiple
            onChange={(e) => {
              e.length > 0 ? setSelectedMesh(e[0]) : setSelectedMesh(null);
            }}
          >
            <UserObject mesh={mesh} transformMesh={selectedMesh} />
          </Select>
          {/* Grid */}
          {showGrid && (
            <Plane rotation-x={Math.PI / 2} args={[20, 20, 10, 10]}>
              <meshPhongMaterial wireframe />
            </Plane>
          )}
        </Canvas>
      )}
    </main>
  );
};

export default Viewer;
