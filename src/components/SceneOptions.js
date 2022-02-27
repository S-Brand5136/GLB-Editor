import { useContext } from "react";
import { optionsContext } from "../providers/OptionsProvider";
import ExportPane from "./optionsMenu/ExportPane";
import ScenePane from "./optionsMenu/ScenePane";
import SettingsPane from "./optionsMenu/SettingsPane";

import "./styles/SceneOptions.scss";
import OptionsSelector from "./optionsMenu/OptionsSelector";

const SceneOptions = () => {
  const { selectedOption } = useContext(optionsContext);

  return (
    <main className='graph'>
      <OptionsSelector options={["SCENE", "EXPORT", "SETTINGS"]} />
      {selectedOption === "SCENE" && <ScenePane></ScenePane>}
      {selectedOption === "EXPORT" && <ExportPane></ExportPane>}
      {selectedOption === "SETTINGS" && <SettingsPane></SettingsPane>}
    </main>
  );
};

export default SceneOptions;
