import { useState } from "react";

export function useBackground() {
  const [background, setBackground] = useState();
  const [isTexture, setIsTexture] = useState(false);
  const reader = new FileReader();

  const tools = {
    changeBackground: (input) => {
      if (input.target.value.charAt(0) === "#") {
        setIsTexture(false);
        return setBackground(input.target.value);
      }

      const file = input.target.files[0];

      if (file.name.slice(-4) !== ".hdr") {
        return alert("Uploaded file must be a .hdr file type");
      }

      reader.onload = function (e) {
        setBackground(e.target.result);
        setIsTexture(true);
      };

      reader.readAsDataURL(file);
    },
    resetBackground: () => {
      setBackground("#333333");
      setIsTexture(false);
    },
    background,
    isTexture,
  };

  return { tools };
}
