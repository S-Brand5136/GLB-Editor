import { useContext } from "react";
import { threeContext } from "../../providers/ThreeProvider";
import Row from "./components/Row";
import Input from "../Input/Input";
import "./ObjectWindow.scss";
import TranslationGroup from "./components/TranslationGroup";

const ObjectWindow = () => {
  const { selectedMesh } = useContext(threeContext);

  if (!selectedMesh) {
    return <></>;
  }

  const updateTranslation = (vector, value, type) => {
    selectedMesh[type][vector] = value;
  };

  return (
    <div className="object-window">
      <Row title={"Type"} body={<h4>{selectedMesh.type}</h4>} />
      <Row
        title={"UUID"}
        body={<Input darkBackground disabled value={selectedMesh.uuid} />}
      />
      <Row title={"Name"} body={<h4>{selectedMesh.name}</h4>} />
      <Row
        title={"Position"}
        body={
          <TranslationGroup
            type={"position"}
            translation={selectedMesh.position}
            onChange={updateTranslation}
            onMouseDown={updateTranslation}
          />
        }
      />
      <Row
        title={"Rotation"}
        body={
          <TranslationGroup
            type={"rotation"}
            translation={selectedMesh.rotation}
            onChange={updateTranslation}
            onMouseDown={updateTranslation}
          />
        }
      />
      <Row
        title={"Scale"}
        body={
          <TranslationGroup
            type={"scale"}
            translation={selectedMesh.scale}
            onChange={updateTranslation}
            onMouseDown={updateTranslation}
          />
        }
      />
      <Row
        title={"Shadow"}
        body={
          <div>
            <Input type="checkbox" isChecked={selectedMesh.castShadow} />
            <span>Cast</span>
            <Input type="checkbox" isChecked={selectedMesh.receiveShadow} />
            <span>Receive</span>
          </div>
        }
      />
      <Row
        title={"Visible"}
        body={
          <div>
            <Input type="checkbox" isChecked={selectedMesh.visible} />
          </div>
        }
      />
      <Row
        title={"Frustum Culled"}
        body={
          <div>
            <Input type="checkbox" isChecked={selectedMesh.frustumCulled} />
          </div>
        }
      />
      <Row
        title={"Render Order"}
        body={
          <Input
            darkBackground
            removeSpin
            type="number"
            value={selectedMesh.renderOrder}
          />
        }
      />
      <Row
        title={"User Data"}
        body={<textarea value={JSON.stringify(selectedMesh.userData)} />}
      />
    </div>
  );
};

export default ObjectWindow;
