import classNames from "classnames";
import "./styles/Input.scss";

const Input = (props) => {
  let inputClass = classNames("input", {
    "input--asset": props.asset,
  });

  return (
    <input
      classNames={inputClass}
      type={props.type}
      name={props.name}
      id={props.id}
    />
  );
};

export default Input;
