import { LoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
// import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
// import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

export const loadAsset = async (baseURL, rootPath, fileMap, fileURL) => {
  const MANAGER = new LoadingManager();

  // Load.
  return await new Promise((resolve, reject) => {
    // Intercept and override relative URLs.
    MANAGER.setURLModifier((url, path) => {
      // URIs in a glTF file may be escaped, or not. Assume that assetMap is
      // from an un-escaped source, and decode all URIs before lookups.
      // See: https://github.com/donmccurdy/three-gltf-viewer/issues/146
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
    // .setKTX2Loader(KTX2Loader.detectSupport(this.renderer))
    // .setMeshoptDecoder(MeshoptDecoder);

    const blobURLs = [];

    loader.load(
      fileURL,
      (gltf) => {
        const scene = gltf.scene || gltf.scenes[0];
        // const clips = gltf.animations || [];

        if (!scene) {
          // Valid, but not supported by this viewer.
          throw new Error(
            "This model contains no scene, and cannot be viewed here. However," +
              " it may contain individual 3D resources."
          );
        }

        blobURLs.forEach(URL.revokeObjectURL);

        resolve(gltf);
      },
      undefined,
      reject
    );
  });
};
