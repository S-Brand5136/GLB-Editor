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
        value={translation?.x}
        onChange={(e) => {
          onChange("x", Number(e), type);
        }}
        onMouseDown={(e) => {
          onMouseDown("x", e, type);
        }}
      />
      <DragInput
        value={translation?.y}
        onChange={(e) => {
          onChange("y", Number(e), type);
        }}
        onMouseDown={(e) => {
          onMouseDown("y", e, type);
        }}
      />
      <DragInput
        value={translation?.z}
        onChange={(e) => {
          onChange("z", Number(e), type);
        }}
        onMouseDown={(e) => {
          onMouseDown("z", e, type);
        }}
      />
    </div>
  );
};

export default TranslationGroup;
