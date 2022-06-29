import { useContext } from "react";
import { meshContext } from "../../providers/MeshProvider";
import EmptyScene from "./components/EmptyScene";
import "./styles/ExportMenu.scss";

const ExportPane = () => {
  const { mesh } = useContext(meshContext);

  return (
    <section className='export-menu'>{!mesh ? <EmptyScene /> : <></>}</section>
  );
};

export default ExportPane;
