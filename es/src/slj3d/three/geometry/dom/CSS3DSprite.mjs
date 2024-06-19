import { CSS3DSprite as e } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/renderers/CSS3DRenderer.mjs";
import { setId as o, setPosition as n, setScale as h } from "../../utils/index.mjs";
class d {
  constructor(t = {}) {
    var i, s;
    this.id = o(t.id), this._dom = t.dom, this._scale = (i = t.scale) != null ? i : 1, this._position = (s = t.position) != null ? s : { x: 0, y: 0, z: 0 }, this.init();
  }
  init() {
    this.mountDom = document.createElement("div"), this.mountDom.append(this._dom), this.mountDom.id = this.id, this.translateDom = document.createElement("div"), this.translateDom.style.transform = "translateY(-50%)", this.mountDom.append(this.translateDom), this.translateDom.append(this._dom), this.sprite = new e(this.mountDom), this.sprite.element.style.pointerEvents = "none", this.sprite.rotateX(Math.PI / 2), n(this.sprite, this._position), h(this.sprite, this._scale);
  }
  add(t) {
    t.scene.add(this.sprite);
  }
  show() {
    this.sprite.visible = !0;
  }
  hide() {
    this.sprite.visible = !1;
  }
  remove(t) {
    t.scene.remove(this.sprite);
  }
}
export {
  d as default
};
