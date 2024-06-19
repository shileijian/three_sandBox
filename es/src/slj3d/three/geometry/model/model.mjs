import { GLTFLoader as l } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/loaders/GLTFLoader.mjs";
import { setId as o, setPosition as h, setRotation as n, setScale as d } from "../../utils/index.mjs";
import c from "../base.mjs";
class v extends c {
  constructor(s = {}) {
    var t, e, i;
    super(), this.id = o(s.id), this.type = "model", this._src = s.src, this._position = (t = s.position) != null ? t : { x: 0, y: 0, z: 0 }, this._rotation = (e = s.rotation) != null ? e : { x: 0, y: 0, z: 0 }, this._scale = (i = s.scale) != null ? i : 1, this.init(), this.loadCallbacks = [];
  }
  init() {
    new l().load(this._src, (t) => {
      this.gltf = t, h(this.gltf.scene, this._position), n(this.gltf.scene, this._rotation), d(this.gltf.scene, this._scale), this.loadCallbacks.forEach((e) => {
        e();
      });
    });
  }
  loaded(s) {
    this.gltf ? s() : this.loadCallbacks.push(s);
  }
  add(s) {
    this.loaded(() => {
      s.scene.add(this.gltf.scene);
    });
  }
  show() {
    this.gltf.scene.visible = !0;
  }
  hide() {
    this.gltf.scene.visible = !1;
  }
  remove(s) {
    s.scene.remove(this.gltf.scene);
  }
  addEvent(s, t) {
    this.loaded(() => {
      this.gltf.scene.children[0].events || (this.gltf.scene.children[0].events = {}), this.gltf.scene.children[0].events[s] = () => {
        t(this);
      };
    });
  }
}
export {
  v as default
};
