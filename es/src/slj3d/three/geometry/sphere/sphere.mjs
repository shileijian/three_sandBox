import { setId as _, getMaterial as l, setPosition as r, setRotation as a, setScale as d } from "../../utils/index.mjs";
import { SphereGeometry as c, Mesh as f } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import g from "../base.mjs";
class y extends g {
  constructor(t = {}) {
    var i, s, e, h, o, n, m;
    super(), this.id = _(t.id), this.type = "sphere", this._radius = (i = t.radius) != null ? i : 1, this._widthSegments = (s = t.widthSegments) != null ? s : 32, this._heightSegments = (e = t.heightSegments) != null ? e : 16, this._material = (h = t.material) != null ? h : { color: "#ffffff" }, this._position = (o = t.position) != null ? o : { x: 0, y: 0, z: 0 }, this._rotation = (n = t.rotation) != null ? n : { x: 0, y: 0, z: 0 }, this._scale = (m = t.scale) != null ? m : 1, this.init();
  }
  init() {
    const t = l(this._material), i = new c(this._radius, this._widthSegments, this._heightSegments);
    this.mesh = new f(i, t), r(this.mesh, this._position), a(this.mesh, this._rotation), d(this.mesh, this._scale);
  }
}
export {
  y as default
};
