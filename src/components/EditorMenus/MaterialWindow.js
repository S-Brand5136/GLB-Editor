import { useEffect } from "react";
import { useRef } from "react";
import { useThreeStore } from "../../hooks/use-three-store.hook";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Input from "../Input/Input";
import Row from "./components/Row";

const MaterialWindow = () => {
  const { selectedMesh } = useThreeStore();
  const mapRef = useRef();
  const normalRef = useRef();
  const metalnessRef = useRef();
  const roughnessRef = useRef();
  const aoRef = useRef();
  const reader = new FileReader();
  const loader = new TextureLoader();
  const image = new Image();

  const drawToCanvas = (ctx, image) => {
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
  };

  useEffect(() => {
    if (selectedMesh && selectedMesh?.material) {
      try {
        drawToCanvas(
          mapRef.current.getContext("2d"),
          selectedMesh.material.map.source.data
        );
        drawToCanvas(
          normalRef.current.getContext("2d"),
          selectedMesh.material.normalMap.source.data
        );
        drawToCanvas(
          metalnessRef.current.getContext("2d"),
          selectedMesh.material.metalnessMap.source.data
        );
        drawToCanvas(
          roughnessRef.current.getContext("2d"),
          selectedMesh.material.roughnessMap.source.data
        );
        drawToCanvas(
          aoRef.current.getContext("2d"),
          selectedMesh.material.aoMap.source.data
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [selectedMesh]);

  if (!selectedMesh || !selectedMesh?.material) {
    return <h4>No available material</h4>;
  }

  const updateTextureMap = (inputEvent, canvasRef, materialMap) => {
    try {
      const file = inputEvent.target.files[0];
      reader.readAsDataURL(file);

      reader.addEventListener(
        "load",
        () => {
          loader.load(reader.result, (texture) => {
            image.onload = function () {
              return drawToCanvas(canvasRef.current.getContext("2d"), image);
            };

            image.src = reader.result;

            materialMap.copy(texture);
            materialMap.needsUpdate = true;
          });
        },
        { once: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editor-menu material">
      <Row title={"Type"} body={<h4>{selectedMesh.material.type}</h4>} />
      <Row
        title={"UUID"}
        body={
          <Input darkBackground disabled value={selectedMesh.material.uuid} />
        }
      />
      <Row
        title={"Name"}
        body={<h4>{selectedMesh.material.name || "undefined"}</h4>}
      />
      <Row
        title={"Color"}
        body={<h4>{selectedMesh.material.color.getHexString()}</h4>}
      />
      <Row
        title={"Emissive"}
        body={<h4>{selectedMesh.material.emissive.getHexString()}</h4>}
      />
      <Row
        title={"Emissive Intensity"}
        body={<h4>{selectedMesh.material.metalness}</h4>}
      />
      <Row
        title={"Metalness"}
        body={<h4>{selectedMesh.material.metalness}</h4>}
      />
      <Row
        title={"Roughness"}
        body={<h4>{selectedMesh.material.roughness}</h4>}
      />
      <h4>Maps</h4>
      <Row
        title={"Map"}
        body={
          <>
            <Input
              backgroundInput
              invisible
              type={"file"}
              onChange={(e) => {
                updateTextureMap(e, mapRef, selectedMesh.material.map);
              }}
              id={"map-upload"}
            />
            <label htmlFor="map-upload">
              <canvas ref={mapRef} />
            </label>
          </>
        }
      />
      <Row
        title={"Normal Map"}
        body={
          <>
            <Input
              backgroundInput
              invisible
              type={"file"}
              onChange={(e) => {
                updateTextureMap(e, normalRef, selectedMesh.material.normalMap);
              }}
              id={"normal-map-upload"}
            />
            <label htmlFor="normal-map-upload">
              <canvas ref={normalRef} />
            </label>
          </>
        }
      />
      <Row
        title={"AO Map"}
        body={
          <>
            <Input
              backgroundInput
              invisible
              type={"file"}
              onChange={(e) => {
                updateTextureMap(e, aoRef, selectedMesh.material.aoMap);
              }}
              id={"ao-map-upload"}
            />
            <label htmlFor="ao-map-upload">
              <canvas ref={aoRef} />
            </label>
          </>
        }
      />
      <Row
        title={"Roughness Map"}
        body={
          <>
            <Input
              backgroundInput
              invisible
              type={"file"}
              onChange={(e) => {
                updateTextureMap(
                  e,
                  roughnessRef,
                  selectedMesh.material.roughnessMap
                );
              }}
              id={"roughness-map-upload"}
            />
            <label htmlFor="roughness-map-upload">
              <canvas ref={roughnessRef} />
            </label>
          </>
        }
      />
      <Row
        title={"Metalness Map"}
        body={
          <>
            <Input
              backgroundInput
              invisible
              type={"file"}
              onChange={(e) => {
                updateTextureMap(
                  e,
                  metalnessRef,
                  selectedMesh.material.metalnessMap
                );
              }}
              id={"metalness-map-upload"}
            />
            <label htmlFor="metalness-map-upload">
              <canvas ref={metalnessRef} />
            </label>
          </>
        }
      />
    </div>
  );
};

export default MaterialWindow;
