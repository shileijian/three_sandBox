import { Material as o } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { setId as a } from "../../utils/index.mjs";
import n from "../base.mjs";
import { Line2 as r } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/lines/Line2.mjs";
import { LineMaterial as h } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/lines/LineMaterial.mjs";
import { LineGeometry as l } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/lines/LineGeometry.mjs";
class y extends n {
  constructor(t = {}) {
    var i, e;
    super(), this.id = a(t.id), this.type = "line", this._material = (i = t.material) != null ? i : { color: "#ffffff", linewidth: 10 }, this._positions = (e = t.positions) != null ? e : [], this.init();
  }
  init() {
    let t;
    this._material instanceof o ? t = this._material : t = new h(this._material);
    const i = new l(), e = [];
    this._positions.forEach((s) => {
      e.push(s.x, s.y, s.z);
    }), i.setPositions(e), this.Material = t, this.Geometry = i;
  }
  add(t) {
    this.Material.resolution.set(t.container.clientWidth, t.container.clientHeight), console.log(this.Material), this.mesh = new r(this.Geometry, this.Material), this.mesh.computeLineDistances(), this.mesh.scale.set(1, 1, 1), t.scene.add(this.mesh);
  }
}
export {
  y as default
};
