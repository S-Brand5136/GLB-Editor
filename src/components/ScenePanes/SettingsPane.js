import { useThreeStore } from "../../hooks/use-three-store.hook";
import Row from "../EditorMenus/components/Row";
import Input from "../Input/Input";
import "./SettingsMenu.scss";

const SettingsPane = () => {
  const {
    showGrid,
    showGizmo,
    enableLDP,
    enablePDB,
    enableLinear,
    enableFlat,
    enableLegacy,
  } = useThreeStore();

  return (
    <section className="settings-menu">
      <h3>Canvas Settings</h3>
      <Row
        title={"Enable Linear Encoding"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ enableLinear: !enableLinear });
            }}
            isChecked={enableLinear}
          />
        }
      />
      <Row
        title={"Enable No Tone Mapping"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ enableFlat: !enableFlat });
            }}
            isChecked={enableFlat}
          />
        }
      />
      <Row
        title={"Enable Legacy Color Management"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ enableLegacy: !enableLegacy });
            }}
            isChecked={enableLegacy}
          />
        }
      />
      <Row
        title={"Enable Preserve Drawing Bugger"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ enablePDB: !enablePDB });
            }}
            isChecked={enablePDB}
          />
        }
      />
      <Row
        title={"Enable Logarithmic Depth Buffer"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ enableLDP: !enableLDP });
            }}
            isChecked={enableLDP}
          />
        }
      />
      <h3>Scene Helpers</h3>
      <Row
        title={"Enable Floor"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ showGrid: !showGrid });
            }}
            isChecked={showGrid}
          />
        }
      />
      <Row
        title={"Enable Gizmo"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              useThreeStore.setState({ showGizmo: !showGizmo });
            }}
            isChecked={showGizmo}
          />
        }
      />
    </section>
  );
};

export default SettingsPane;
