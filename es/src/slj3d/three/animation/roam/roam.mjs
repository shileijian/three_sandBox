import r from "../../geometry/model/model.mjs";
import n from "../../geometry/line/line.mjs";
import { CatmullRomCurve3 as h, CurvePath as a, Vector3 as l } from "../../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
class g {
  constructor(e = {}, t) {
    var i, s, o;
    this.viewer = t, this._positions = (i = e.positions) != null ? i : [{ x: 0, y: 0, z: 0 }], this._speed = (s = e.speed) != null ? s : 1, this.model = new r({
      src: "/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
      position: this._positions[0]
    }), this.model.add(this.viewer), this.animationId = null, this._view = (o = e.view) != null ? o : 0, this.init();
  }
  init() {
    const e = new h(this._positions, !1, "catmullrom", 0.1);
    this.curvePath = new a(), this.curvePath.add(e), this.line = new n({
      positions: this.curvePath.getPoints(this._positions.length * 10),
      material: { color: "#ff0", linewidth: 10 }
    }), this.line.add(this.viewer), this.roamProgress = 0, this.modelProgressSpeed = 1 / (e.getLength() / this._speed);
  }
  start() {
    this.animationId || (this.setView(), this.model.loaded(() => {
      this.render();
    }));
  }
  pause() {
    this.removeAnimation(), this.model.show();
  }
  setView(e = this._view) {
    this.model.loaded(() => {
      this._view = e, this._view == 1 ? this.model.hide() : this.model.show();
    });
  }
  endListener(e) {
    this.endCallback = e;
  }
  changeListener(e) {
    this.changeCallback = e;
  }
  render() {
    const e = () => {
      if (this.changeCallback) {
        const s = this.roamProgress > 1 ? 1 : this.roamProgress;
        this.changeCallback(s);
      }
      if (this.roamProgress > 1) {
        this.endCallback && this.endCallback(), this.model.show(), this.roamProgress = 0, this.removeAnimation();
        return;
      }
      const t = this.curvePath.getPoint(this.roamProgress), i = this.curvePath.getTangent(this.roamProgress);
      this.model.gltf.scene.position.copy(t), this.model.gltf.scene.lookAt(t.clone().add(i)), this.setCameraPosition(i), this.roamProgress += this.modelProgressSpeed / 60, this.animationId = requestAnimationFrame(e);
    };
    e();
  }
  setCameraPosition(e) {
    if (this._view != 0) {
      if (this._view == 1) {
        this.viewer.camera.position.copy(this.model.gltf.scene.position).add({ x: 0, y: 1, z: 0 }), this.viewer.camera.lookAt(this.model.gltf.scene.position.clone().add(e).add({ x: 0, y: 1, z: 0 }));
        return;
      }
      if (this._view == 3) {
        var t = 10, i = new l().copy(e).multiplyScalar(-t), s = this.model.gltf.scene.position.clone().add(i).add({ x: 0, y: 10, z: 0 });
        this.viewer.camera.position.copy(s), this.viewer.camera.lookAt(this.model.gltf.scene.position);
      }
    }
  }
  removeAnimation() {
    cancelAnimationFrame(this.animationId), this.animationId = null;
  }
  remove() {
    this.model.remove(this.viewer), this.line.remove(this.viewer);
  }
}
export {
  g as default
};
