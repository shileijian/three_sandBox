import { setId as n, getMaterial as r, setPosition as h, setRotation as a, setScale as m } from "../../utils/index.mjs";
import { Vector3 as c, CatmullRomCurve3 as l, TubeGeometry as f, Mesh as p } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import u from "../base.mjs";
class y extends u {
  constructor(t = {}) {
    var s, i;
    super(), this.id = n(t.id), this.type = "tube", this._material = (s = t.material) != null ? s : { color: "#ffffff" }, this._positions = (i = t.positions) != null ? i : [], this.init();
  }
  init() {
    const t = this._positions.map((e) => new c(e.x, e.y, e.z)), s = new l(t, !1, "chordal", 0.5), i = r(this._material), o = new f(s, 20, 1, 8, !1);
    this.mesh = new p(o, i), h(this.mesh, this._position), a(this.mesh, this._rotation), m(this.mesh, this._scale);
  }
}
export {
  y as default
};
