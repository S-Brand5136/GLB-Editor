import { Tree } from "../scripts/Tree";

export const createGraph = (scene) => {
  let treeGraph;

  scene.traverse((child) => {
    if (child.parent === null) {
      treeGraph = new Tree(child.id, child);
    } else {
      treeGraph.insert(child.parent.id, child.id, child);
    }
  });

  return treeGraph;
};
