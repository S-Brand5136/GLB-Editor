import React, { useContext } from "react";
import {
  AiOutlineExpandAlt,
  AiOutlineDrag,
  AiOutlineRotateRight,
} from "react-icons/ai";
import { threeContext } from "../../providers/ThreeProvider";
import "./ControlOptions.scss";

const ControlOptions = () => {
  const { controlType, setControlType } = useContext(threeContext);

  const modeSelectHandler = (type) => {
    return (event) => setControlType(type);
  };

  const isSelected = (type) => {
    return type === controlType;
  };

  return (
    <aside>
      <button
        title='Translate'
        className={isSelected("translate") ? "selected" : ""}
        onClick={modeSelectHandler("translate")}
      >
        <AiOutlineDrag />
      </button>
      <button
        title='Rotate'
        className={isSelected("rotate") ? "selected" : ""}
        onClick={modeSelectHandler("rotate")}
      >
        <AiOutlineRotateRight />
      </button>
      <button
        title='Scale'
        className={isSelected("scale") ? "selected" : ""}
        onClick={modeSelectHandler("scale")}
      >
        <AiOutlineExpandAlt />
      </button>
    </aside>
  );
};

export default ControlOptions;
