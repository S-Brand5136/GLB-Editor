import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

export class Exporter extends GLTFExporter {
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
    const save = (blob, fileName) => {
      const link = document.createElement("a");
      link.style.display = "none";
      document.body.appendChild(link); // Firefox workaround

      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();

      link.remove();
    };

    const saveGlb = (buffer, fileName) => {
      save(new Blob([buffer], { type: "application/octet-stream" }), fileName);
    };

    const saveGltf = (text, fileName) => {
      save(new Blob([text], { type: "text/plain" }), fileName);
    };

    this.parse(
      input,
      function (result) {
        if (result instanceof ArrayBuffer) {
          saveGlb(result, "scene.glb");
        }

        const output = JSON.stringify(result, null, 2);
        saveGltf(output, "scene.gltf");
      },
      function (error) {
        console.log("An error happened");
      },
      this.options
    );
  }
}
