import { LoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export const loadAsset = async (baseURL, rootPath, fileMap, fileURL) => {
  const MANAGER = new LoadingManager();

  // Load.
  return await new Promise((resolve, reject) => {
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

    const loader = new GLTFLoader(MANAGER)
      .setCrossOrigin("anonymous")
      .setDRACOLoader(DRACOLoader);

    const blobURLs = [];

    MANAGER.onError = () => {
      reject({ Error: "Failure during upload" });
    };

    loader.load(
      fileURL,
      (gltf) => {
        const scene = gltf.scene || gltf.scenes[0];

        if (!scene) {
          // Valid, but not supported by this viewer.
          throw new Error(
            "This model contains no scene, and cannot be viewed here. However," +
              " it may contain individual 3D resources."
          );
        }

        blobURLs.forEach(URL.revokeObjectURL);

        return resolve(gltf);
      },
      undefined,
      (error) => {
        return reject({ Error: "Failure during upload" });
      }
    );
  });
};
