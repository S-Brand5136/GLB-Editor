import { useEffect, useRef } from "react";
import useAssetLoader from "../../hooks/use-asset-loader.hook";
import { SimpleDropzone } from "simple-dropzone";
import Input from "../Input";
import "./MeshLoader.scss";
import { useThreeStore } from "../../hooks/use-three-store.hook";

const MeshLoader = () => {
  // let inputEl, dropZone;
  const inputEl = useRef(null);
  const dropZoneEl = useRef(null);

  const { addMesh, mesh } = useThreeStore();
  const [loadAsset, asset, error, loading] = useAssetLoader(addMesh);

  // Sets up drag and drop controller
  useEffect(() => {
    const dropCtrl = new SimpleDropzone(dropZoneEl.current, inputEl.current);
    dropCtrl.on("drop", ({ files }) => loadAsset(files));
    dropCtrl.on("dropstart", () => {});
    dropCtrl.on("droperror", () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (asset) {
      addMesh(asset);
    }
  }, [asset, addMesh]);

  return (
    <div className="meshLoader">
      <div ref={dropZoneEl} className="upload-form">
        <h3>Drag & drop file, or click browse to upload</h3>
        <Input type="file" setRef={inputEl} id="asset" name="3D-Asset" asset />
        {error ? <p>{error}</p> : <p></p>}
        {loading ? <p>Loading...</p> : <p></p>}
      </div>
    </div>
  );
};

export default MeshLoader;
