import { Color as a, PMREMGenerator as s, CubeTextureLoader as p } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { RGBELoader as i } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/loaders/RGBELoader.mjs";
class g {
  constructor(e) {
    this.viewer = e, this.viewer.scene.background = new a(15790320);
  }
  set(e = {}) {
    this.rgbeLoader(e);
  }
  rgbeLoader(e) {
    var r = new s(this.viewer.renderer), n = new i();
    n.load(e.src, (o) => {
      var t = r.fromEquirectangular(o).texture;
      this.viewer.scene.background = t, o.dispose(), r.dispose();
    });
  }
  cubeTextureLoader() {
    this.viewer.scene.background = new p().setPath("./texture/cloundSky/").load([
      "px.png",
      "nx.png",
      "py.png",
      "ny.png",
      "pz.png",
      "nz.png"
    ]);
  }
}
export {
  g as default
};
