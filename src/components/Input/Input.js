import classNames from "classnames";
import "./Input.scss";

const Input = (props) => {
  let inputClass = classNames("input", {
    "input--asset": props.asset,
    "input--backgroundInput": props.backgroundInput,
    "input--invisible": props.invisible,
    "input--object": props.object,
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
      defaultValue={props.value}
      step={props.step}
      disabled={props.disabled}
      onMouseDown={props.onMouseDown}
    />
  );
};

export default Input;
