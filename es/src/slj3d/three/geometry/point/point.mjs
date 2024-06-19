import { Material as s, PointsMaterial as o, BufferGeometry as n, Float32BufferAttribute as r, Points as a } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { setId as f } from "../../utils/index.mjs";
import l from "../base.mjs";
class _ extends l {
  constructor(t = {}) {
    var i, e;
    super(), this.id = f(t.id), this.type = "point", this._material = (i = t.material) != null ? i : { color: "#ffffff", size: 10 }, this._position = (e = t.position) != null ? e : { x: 0, y: 0, z: 0 }, this.init();
  }
  init() {
    let t;
    this._material instanceof s ? t = this._material : t = new o(this._material);
    const i = new n(), e = [this._position.x, this._position.y, this._position.z];
    i.setAttribute("position", new r(e, 3)), this.mesh = new a(i, t);
  }
}
export {
  _ as default
};
