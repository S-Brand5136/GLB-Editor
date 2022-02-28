import { useContext, useState } from "react";
import { meshContext } from "../../providers/MeshProvider";
import EmptyScene from "./EmptyScene";
import "./styles/ScenePane.scss";

const ScenePane = () => {
  const { mesh, graph } = useContext(meshContext);

  return (
    <section className='scene-pane'>{!mesh ? <EmptyScene /> : <></>}</section>
  );
};

export default ScenePane;
