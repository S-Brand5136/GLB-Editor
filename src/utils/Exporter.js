import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Exporter extends GLTFLoader {
  constructor(
    trs = false,
    onlyVisible = true,
    truncateDrawRange = true,
    binary = false,
    maxTextureSize = Infinity,
    forceIndices = false,
    includeCustomExtensions = false
  ) {
    super();

    this.options = {
      trs,
      onlyVisible,
      truncateDrawRange,
      binary,
      maxTextureSize,
      forceIndices,
      includeCustomExtensions,
    };
  }

  exportFile(input) {
    this.parse(
      input,
      function (result) {
        if (result instanceof ArrayBuffer) {
          this.saveGlb(result, "scene.glb");
        }

        const output = JSON.stringify(result, null, 2);
        this.saveGltf(output, "scene.gltf");
      },
      function (error) {
        return { message: "An error happened during parsing", error };
      },
      this.options
    );
  }

  #save(blob, fileName) {
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link); // Firefox workaround

    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    link.remove();
  }

  saveGlb(buffer, fileName) {
    this.#save(
      new Blob([buffer], { type: "application/octet-stream" }),
      fileName
    );
  }

  saveGltf(text, fileName) {
    this.#save(new Blob([text], { type: "text/plain" }), fileName);
  }
}
