import { createContext, useState } from "react";

export default function OptionsProvider(props) {
  const [selectedOption, setSelectedOption] = useState("SCENE");

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const optionsData = {
    updateSelectedOption,
    selectedOption,
  };

  return (
    <optionsContext.Provider value={optionsData}>
      {props.children}
    </optionsContext.Provider>
  );
}

export const optionsContext = createContext();
