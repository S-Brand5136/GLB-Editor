import { useState } from "react";

export function usePaneSelector(initPane) {
  const [selectedOption, setSelectedOption] = useState(initPane);

  return { selectedOption, setSelectedOption };
}
