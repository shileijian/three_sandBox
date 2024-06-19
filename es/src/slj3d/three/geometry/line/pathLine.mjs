import { Vector3 as r, Mesh as h } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { setId as n, getMaterial as a } from "../../utils/index.mjs";
import f from "../base.mjs";
import { PathPointList as m } from "../../threePath/PathPointList.mjs";
import { PathGeometry as l } from "../../threePath/PathGeometry.mjs";
class y extends f {
  constructor(t = {}) {
    var s, o, i;
    super(), this.id = n(t.id), this.type = "line", this._width = (s = t.width) != null ? s : 1, this._material = (o = t.material) != null ? o : { color: "#ffffff" }, this._positions = (i = t.positions) != null ? i : [], this.init();
  }
  init() {
    const t = a(this._material), s = [];
    this._positions.forEach((e) => {
      s.push(new r(e.x, e.y, e.z));
    });
    const o = new m();
    o.set(s, 0.5, 10, new r(0, 1, 0), !1);
    const i = new l();
    i.update(o, {
      width: this._width,
      progress: 1,
      arrow: !1
    }), this.Material = t, this.Geometry = i, this.mesh = new h(i, t);
  }
}
export {
  y as default
};
