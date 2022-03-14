import { useContext } from "react";
import { optionsContext } from "../providers/OptionsProvider";
import ExportPane from "./Menus/ExportMenu";
import ScenePane from "./Menus/SceneMenu";
import SettingsPane from "./Menus/SettingsMenu";
import OptionsSelector from "./Menus/OptionsSelector";
import "./styles/SceneOptions.scss";

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
