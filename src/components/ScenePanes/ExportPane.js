import { useState } from "react";
import { Exporter } from "../../utils/Exporter";
import Row from "../EditorMenus/components/Row";
import Input from "../Input/Input";
import { useThreeStore } from "../../hooks/use-three-store.hook";
import "./ExportMenu.scss";

const ExportPane = () => {
  const { mesh } = useThreeStore();
  const [exportSettings, setExportSettings] = useState({
    trs: false,
    onlyVisible: true,
    truncateDrawRange: true,
    binary: false,
    maxTextureSize: Infinity,
    forceIndices: false,
    includeCustomExtensions: false,
  });
  const [fileName, setFileName] = useState("Scene");

  const exportHandler = () => {
    if (fileName.length === 0) {
      return alert("Please provide a file name");
    }

    const exporter = new Exporter(
      exportSettings.trs,
      exportSettings.onlyVisible,
      exportSettings.truncateDrawRange,
      exportSettings.binary,
      exportSettings.maxTextureSize,
      exportSettings.forceIndices,
      exportSettings.includeCustomExtensions
    );

    exporter.exportFile(mesh.scene);
  };

  return (
    <section className="export-menu">
      <h3>Export Settings</h3>
      <Row
        title={"Enable TRS"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              setExportSettings((curr) => {
                return { ...exportSettings, trs: !exportSettings.trs };
              });
            }}
            isChecked={exportSettings.trs}
          />
        }
      />
      <Row
        title={"Only Visible"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              setExportSettings((curr) => {
                return {
                  ...exportSettings,
                  onlyVisible: !exportSettings.onlyVisible,
                };
              });
            }}
            isChecked={exportSettings.onlyVisible}
          />
        }
      />
      <Row
        title={"Truncate Draw Range"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              setExportSettings((curr) => {
                return {
                  ...exportSettings,
                  truncateDrawRange: !exportSettings.truncateDrawRange,
                };
              });
            }}
            isChecked={exportSettings.truncateDrawRange}
          />
        }
      />
      <Row
        title={"Export as GLB"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              setExportSettings((curr) => {
                return { ...exportSettings, binary: !exportSettings.binary };
              });
            }}
            isChecked={exportSettings.binary}
          />
        }
      />
      <Row
        title={"Max Texture Size"}
        body={
          <select
            name=""
            id=""
            defaultValue={Math.Infinity}
            value={Math.Infinity}
            onChange={(e) => {
              setExportSettings((curr) => {
                return { ...exportSettings, maxTextureSize: e.target.value };
              });
            }}
          >
            <option value={Math.Infinity}>INFINITY</option>
            <option value={512}>512</option>
            <option value={1024}>1024</option>
          </select>
        }
      />
      <Row
        title={"Force Indices"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              setExportSettings((curr) => {
                return {
                  ...exportSettings,
                  forceIndices: !exportSettings.forceIndices,
                };
              });
            }}
            isChecked={exportSettings.forceIndices}
          />
        }
      />
      <Row
        title={"Include Custom Extensions"}
        body={
          <Input
            type="checkbox"
            onChange={(e) => {
              setExportSettings((curr) => {
                return {
                  ...exportSettings,
                  includeCustomExtensions:
                    !exportSettings.includeCustomExtensions,
                };
              });
            }}
            isChecked={exportSettings.includeCustomExtensions}
          />
        }
      />
      <h3>Export</h3>
      <Row
        title={"File Name"}
        body={
          <Input
            darkBackground
            removeSpin
            type="text"
            onChange={(e) => {
              setFileName(e.target.value);
            }}
            value={fileName}
          />
        }
      />
      <button onClick={exportHandler}>Export Object</button>
    </section>
  );
};

export default ExportPane;
