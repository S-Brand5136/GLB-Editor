import classNames from "classnames";
import "./Button.scss";

const Button = (props) => {
  let buttonClass = classNames("btn", {
    "btn--submit": props.submit,
    "btn--viewSelect": props.viewSelect,
    "btn--selected": props.selected,
    "btn--option": props.option,
    "btn--option-selected": props.option_selected,
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
