import { useDragInput } from "../../../hooks/use-drag-input.hook";
import Input from "../../Input/Input";

const DragInput = ({ value, onChange, onMouseDown }) => {
  const setValue = useDragInput(value, onMouseDown);

  return (
    <Input
      object
      removeSpin
      type={"number"}
      step={0.01}
      value={value.toFixed(3)}
      onMouseDown={setValue}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default DragInput;
