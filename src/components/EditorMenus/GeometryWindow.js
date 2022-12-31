import { useThreeStore } from "../../hooks/use-three-store.hook";
import Input from "../Input/Input";
import Row from "./components/Row";
import "./GeometryWindow.scss";

const GeometryWindow = () => {
  const { selectedMesh } = useThreeStore();

  if (!selectedMesh) {
    return <></>;
  }

  if (!selectedMesh?.geometry) {
    return (
      <div className="geometry-menu">
        <h4>No available geometry</h4>
      </div>
    );
  }

  const copyAsJson = () => {
    const jsonGeometry = JSON.stringify(selectedMesh.geometry.toJSON());

    navigator.clipboard.writeText(jsonGeometry).then(
      function () {
        alert(" Copying to clipboard was successful!");
      },
      function (err) {
        alert("Could not copy text" + err);
      }
    );
  };

  return (
    <div className="geometry-menu">
      <Row title={"Type"} body={<h4>{selectedMesh.geometry.type}</h4>} />
      <Row
        title={"UUID"}
        body={
          <Input darkBackground disabled value={selectedMesh.geometry.uuid} />
        }
      />
      <Row
        title={"Name"}
        body={<h4>{selectedMesh.geometry.name || "undefined"}</h4>}
      />
      <h3>Methods</h3>
      <button onClick={() => selectedMesh.geometry.computeBoundingBox()}>
        Compute Bounding Box
      </button>
      <button onClick={() => selectedMesh.geometry.computeBoundingSphere()}>
        Compute Bounding Sphere
      </button>
      <button onClick={() => selectedMesh.geometry.center()}>Center</button>
      <button onClick={copyAsJson}>Copy Geometry as JSON</button>
    </div>
  );
};

export default GeometryWindow;
