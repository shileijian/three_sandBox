import { toDegree as o } from "../utils/index.mjs";
function e() {
  const t = this.camera.rotation;
  return {
    rotation: {
      x: o(t.x),
      y: o(t.y),
      z: o(t.z)
    },
    position: JSON.parse(JSON.stringify(this.camera.position))
  };
}
export {
  e as default
};
