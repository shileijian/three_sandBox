import { setId as a } from "../../utils/index.mjs";
import { Material as h, MeshBasicMaterial as f, DoubleSide as p, BufferGeometry as c, Float32BufferAttribute as l, Mesh as m } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import u from "../base.mjs";
class g extends u {
  constructor(t = {}) {
    var s, i;
    super(), this.id = a(t.id), this.type = "polygon", this._material = (s = t.material) != null ? s : { color: "#ffffff" }, this._positions = (i = t.positions) != null ? i : [], this.init();
  }
  init() {
    if (this._positions.length < 3)
      return;
    let t;
    this._material instanceof h ? t = this._material : t = new f({ ...this._material, side: p });
    const s = new c(), i = [];
    for (let e = 0; e <= this._positions.length - 3; e++) {
      const o = this._positions[0], n = this._positions[e + 1], r = this._positions[e + 2];
      i.push(o.x, o.y, o.z, n.x, n.y, n.z, r.x, r.y, r.z);
    }
    s.setAttribute("position", new l(i, 3)), console.log(new l(i, 3)), this.mesh = new m(s, t);
  }
}
export {
  g as default
};
