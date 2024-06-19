import { PathPoint as V } from "./PathPoint.mjs";
import { Vector3 as l, Matrix4 as _, QuadraticBezierCurve3 as z } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
const m = new l(), f = new l(), M = new l(), p = new _(), b = new z();
function P(y, t, a, r, s, e) {
  const o = m.subVectors(t, y), i = f.subVectors(a, t), n = o.length(), c = i.length();
  o.normalize(), i.normalize();
  const d = Math.min((s ? n / 2 : n) * 0.999999, r);
  e.v0.copy(t).sub(o.multiplyScalar(d)), e.v1.copy(t);
  const h = Math.min(c / 2 * 0.999999, r);
  return e.v2.copy(t).add(i.multiplyScalar(h)), e;
}
class w {
  constructor() {
    this.array = [], this.count = 0;
  }
  set(t, a = 0.1, r = 10, s = null, e = !1) {
    if (t = t.slice(0), t.length < 2) {
      console.warn("PathPointList: points length less than 2."), this.count = 0;
      return;
    }
    e && !t[0].equals(t[t.length - 1]) && t.push(new l().copy(t[0]));
    for (let o = 0, i = t.length; o < i; o++)
      if (o === 0)
        this._start(t[o], t[o + 1], s);
      else if (o === i - 1)
        if (e) {
          this._corner(t[o], t[1], a, r, s);
          const n = this.array[0].dist;
          this.array[0].copy(this.array[this.count - 1]), this.array[0].dist = n;
        } else
          this._end(t[o]);
      else
        this._corner(t[o], t[o + 1], a, r, s);
  }
  distance() {
    return this.count > 0 ? this.array[this.count - 1].dist : 0;
  }
  _getByIndex(t) {
    return this.array[t] || (this.array[t] = new V()), this.array[t];
  }
  _start(t, a, r) {
    this.count = 0;
    const s = this._getByIndex(this.count);
    if (s.pos.copy(t), s.dir.subVectors(a, t), r)
      s.up.copy(r);
    else {
      let e = Number.MAX_VALUE;
      const o = Math.abs(s.dir.x), i = Math.abs(s.dir.y), n = Math.abs(s.dir.z);
      o < e && (e = o, s.up.set(1, 0, 0)), i < e && (e = i, s.up.set(0, 1, 0)), n < e && s.up.set(0, 0, 1);
    }
    s.right.crossVectors(s.dir, s.up).normalize(), s.up.crossVectors(s.right, s.dir).normalize(), s.dist = 0, s.widthScale = 1, s.sharp = !1, s.dir.normalize(), this.count++;
  }
  _end(t) {
    const a = this.array[this.count - 1], r = this._getByIndex(this.count);
    r.pos.copy(t), r.dir.subVectors(t, a.pos);
    const s = r.dir.length();
    r.dir.normalize(), r.up.copy(a.up);
    const e = m.crossVectors(a.dir, r.dir);
    if (e.length() > Number.EPSILON) {
      e.normalize();
      const o = Math.acos(Math.min(Math.max(a.dir.dot(r.dir), -1), 1));
      r.up.applyMatrix4(p.makeRotationAxis(e, o));
    }
    r.right.crossVectors(r.dir, r.up).normalize(), r.dist = a.dist + s, r.widthScale = 1, r.sharp = !1, this.count++;
  }
  _corner(t, a, r, s, e) {
    if (r > 0 && s > 0) {
      const o = this.array[this.count - 1], n = P(o.pos, t, a, r, this.count - 1 === 0, b).getPoints(s);
      for (let c = 0; c < s; c++)
        this._sharpCorner(n[c], n[c + 1], e, c === 0 ? 1 : 0);
      n[s].equals(a) || this._sharpCorner(n[s], a, e, 2);
    } else
      this._sharpCorner(t, a, e, 0, !0);
  }
  _sharpCorner(t, a, r, s = 0, e = !1) {
    const o = this.array[this.count - 1], i = this._getByIndex(this.count), n = m.subVectors(t, o.pos), c = f.subVectors(a, t), d = n.length();
    if (n.normalize(), c.normalize(), i.pos.copy(t), s === 1 ? i.dir.copy(n) : s === 2 ? i.dir.copy(c) : (i.dir.addVectors(n, c), i.dir.normalize()), r)
      i.dir.dot(r) === 1 ? i.right.crossVectors(c, r).normalize() : i.right.crossVectors(i.dir, r).normalize(), i.up.crossVectors(i.right, i.dir).normalize();
    else {
      i.up.copy(o.up);
      const u = M.crossVectors(o.dir, i.dir);
      if (u.length() > Number.EPSILON) {
        u.normalize();
        const g = Math.acos(Math.min(Math.max(o.dir.dot(i.dir), -1), 1));
        i.up.applyMatrix4(p.makeRotationAxis(u, g));
      }
      i.right.crossVectors(i.dir, i.up).normalize();
    }
    i.dist = o.dist + d;
    const h = n.dot(c);
    i.widthScale = Math.min(1 / Math.sqrt((1 + h) / 2), 1.415) || 1, i.sharp = Math.abs(h - 1) > 0.05 && e, this.count++;
  }
}
export {
  w as PathPointList
};
