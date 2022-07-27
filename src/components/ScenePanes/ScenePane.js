import { useContext, useState, useEffect } from "react";
import { meshContext } from "../../providers/MeshProvider";
import "./SceneMenu.scss";

const ScenePane = () => {
  const [meshChildren, setMeshChildren] = useState(null);
  const [selectedMesh, setSelectedMesh] = useState();
  const [backgroundType, setBackgroundType] = useState("");
  const { mesh, graph } = useContext(meshContext);

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
          onChange={(e) => setBackgroundType(e.target.value)}
        >
          <option value=''> </option>
          <option value='color'>COLOR</option>
          <option value='texture'>TEXTURE</option>
        </select>
      </div>
    </section>
  );
};

export default ScenePane;
