import { AxesHelper as c, PlaneGeometry as d, ShadowMaterial as l, Mesh as m, GridHelper as p, Scene as b } from "../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { OrbitControls as f } from "../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/controls/OrbitControls.mjs";
import w from "./global/meshManage.mjs";
import y from "./init/initScene.mjs";
import x from "./init/initCamera.mjs";
import M from "./init/initRenderer.mjs";
import S from "./init/skyBox.mjs";
import * as g from "./geometry/index.mjs";
import * as s from "./animation/index.mjs";
import * as a from "./tool/index.mjs";
import * as o from "./shaderLibrary/index.mjs";
class R {
  constructor(i, t = {}) {
    this.container = document.getElementById(i), this.init(t);
  }
  init(i) {
    y.call(this), x.call(this, i.camera), M.call(this);
    const t = new c(500);
    this.scene.add(t), this.initControls(), this.resizeEvent(), this.geometry = g, this.bindMeshManage(), this.bindTool(), this.bindAnimation(), this.bindShaderLibrary(), this.skyBox = new S(this);
    const r = new d(2e3, 2e3);
    r.rotateX(-Math.PI / 2);
    const h = new l({ color: 0, opacity: 0.2 }), n = new m(r, h);
    n.position.y = -0.2, n.receiveShadow = !0, this.scene.add(n);
    const e = new p(2e3, 100);
    e.position.y = 0, e.material.opacity = 0.25, e.material.transparent = !0, this.scene.add(e);
  }
  initScene() {
    this.scene = new b();
  }
  initControls() {
    this.controls = new f(this.camera, this.renderer.domElement);
  }
  resizeEvent() {
    window.addEventListener("resize", () => {
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.container.clientWidth, this.container.clientHeight), this.labelRenderer2D.setSize(this.container.clientWidth, this.container.clientHeight), this.labelRenderer3D.setSize(this.container.clientWidth, this.container.clientHeight), this.renderer.setPixelRatio(window.devicePixelRatio);
    });
  }
  bindMeshManage() {
    new w(this);
  }
  bindTool() {
    Object.keys(a).forEach((i) => {
      this[i] = a[i].bind(this);
    });
  }
  bindAnimation() {
    this.animation = {}, Object.keys(s).forEach((i) => {
      this.animation[i] = s[i].bind(this);
    });
  }
  bindShaderLibrary() {
    this.shaderLibrary = {}, Object.keys(o).forEach((i) => {
      this.shaderLibrary[i] = o[i].bind(this);
    });
  }
}
export {
  R as default
};
