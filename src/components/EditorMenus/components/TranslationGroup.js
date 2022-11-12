import { useState } from "react";
import DragInput from "./DragInput";

const TranslationGroup = ({ type, translation, onChange, onMouseDown }) => {
  const [xValue, setXValue] = useState(translation.x);
  const [yValue, setYValue] = useState(translation.y);
  const [zValue, setZValue] = useState(translation.z);

  if (!translation) {
    return;
  }

  return (
    <div className="input-group">
      <DragInput
        value={xValue}
        onChange={(e) => {
          setXValue(Number(e));
          onChange("x", Number(e), type);
        }}
        onMouseDown={(e) => {
          setXValue(e);
          onMouseDown("x", e, type);
        }}
      />
      <DragInput
        value={yValue}
        onChange={(e) => {
          setYValue(Number(e));
          onChange("y", Number(e), type);
        }}
        onMouseDown={(e) => {
          setYValue(e);
          onMouseDown("y", e, type);
        }}
      />
      <DragInput
        value={zValue}
        onChange={(e) => {
          setZValue(Number(e));
          onChange("z", Number(e), type);
        }}
        onMouseDown={(e) => {
          setZValue(e);
          onMouseDown("z", e, type);
        }}
      />
    </div>
  );
};

export default TranslationGroup;
