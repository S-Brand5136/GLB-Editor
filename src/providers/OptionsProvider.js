import { createContext, useState } from "react";

export default function MeshProvider(props) {
  const [selectedOption, setSelectedOption] = useState("Scene");

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
