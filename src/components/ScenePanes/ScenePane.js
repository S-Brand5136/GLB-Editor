import { useContext, useState, useEffect } from "react";
import { meshContext } from "../../providers/MeshProvider";
import "./SceneMenu.scss";

const ScenePane = () => {
  const [elementNames, setElementNames] = useState(null);
  const { mesh, graph } = useContext(meshContext);

  useEffect(() => {
    if (mesh) {
      console.log(graph);
    }
  }, [graph]);

  return <section className='scene-menu'></section>;
};

export default ScenePane;
