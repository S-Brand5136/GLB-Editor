import { useContext, useState } from "react";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";
import { threeContext } from "../../providers/ThreeProvider";
import {
  Center,
  Environment,
  GizmoHelper,
  GizmoViewport,
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

  return <primitive object={mesh.current} />;
};

const Viewer = () => {
  let viewerClass = classNames("viewer", {});

  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);

  const {
    mesh,
    background,
    isTexture,
    showGrid,
    selectedMesh,
    setSelectedMesh,
    controlType,
    renderScene,
  } = useContext(threeContext);

  return (
    <main className={viewerClass}>
      {!renderScene ? (
        <MeshLoader />
      ) : (
        <Canvas>
          {/* Controls */}
          {selectedMesh && (
            <TransformControls
              onMouseUp={() => setOrbitControlsEnabled(true)}
              onMouseDown={() => setOrbitControlsEnabled(false)}
              mode={controlType}
              object={selectedMesh}
            />
          )}
          {orbitControlsEnabled && <OrbitControls />}

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
          <Center>
            {/* Mesh */}
            <Select
              box
              multiple
              onChange={(selectedArr) => {
                selectedArr.length > 0
                  ? setSelectedMesh(selectedArr[0])
                  : setSelectedMesh(null);
              }}
            >
              <UserObject mesh={mesh} transformMesh={selectedMesh} />
            </Select>
          </Center>
          {/* Grid */}
          {showGrid && (
            <Plane
              rotation-x={Math.PI / 2}
              position-y={-0.15}
              args={[20, 20, 10, 10]}
            >
              <meshPhongMaterial wireframe />
            </Plane>
          )}
          {/* Gizmo */}
          <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
            <GizmoViewport
              axisColors={["red", "green", "blue"]}
              labelColor='black'
            />
          </GizmoHelper>
        </Canvas>
      )}
    </main>
  );
};

export default Viewer;
