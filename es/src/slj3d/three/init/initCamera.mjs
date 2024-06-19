import { toRadian as a } from "../utils/index.mjs";
function y(o) {
  var n, e, r, s, c, h, m, p;
  const t = (n = o.position) != null ? n : { x: 0, y: 0, z: 10 }, i = (e = o.rotation) != null ? e : { x: 0, y: 0, z: 0 };
  this.camera = new THREE.PerspectiveCamera(
    75,
    this.container.clientWidth / this.container.clientHeight,
    0.1,
    1e4
  ), this.camera.position.x = (r = t.x) != null ? r : 0, this.camera.position.y = (s = t.y) != null ? s : 0, this.camera.position.z = (c = t.z) != null ? c : 10, this.camera.rotation.x = a((h = i.x) != null ? h : 0), this.camera.rotation.y = a((m = i.y) != null ? m : 0), this.camera.rotation.z = a((p = i.z) != null ? p : 0), this.scene.add(this.camera);
}
export {
  y as default
};
