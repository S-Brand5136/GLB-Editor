import { useContext } from "react";
import { meshContext } from "../../providers/MeshProvider";
import "./ExportMenu.scss";

const ExportPane = () => {
  const { mesh } = useContext(meshContext);

  return <section className='export-menu'></section>;
};

export default ExportPane;
