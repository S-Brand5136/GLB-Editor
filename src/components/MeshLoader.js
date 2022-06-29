import { useContext, useEffect, useRef } from "react";
import useAssetLoader from "../hooks/useAssetLoader";
import { meshContext } from "../providers/MeshProvider";
import { SimpleDropzone } from "simple-dropzone";
import Input from "./Inputs/Input";
import "./styles/MeshLoader.scss";

const MeshLoader = () => {
  // let inputEl, dropZone;
  const inputEl = useRef(null);
  const dropZoneEl = useRef(null);

  const { addMesh, addGraph } = useContext(meshContext);
  const [loadAsset, asset, error, loading] = useAssetLoader(addMesh, addGraph);

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
      addMesh(asset.scene);
    }
  }, [asset, addMesh, addGraph]);

  return (
    <div className='meshLoader'>
      <div ref={dropZoneEl} className='upload-form'>
        <h3>Drag & drop file, or click browse to upload file</h3>
        <Input type='file' setRef={inputEl} id='asset' name='3D-Asset' asset />
        {error ? <p>{error}</p> : <p></p>}
        {loading ? <p>Loading...</p> : <p></p>}
      </div>
    </div>
  );
};

export default MeshLoader;
