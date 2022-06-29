import { useContext } from "react";
import { optionsContext } from "../../providers/OptionsProvider";
import ExportPane from "./ExportMenu";
import ScenePane from "./SceneMenu";
import SettingsPane from "./SettingsMenu";
import OptionsSelector from "./components/OptionsSelector";
import "./styles/SceneOptions.scss";

const SceneOptions = () => {
  const { selectedOption } = useContext(optionsContext);

  return (
    <aside className='graph'>
      <OptionsSelector options={["SCENE", "EXPORT", "SETTINGS"]} />
      {selectedOption === "SCENE" && <ScenePane></ScenePane>}
      {selectedOption === "EXPORT" && <ExportPane></ExportPane>}
      {selectedOption === "SETTINGS" && <SettingsPane></SettingsPane>}
    </aside>
  );
};

export default SceneOptions;
