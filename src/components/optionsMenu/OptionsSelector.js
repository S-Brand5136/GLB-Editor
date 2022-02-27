import React from "react";
import Button from "../Button";

const OptionsSelector = (props) => {
  const optionSelection = props.options.map((option, index) => (
    <Button key={index} option onClick={() => console.log("clicked")}>
      {option}
    </Button>
  ));

  return <header>{optionSelection}</header>;
};

export default OptionsSelector;
