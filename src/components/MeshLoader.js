import { useState, useContext, useEffect } from "react";
import { meshContext } from "../providers/MeshProvider";
import { SimpleDropzone } from "simple-dropzone";
import { LoaderUtils } from "three";
import { loadAsset } from "../helpers/loadAsset";
import { createGraph } from "../helpers/createGraph";
import Input from "./Inputs/Input";
import "./styles/MeshLoader.scss";

const MeshLoader = () => {
  let inputEl, dropZone;
  const [error, setError] = useState(null);

  const { addMesh, addGraph } = useContext(meshContext);

  // Sets up drag and drop controller
  useEffect(() => {
    dropZone = document.querySelector(".upload-form");
    inputEl = document.querySelector("#asset");
    const dropCtrl = new SimpleDropzone(dropZone, inputEl);
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
        addMesh(data.scene);
        addGraph(createGraph(data.scene));
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <div className='meshLoader'>
      <div className='upload-form'>
        <h3>Drag & Drop or Click to upload file</h3>
        <Input
          onClick={() => {
            setError(null);
          }}
          type='file'
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
