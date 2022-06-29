import { useState } from "react";
import { LoaderUtils, LoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default function useAssetLoader() {
  const [error, setError] = useState(null);
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(false);

  // set threejs loading manager to watch for loading state
  const MANAGER = new LoadingManager();
  MANAGER.onLoad = function () {
    setLoading(true);
  };
  MANAGER.onLoad = function () {
    setLoading(false);
  };

  // init GLTFLoader
  const loader = new GLTFLoader(MANAGER)
    .setCrossOrigin("anonymous")
    .setDRACOLoader(DRACOLoader);

  const loadAsset = async (fileMap) => {
    const blobURLs = [];
    let rootFile;
    let rootPath;

    // Intercept and override relative URLs.
    MANAGER.setURLModifier((url, path) => {
      const normalizedURL =
        rootPath +
        decodeURI(url)
          .replace(baseURL, "")
          .replace(/^(\.?\/)/, "");

      if (fileMap.has(normalizedURL)) {
        const blob = fileMap.get(normalizedURL);
        const blobURL = URL.createObjectURL(blob);
        blobURLs.push(blobURL);
        return blobURL;
      }

      return (path || "") + url;
    });

    Array.from(fileMap).forEach(([path, file]) => {
      if (file.name.match(/\.(gltf|glb)$/)) {
        rootFile = file;
        rootPath = path.replace(file.name, "");
      }
    });

    if (!rootFile) {
      return setError("No GLB or GLTF file found.");
    }

    // Get fileURL from root file URL object and extract to baseURL
    // with THREEjs LoaderUtils class
    const fileURL =
      typeof rootFile === "string" ? rootFile : URL.createObjectURL(rootFile);

    const baseURL = LoaderUtils.extractUrlBase(fileURL);

    loader.load(
      fileURL,
      (gltf) => {
        const scene = gltf.scene || gltf.scenes[0];

        if (!scene) {
          // Valid, but not supported by this viewer.
          return setError(
            "This model contains no scene, and cannot be viewed here. However," +
              " it may contain individual 3D resources."
          );
        }

        blobURLs.forEach(URL.revokeObjectURL);
        setAsset(gltf);
      },
      undefined,
      (error) => {
        setError("Failure during upload");
      }
    );
  };

  return [loadAsset, asset, error, loading];
}
