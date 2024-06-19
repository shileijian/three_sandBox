import { setId as _, getMaterial as c, setPosition as d, setRotation as f, setScale as a } from "../../utils/index.mjs";
import { BoxGeometry as m, Mesh as r } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import x from "../base.mjs";
class b extends x {
  constructor(t = {}) {
    var i, s, h, o, e, n, l;
    super(), this.id = _(t.id), this.type = "box", this._width = (i = t.width) != null ? i : 1, this._height = (s = t.height) != null ? s : 1, this._depth = (h = t.depth) != null ? h : 1, this._material = (o = t.material) != null ? o : { color: "#ffffff" }, this._position = (e = t.position) != null ? e : { x: 0, y: 0, z: 0 }, this._rotation = (n = t.rotation) != null ? n : { x: 0, y: 0, z: 0 }, this._scale = (l = t.scale) != null ? l : 1, this.init();
  }
  init() {
    const t = c(this._material), i = new m(this._width, this._height, this._depth);
    console.log(i.attributes), this.mesh = new r(i, t), d(this.mesh, this._position), f(this.mesh, this._rotation), a(this.mesh, this._scale);
  }
}
export {
  b as default
};
