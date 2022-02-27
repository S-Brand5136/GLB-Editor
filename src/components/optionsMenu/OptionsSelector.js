import { useContext } from "react";
import Button from "../Button";
import "./styles/OptionsSelector.scss";

import { optionsContext } from "../../providers/OptionsProvider";

const OptionsSelector = (props) => {
  const { selectedOption, updateSelectedOption } = useContext(optionsContext);

  const optionSelection = props.options.map((option, index) => (
    <Button
      key={index}
      option
      option_selected={option === selectedOption}
      onClick={() => updateSelectedOption(option)}
    >
      {option}
    </Button>
  ));

  return <header className='options-selector'>{optionSelection}</header>;
};

export default OptionsSelector;
