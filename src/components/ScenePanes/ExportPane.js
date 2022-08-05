import { useContext } from "react";
import { threeContext } from "../../providers/ThreeProvider";
import "./ExportMenu.scss";

const ExportPane = () => {
  const { mesh } = useContext(threeContext);

  return <section className='export-menu'></section>;
};

export default ExportPane;
