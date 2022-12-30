import { useState, useEffect } from "react";
import { usePaneSelector } from "../../hooks/use-pane-selector.hook";
import { useThreeStore } from "../../hooks/use-three-store.hook";
import { GeometryWindow, MaterialWindow, ObjectWindow } from "../EditorMenus/";
import Input from "../Input/Input";
import OptionsSelector from "../OptionsSelector";
import "./SceneMenu.scss";

const ScenePane = () => {
  const { selectedOption, setSelectedOption } = usePaneSelector("OBJECT");
  const [meshChildren, setMeshChildren] = useState(null);
  const {
    changeBackground,
    resetBackground,
    background,
    mesh,
    selectedMesh,
    renderScene,
  } = useThreeStore();

  // background input
  const [backgroundType, setBackgroundType] = useState("");

  useEffect(() => {
    if (mesh?.scene && !meshChildren) {
      const meshArr = [];

      mesh?.scene.traverse((child) => {
        if (child.parent === null) {
          child.userData["mesh_parent"] = true;
        }

        meshArr.push(child);
      });

      setMeshChildren(meshArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderScene]);

  return (
    <section className="scene-menu">
      <section className="top-layout">
        <div className="mesh-window">
          {meshChildren &&
            meshChildren.map((child) => {
              return (
                <div
                  className={`${
                    selectedMesh?.uuid === child.uuid ? "selected" : ""
                  }`}
                  key={child.uuid}
                  onClick={() =>
                    useThreeStore.setState({ selectedMesh: child })
                  }
                >
                  <div>
                    <div className="mesh-prefix"></div>
                    <p>{child.name === "" ? "Scene" : child.name}</p>
                  </div>
                  <div>
                    <div className="material-prefix"></div>
                    <p>{child.material && child.material.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="input-select">
          <span>Background</span>
          <select
            name=""
            id=""
            value={backgroundType}
            onChange={(e) => {
              setBackgroundType(e.target.value);
              if (e.target.value === "") {
                resetBackground();
              }
            }}
          >
            <option value=""> </option>
            <option value="color">COLOR</option>
            <option value="file">TEXTURE</option>
          </select>
          <Input
            backgroundInput
            invisible={backgroundType === "" || backgroundType === "file"}
            type={backgroundType}
            onChange={(e) => {
              changeBackground(e);
            }}
            id={"background-upload"}
          />
          <label
            htmlFor="background-upload"
            style={{
              display: backgroundType === "file" ? "initial" : "none",
              background: !background ? "black" : background,
            }}
          />
        </div>
      </section>
      <nav className="scene-options" style={{ width: "100%" }}>
        <OptionsSelector
          options={["OBJECT", "GEOMETRY", "MATERIAL"]}
          selectedOption={selectedOption}
          setSelectedOption={(option) => setSelectedOption(option)}
        />
        {selectedOption === "OBJECT" && <ObjectWindow />}
        {selectedOption === "GEOMETRY" && <GeometryWindow />}
        {selectedOption === "MATERIAL" && <MaterialWindow />}
      </nav>
    </section>
  );
};

export default ScenePane;
