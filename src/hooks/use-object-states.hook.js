import { useEffect, useState } from "react";

export function useObjectStates(selectedMesh) {
  const [checkboxStates, setCheckboxStates] = useState({
    visible: true,
    frustumCulled: true,
    castShadow: false,
    receiveShadow: false,
  });
  const [renderOrder, setRenderOrder] = useState(0);
  const [userData, setUserData] = useState("{}");
  const [translation, setTranslation] = useState({
    position: selectedMesh?.position,
    rotation: selectedMesh?.rotation,
    scale: selectedMesh?.scale,
  });

  useEffect(() => {
    if (selectedMesh) {
      setRenderOrder(selectedMesh.renderOrder);
      setUserData(JSON.stringify(selectedMesh.userData));
      setCheckboxStates({
        visible: selectedMesh.visible,
        frustumCulled: selectedMesh.frustumCulled,
        castShadow: selectedMesh.castShadow,
        receiveShadow: selectedMesh.receiveShadow,
      });

      setTranslation({
        position: selectedMesh?.position,
        rotation: selectedMesh?.rotation,
        scale: selectedMesh?.scale,
      });
    }
  }, [selectedMesh]);

  return {
    tools: {
      checkboxStates,
      setCheckboxStates,
      renderOrder,
      setRenderOrder,
      userData,
      setUserData,
      translation,
      setTranslation,
    },
  };
}
