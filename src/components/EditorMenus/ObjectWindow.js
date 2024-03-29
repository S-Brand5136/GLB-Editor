import Row from "./components/Row";
import Input from "../Input/Input";
import TranslationGroup from "./components/TranslationGroup";
import { useObjectStates } from "../../hooks/use-object-states.hook";
import { useThreeStore } from "../../hooks/use-three-store.hook";
import "./EditorMenu.scss";

const ObjectWindow = () => {
  const { selectedMesh } = useThreeStore();
  const { tools } = useObjectStates(selectedMesh);

  if (!selectedMesh) {
    return <h4>Select an Object to begin editing</h4>;
  }

  const updateTranslation = (vector, value, type) => {
    tools.setTranslation({
      ...tools.translation,
      [type]: { ...tools.translation[type], [vector]: value },
    });
    selectedMesh[type][vector] = value;
  };

  const updateVariable = (type, value) => {
    tools.setCheckboxStates({
      ...tools.checkboxStates,
      [type]: value,
    });
    selectedMesh[type] = value;
  };

  return (
    <div className="editor-menu">
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
            translation={tools.translation?.position}
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
            translation={tools.translation?.rotation}
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
            translation={tools.translation?.scale}
            onChange={updateTranslation}
            onMouseDown={updateTranslation}
          />
        }
      />
      <Row
        title={"Shadow"}
        body={
          <div>
            <Input
              type="checkbox"
              onChange={(e) => updateVariable("castShadow", e.target.checked)}
              isChecked={selectedMesh.castShadow}
            />
            <span>Cast</span>
            <Input
              type="checkbox"
              onChange={(e) =>
                updateVariable("receiveShadow", e.target.checked)
              }
              isChecked={selectedMesh.receiveShadow}
            />
            <span>Receive</span>
          </div>
        }
      />
      <Row
        title={"Visible"}
        body={
          <div>
            <Input
              type="checkbox"
              onChange={(e) => {
                updateVariable("visible", e.target.checked);
              }}
              isChecked={selectedMesh.visible}
            />
          </div>
        }
      />
      <Row
        title={"Frustum Culled"}
        body={
          <div>
            <Input
              type="checkbox"
              onChange={(e) =>
                updateVariable("frustumCulled", e.target.checked)
              }
              isChecked={selectedMesh.frustumCulled}
            />
          </div>
        }
      />
      <Row
        title={"Render Order"}
        body={
          <Input
            darkBackground
            removeSpin
            type="text"
            onChange={(e) => {
              const num = Number(e.target.value);
              tools.setRenderOrder(num);
              selectedMesh.renderOrder = num;
            }}
            value={tools.renderOrder}
          />
        }
      />
      <Row
        title={"User Data"}
        body={
          <textarea
            onChange={(e) => {
              tools.setUserData(e.target.value);

              if (JSON.parse(e.target.value)) {
                selectedMesh.userData = JSON.parse(e.target.value);
              }
            }}
            value={tools.userData}
          />
        }
      />
    </div>
  );
};

export default ObjectWindow;
