import create from "zustand";

const reader = new FileReader();

export const useThreeStore = create((set, get) => ({
  background: undefined,
  isTexture: false,
  mesh: null,
  selectedMesh: null,
  showGrid: true,
  infinteGrid: false,
  showGizmo: true,
  renderScene: false,
  enableLinear: false,
  enableFlat: false,
  enableLegacy: false,
  // preserver drawing buffer
  enbalePDB: false,
  // logarithmic depth buffer
  enableLDP: false,
  controlType: "translate",
  addMesh: (glb) => {
    set(() => ({
      mesh: glb,
      renderScene: true,
    }));
  },
  changeBackground: (input) => {
    if (input.target.value.charAt(0) === "#") {
      return set((state) => ({
        isTexture: false,
        background: input.target.value,
      }));
    }

    const file = input.target.files[0];

    if (file.name.slice(-4) !== ".hdr") {
      return alert("Uploaded file must be a .hdr file type");
    }

    reader.onload = function (e) {
      console.log("here");
      set({ isTexture: true, setBackground: e.target.result });
    };

    reader.readAsDataURL(file);
  },
  resetBackground: () => {
    set({ isTexture: false, setBackground: "#333333" });
  },
}));
