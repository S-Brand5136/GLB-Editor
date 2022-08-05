import { useContext, useState, useEffect } from "react";
import { threeContext } from "../../providers/ThreeProvider";
import Input from "../Input/Input";
import "./SceneMenu.scss";

const ScenePane = () => {
  const [meshChildren, setMeshChildren] = useState(null);
  const [selectedMesh, setSelectedMesh] = useState();
  const { mesh, changeBackground, background, resetBackground } =
    useContext(threeContext);

  // background input
  const [backgroundType, setBackgroundType] = useState("");

  useEffect(() => {
    if (mesh) {
      const meshArr = [];

      setSelectedMesh(mesh.children[0]);

      mesh.traverse((child) => {
        if (child.parent === null) {
          child.userData["mesh_parent"] = true;
        }

        meshArr.push(child);
      });

      setMeshChildren(meshArr);
    }
  }, [mesh]);

  return (
    <section className='scene-menu'>
      <div className='mesh-window'>
        {meshChildren &&
          meshChildren.map((child) => {
            return (
              <div
                className={`${selectedMesh.uuid === child.uuid && "selected"}`}
                key={child.uuid}
                onClick={() => setSelectedMesh(child)}
              >
                <div>
                  <div className='mesh-prefix'></div>
                  <p>{child.name === "" ? "Scene" : child.name}</p>
                </div>
                <div>
                  <div className='material-prefix'></div>
                  <p>{child.material && child.material.name}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className='input-select'>
        <span>Background</span>
        <select
          name=''
          id=''
          value={backgroundType}
          onChange={(e) => {
            setBackgroundType(e.target.value);
            if (e.target.value === "") {
              resetBackground();
            }
          }}
        >
          <option value=''> </option>
          <option value='color'>COLOR</option>
          <option value='file'>TEXTURE</option>
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
          htmlFor='background-upload'
          style={{
            display: backgroundType === "file" ? "initial" : "none",
            background: !background ? "black" : background,
          }}
        />
      </div>
    </section>
  );
};

export default ScenePane;
