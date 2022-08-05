import classNames from "classnames";
import "./Input.scss";

const Input = (props) => {
  let inputClass = classNames("input", {
    "input--asset": props.asset,
    "input--backgroundInput": props.backgroundInput,
    "input--invisible": props.invisible,
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
    />
  );
};

export default Input;
