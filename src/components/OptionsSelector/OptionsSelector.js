import Button from "../Button";
import classNames from "classnames";
import "./OptionsSelector.scss";

const OptionsSelector = ({
  options,
  selectedOption,
  setSelectedOption,
  isTop,
}) => {
  let selectorClass = classNames("options-selector", {
    "options-selector--top": isTop,
  });

  const optionSelection = options.map((option, index) => (
    <Button
      key={index}
      option
      option_selected={option === selectedOption}
      onClick={() => setSelectedOption(option)}
    >
      {option}
    </Button>
  ));

  return <header className={selectorClass}>{optionSelection}</header>;
};

export default OptionsSelector;
