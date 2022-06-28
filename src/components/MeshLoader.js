import { useState, useContext, useEffect, useRef } from "react";
import { meshContext } from "../providers/MeshProvider";
import { SimpleDropzone } from "simple-dropzone";
import { LoaderUtils } from "three";
import { loadAsset } from "../helpers/loadAsset";
import { createGraph } from "../helpers/createGraph";
import Input from "./Inputs/Input";
import "./styles/MeshLoader.scss";

const MeshLoader = () => {
  // let inputEl, dropZone;
  const [error, setError] = useState(null);
  const inputEl = useRef(null);
  const dropZoneEl = useRef(null);

  const { addMesh, addGraph } = useContext(meshContext);

  // Sets up drag and drop controller
  useEffect(() => {
    const dropCtrl = new SimpleDropzone(dropZoneEl.current, inputEl.current);
    dropCtrl.on("drop", ({ files }) => SubmitHandler(files));
    dropCtrl.on("dropstart", () => {});
    dropCtrl.on("droperror", () => {});
  }, []);

  const SubmitHandler = async (fileMap) => {
    let rootFile;
    let rootPath;
    Array.from(fileMap).forEach(([path, file]) => {
      if (file.name.match(/\.(gltf|glb)$/)) {
        rootFile = file;
        rootPath = path.replace(file.name, "");
      }
    });

    if (!rootFile) {
      setError("No GLB or GLTF file found.");
    }

    const fileURL =
      typeof rootFile === "string" ? rootFile : URL.createObjectURL(rootFile);

    const baseURL = LoaderUtils.extractUrlBase(fileURL);

    loadAsset(baseURL, rootPath, fileMap, fileURL)
      .then((data) => {
        if (data?.scene) {
          addMesh(data.scene);
          return addGraph(createGraph(data.scene));
        }

        return setError("Failure during upload");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className='meshLoader'>
      <div ref={dropZoneEl} className='upload-form'>
        <h3>Drag & drop file, or click browse to upload file</h3>
        <Input
          onClick={() => {
            setError(null);
          }}
          type='file'
          setRef={inputEl}
          id='asset'
          name='3D-Asset'
          asset
        />
        {error ? <p>{error}</p> : <p></p>}
      </div>
    </div>
  );
};

export default MeshLoader;
