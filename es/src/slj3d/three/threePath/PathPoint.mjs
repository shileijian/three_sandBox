import { Vector3 as h } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
class e {
  constructor() {
    this.pos = new h(), this.dir = new h(), this.right = new h(), this.up = new h(), this.dist = 0, this.widthScale = 1, this.sharp = !1;
  }
  lerpPathPoints(t, i, s) {
    this.pos.lerpVectors(t.pos, i.pos, s), this.dir.lerpVectors(t.dir, i.dir, s), this.up.lerpVectors(t.up, i.up, s), this.right.lerpVectors(t.right, i.right, s), this.dist = (i.dist - t.dist) * s + t.dist, this.widthScale = (i.widthScale - t.widthScale) * s + t.widthScale;
  }
  copy(t) {
    this.pos.copy(t.pos), this.dir.copy(t.dir), this.up.copy(t.up), this.right.copy(t.right), this.dist = t.dist, this.widthScale = t.widthScale;
  }
}
export {
  e as PathPoint
};
