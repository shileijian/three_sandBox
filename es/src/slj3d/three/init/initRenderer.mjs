import { WebGLRenderer as r } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { CSS3DRenderer as i } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/renderers/CSS3DRenderer.mjs";
import { CSS2DRenderer as l } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/examples/jsm/renderers/CSS2DRenderer.mjs";
function s(t = this.container) {
  const e = new i();
  return this.labelRenderer3D = e, e.setSize(t.clientWidth, t.clientHeight), e.domElement.style.position = "absolute", e.domElement.style.top = "0px", e.domElement.style.left = "0px", e.domElement.style.pointerEvents = "none", t.appendChild(e.domElement), e;
}
function o(t = this.container) {
  var e = new l();
  return this.labelRenderer2D = e, e.setSize(t.offsetWidth, t.offsetHeight), e.domElement.style.position = "absolute", e.domElement.style.top = "0px", e.domElement.style.left = "0px", e.domElement.style.pointerEvents = "none", t.appendChild(e.domElement), e;
}
function d() {
  const t = s.call(this), e = o.call(this);
  this.frameNumber = {
    value: 0
  };
  const n = () => {
    this.frameNumber.value += 1, this.renderer.render(this.scene, this.camera), t.render(this.scene, this.camera), e.render(this.scene, this.camera), requestAnimationFrame(n);
  };
  n();
}
function c() {
  const t = new r();
  this.renderer = t, t.setSize(this.container.clientWidth, this.container.clientHeight), this.container.appendChild(t.domElement), d.call(this);
}
export {
  c as default
};
