import {
  AiOutlineExpandAlt,
  AiOutlineDrag,
  AiOutlineRotateRight,
} from "react-icons/ai";
import { useThreeStore } from "../../hooks/use-three-store.hook";
import "./ControlOptions.scss";

const ControlOptions = () => {
  const { controlType } = useThreeStore();

  const modeSelectHandler = (type) => {
    return (event) => useThreeStore.setState({ controlType: type });
  };

  const isSelected = (type) => {
    return type === controlType;
  };

  return (
    <aside>
      <button
        title="Translate"
        className={isSelected("translate") ? "selected" : ""}
        onClick={modeSelectHandler("translate")}
      >
        <AiOutlineDrag />
      </button>
      <button
        title="Rotate"
        className={isSelected("rotate") ? "selected" : ""}
        onClick={modeSelectHandler("rotate")}
      >
        <AiOutlineRotateRight />
      </button>
      <button
        title="Scale"
        className={isSelected("scale") ? "selected" : ""}
        onClick={modeSelectHandler("scale")}
      >
        <AiOutlineExpandAlt />
      </button>
    </aside>
  );
};

export default ControlOptions;
