import classNames from "classnames";
import { Canvas } from "@react-three/fiber";

import "./styles/Viewer.scss";

const Viewer = (props) => {
  let canvasClass = classNames("canvas", {
    "canvas--hide": !props.show,
    "canvas--show": props.show,
  });

  return <Canvas className={canvasClass}>{props.children}</Canvas>;
};

export default Viewer;
