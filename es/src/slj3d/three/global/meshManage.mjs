import { Raycaster as c } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
import { isString as h, getIdReg as n } from "../utils/index.mjs";
import o from "../geometry/base.mjs";
class l {
  constructor(i) {
    this.viewer = i, this.viewer.list = [], this.viewer.add = this.add.bind(this), this.viewer.show = this.show.bind(this), this.viewer.hide = this.hide.bind(this), this.viewer.remove = this.remove.bind(this), this.raycaster = new c(), this.initEvent("click", "click"), this.initEvent("rightClick", "contextmenu");
  }
  add(i) {
    i.add(this.viewer), this.viewer.list.push(i);
  }
  show(i) {
    i instanceof o && i.show(), h(i) && this.showByid(i);
  }
  showByid(i) {
    const t = n(i);
    this.viewer.list.forEach((e) => {
      t.test(e.id) && e.show();
    });
  }
  hide(i) {
    i instanceof o && i.hide(), h(i) && this.hideByid(i);
  }
  hideByid(i) {
    const t = n(i);
    this.viewer.list.forEach((e) => {
      t.test(e.id) && e.hide();
    });
  }
  remove(i) {
    i instanceof o && this.removeByid(i.id), h(i) && this.removeByid(i);
  }
  removeByid(i) {
    const t = n(i);
    this.viewer.list = this.viewer.list.filter((e) => t.test(e.id) ? (e.remove(this.viewer), !1) : !0);
  }
  initEvent(i, t) {
    this.viewer.container.addEventListener(t, this.event.bind(this, i), !1);
  }
  event(i, t) {
    const e = {};
    e.x = t.clientX / this.viewer.container.clientWidth * 2 - 1, e.y = -(t.clientY / this.viewer.container.clientHeight) * 2 + 1, this.raycaster.setFromCamera(e, this.viewer.camera);
    const r = this.raycaster.intersectObjects(this.viewer.scene.children, !0);
    if (console.log(r), r.length) {
      const s = r[0].object;
      (s == null ? void 0 : s.events) && s.events[i] && s.events[i]();
    }
  }
}
export {
  l as default
};
