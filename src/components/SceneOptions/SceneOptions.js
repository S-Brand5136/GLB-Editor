import { useContext } from "react";
import { optionsContext } from "../../providers/OptionsProvider";
import { ExportPane, ScenePane, SettingsPane } from "../ScenePanes";
import OptionsSelector from "../OptionsSelector";
import "./SceneOptions.scss";

const SceneOptions = () => {
  const { selectedOption } = useContext(optionsContext);

  return (
    <nav className='graph'>
      <OptionsSelector options={["SCENE", "EXPORT", "SETTINGS"]} />
      {selectedOption === "SCENE" && <ScenePane></ScenePane>}
      {selectedOption === "EXPORT" && <ExportPane></ExportPane>}
      {selectedOption === "SETTINGS" && <SettingsPane></SettingsPane>}
    </nav>
  );
};

export default SceneOptions;
