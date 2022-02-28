import { useContext } from "react";
import { meshContext } from "../../providers/MeshProvider";
import EmptyScene from "./EmptyScene";
import "./styles/ExportPane.scss";

const ExportPane = () => {
  const { mesh } = useContext(meshContext);

  return (
    <section className='export-pane'>{!mesh ? <EmptyScene /> : <></>}</section>
  );
};

export default ExportPane;
