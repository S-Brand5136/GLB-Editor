import OptionsSelector from "../OptionsSelector";
import { ExportPane, ScenePane, SettingsPane } from "../ScenePanes";
import { usePaneSelector } from "../../hooks/use-pane-selector.hook";
import "./SceneOptions.scss";

const SceneOptions = () => {
  const { selectedOption, setSelectedOption } = usePaneSelector("SCENE");

  return (
    <nav className='scene-options'>
      <OptionsSelector
        isTop
        options={["SCENE", "EXPORT", "SETTINGS"]}
        selectedOption={selectedOption}
        setSelectedOption={(option) => setSelectedOption(option)}
      />
      {selectedOption === "SCENE" && <ScenePane></ScenePane>}
      {selectedOption === "EXPORT" && <ExportPane></ExportPane>}
      {selectedOption === "SETTINGS" && <SettingsPane></SettingsPane>}
    </nav>
  );
};

export default SceneOptions;
