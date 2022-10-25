import DragInput from "./DragInput";

const TranslationGroup = ({ type, translation, onChange, onMouseDown }) => {
  return (
    <div className='input-group'>
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
