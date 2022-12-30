import { useState } from "react";
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
import { BoxHelper } from "three";
import { useThreeStore } from "../../hooks/use-three-store.hook";

const UserObject = ({ mesh, transformMesh }) => {
  useHelper(
    transformMesh !== null && { current: transformMesh },
    BoxHelper,
    "yellow"
  );

  return <primitive object={mesh.scene} />;
};

const Editor = () => {
  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);

  const { mesh, showGrid, selectedMesh, controlType, showGizmo } =
    useThreeStore();

  const background = useThreeStore((state) => state.background);
  const isTexture = useThreeStore((state) => state.isTexture);

  return (
    <>
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
      <directionalLight color="white" position={[-2, -3, 5]} />
      {/* Backgrounds */}
      {background && !isTexture && (
        <color attach="background" args={[background]} />
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
          onChange={(selectedArr) =>
            selectedArr.length > 0
              ? useThreeStore.setState({ selectedMesh: selectedArr[0] })
              : useThreeStore.setState({ selectedMesh: null })
          }
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
      {showGizmo && (
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>
      )}
    </>
  );
};

export default Editor;
