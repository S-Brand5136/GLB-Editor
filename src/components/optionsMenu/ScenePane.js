import { useContext, useState, useEffect } from "react";
import { meshContext } from "../../providers/MeshProvider";
import EmptyScene from "./EmptyScene";
import "./styles/ScenePane.scss";

const ScenePane = () => {
  const [elementNames, setElementNames] = useState(null);
  const { mesh, graph } = useContext(meshContext);

  useEffect(() => {
    if (mesh) {
      console.log(graph);
      //   mesh.traverse((child) => {
      //     console.log(child);
      //   });
    }
  }, [graph]);

  return (
    <section className='scene-pane'>{!mesh ? <EmptyScene /> : <></>}</section>
  );
};

export default ScenePane;
