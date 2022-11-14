import classNames from "classnames";
import "./Input.scss";

const Input = (props) => {
  let inputClass = classNames("input", {
    "input--asset": props.asset,
    "input--backgroundInput": props.backgroundInput,
    "input--invisible": props.invisible,
    "input--dragInput": props.dragInput,
    "input--dark": props.darkBackground,
    "input--removeSpin": props.removeSpin,
  });

  return (
    <input
      ref={props.setRef}
      className={inputClass}
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      onClick={props.onClick}
      value={props.value}
      step={props.step}
      disabled={props.disabled}
      onMouseDown={props.onMouseDown}
      inputMode={props.inputMode}
      patter={props.pattern}
      checked={props.isChecked}
    />
  );
};

export default Input;
