import { CSS2DObject as s } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/renderers/CSS2DRenderer.mjs";
import { setId as o, setPosition as l } from "../../utils/index.mjs";
class m {
  constructor(t = {}) {
    var e, i;
    this.id = o(t.id), this._dom = t.dom, this._scale = (e = t.scale) != null ? e : 1, this._position = (i = t.position) != null ? i : { x: 0, y: 0, z: 0 }, this.init();
  }
  init() {
    this.mountDom = document.createElement("div"), this.mountDom.id = this.id, this.translateDom = document.createElement("div"), this.translateDom.style.transform = "translateY(-50%)", this.mountDom.append(this.translateDom), this.translateDom.append(this._dom), this.label = new s(this.mountDom), this.label.element.style.pointerEvents = "none", l(this.label, this._position);
  }
  add(t) {
    t.scene.add(this.label);
  }
  show() {
    this.label.visible = !0;
  }
  hide() {
    this.label.visible = !1;
  }
  remove(t) {
    t.scene.remove(this.label);
  }
}
export {
  m as default
};
