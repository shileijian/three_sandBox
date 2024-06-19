import { PathPoint as P } from "./PathPoint.mjs";
import { BufferGeometry as tt, BufferAttribute as b, DynamicDrawUsage as N, Uint32BufferAttribute as K, Uint16BufferAttribute as L, StaticDrawUsage as W, Vector3 as U } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
class nt extends tt {
  constructor(e = 3e3, o = !1) {
    super(), isNaN(e) ? this._initByData(e.pathPointList, e.options, e.usage, o) : this._initByMaxVertex(e, o);
  }
  _initByMaxVertex(e, o) {
    this.setAttribute("position", new b(new Float32Array(e * 3), 3).setUsage(N)), this.setAttribute("normal", new b(new Float32Array(e * 3), 3).setUsage(N)), this.setAttribute("uv", new b(new Float32Array(e * 2), 2).setUsage(N)), o && this.setAttribute("uv2", new b(new Float32Array(e * 2), 2).setUsage(N)), this.drawRange.start = 0, this.drawRange.count = 0, this.setIndex(
      e > 65536 ? new K(e * 3, 1) : new L(e * 3, 1)
    );
  }
  _initByData(e, o = {}, s, i) {
    const l = Q(e, o, i);
    l && l.count !== 0 ? (this.setAttribute("position", new b(new Float32Array(l.position), 3).setUsage(s || W)), this.setAttribute("normal", new b(new Float32Array(l.normal), 3).setUsage(s || W)), this.setAttribute("uv", new b(new Float32Array(l.uv), 2).setUsage(s || W)), i && this.setAttribute("uv2", new b(new Float32Array(l.uv2), 2).setUsage(s || W)), this.setIndex(
      l.position.length / 3 > 65536 ? new K(l.indices, 1) : new L(l.indices, 1)
    )) : this._initByMaxVertex(2, i);
  }
  update(e, o = {}) {
    const s = !!this.getAttribute("uv2"), i = Q(e, o, s);
    i ? (this._updateAttributes(i.position, i.normal, i.uv, s ? i.uv2 : null, i.indices), this.drawRange.count = i.count) : this.drawRange.count = 0;
  }
  _resizeAttribute(e, o) {
    let s = this.getAttribute(e);
    for (; s.array.length < o; ) {
      const i = s.array.length, l = new b(
        new Float32Array(i * 2),
        s.itemSize,
        s.normalized
      );
      l.name = s.name, l.usage = s.usage, this.setAttribute(e, l), s = l;
    }
  }
  _resizeIndex(e) {
    let o = this.getIndex();
    for (; o.array.length < e; ) {
      const s = o.array.length, i = new b(
        s * 2 > 65535 ? new Uint32Array(s * 2) : new Uint16Array(s * 2),
        1
      );
      i.name = o.name, i.usage = o.usage, this.setIndex(i), o = i;
    }
  }
  _updateAttributes(e, o, s, i, l) {
    this._resizeAttribute("position", e.length);
    const c = this.getAttribute("position");
    c.array.set(e, 0), c.updateRange.count = e.length, c.needsUpdate = !0, this._resizeAttribute("normal", o.length);
    const g = this.getAttribute("normal");
    g.array.set(o, 0), g.updateRange.count = o.length, g.needsUpdate = !0, this._resizeAttribute("uv", s.length);
    const m = this.getAttribute("uv");
    if (m.array.set(s, 0), m.updateRange.count = s.length, m.needsUpdate = !0, i) {
      this._resizeAttribute("uv2", i.length);
      const _ = this.getAttribute("uv2");
      _.array.set(i, 0), _.updateRange.count = i.length, _.needsUpdate = !0;
    }
    this._resizeIndex(l.length);
    const f = this.getIndex();
    f.set(l, 0), f.updateRange.count = l.length, f.needsUpdate = !0;
  }
}
function Q(x, e, o = !1) {
  const s = e.width || 0.1, i = e.progress !== void 0 ? e.progress : 1, l = e.arrow !== void 0 ? e.arrow : !0, c = e.side !== void 0 ? e.side : "both", g = s / 2, m = c !== "both" ? s / 2 : s, f = x.distance(), _ = i * f;
  if (f == 0)
    return null;
  const I = g / m, O = g / f;
  let B = 0;
  const p = [], M = [], C = [], G = [], F = [];
  let t = 0;
  const n = new U(), r = new U(), k = new U(), E = new U(), w = new U(), A = new U();
  function H(a) {
    const z = p.length === 0, h = a.sharp && !z, d = a.dist / m, y = a.dist / f, D = a.dir, u = a.up, J = a.right;
    if (c !== "left" ? n.copy(J).multiplyScalar(g * a.widthScale) : n.set(0, 0, 0), c !== "right" ? r.copy(J).multiplyScalar(-g * a.widthScale) : r.set(0, 0, 0), n.add(a.pos), r.add(a.pos), h) {
      k.fromArray(p, p.length - 6).sub(r), E.fromArray(p, p.length - 3).sub(n);
      const V = k.length(), X = E.length(), j = V - X;
      let q, S;
      j > 0 ? (q = k, S = r) : (q = E, S = n), w.copy(q).setLength(Math.abs(j)).add(S);
      let Y = A.copy(S).sub(w).normalize().dot(D), Z = A.copy(S).sub(w).length(), $ = Y * Z * 2;
      A.copy(D).setLength($).add(w), j > 0 ? (p.push(
        w.x,
        w.y,
        w.z,
        n.x,
        n.y,
        n.z,
        r.x,
        r.y,
        r.z,
        n.x,
        n.y,
        n.z,
        A.x,
        A.y,
        A.z,
        n.x,
        n.y,
        n.z
      ), t += 6, F.push(
        t - 6,
        t - 8,
        t - 7,
        t - 6,
        t - 7,
        t - 5,
        t - 4,
        t - 6,
        t - 5,
        t - 2,
        t - 4,
        t - 1
      ), B += 12) : (p.push(
        r.x,
        r.y,
        r.z,
        w.x,
        w.y,
        w.z,
        r.x,
        r.y,
        r.z,
        n.x,
        n.y,
        n.z,
        r.x,
        r.y,
        r.z,
        A.x,
        A.y,
        A.z
      ), t += 6, F.push(
        t - 6,
        t - 8,
        t - 7,
        t - 6,
        t - 7,
        t - 5,
        t - 6,
        t - 5,
        t - 3,
        t - 2,
        t - 3,
        t - 1
      ), B += 12), M.push(
        u.x,
        u.y,
        u.z,
        u.x,
        u.y,
        u.z,
        u.x,
        u.y,
        u.z,
        u.x,
        u.y,
        u.z,
        u.x,
        u.y,
        u.z,
        u.x,
        u.y,
        u.z
      ), C.push(
        d - I,
        0,
        d - I,
        1,
        d,
        0,
        d,
        1,
        d + I,
        0,
        d + I,
        1
      ), o && G.push(
        y - O,
        0,
        y - O,
        1,
        y,
        0,
        y,
        1,
        y + O,
        0,
        y + O,
        1
      );
    } else
      p.push(
        r.x,
        r.y,
        r.z,
        n.x,
        n.y,
        n.z
      ), M.push(
        u.x,
        u.y,
        u.z,
        u.x,
        u.y,
        u.z
      ), C.push(
        d,
        0,
        d,
        1
      ), o && G.push(
        y,
        0,
        y,
        1
      ), t += 2, z || (F.push(
        t - 2,
        t - 4,
        t - 3,
        t - 2,
        t - 3,
        t - 1
      ), B += 6);
  }
  const R = new U();
  function T(a) {
    const z = a.dir, h = a.up, d = a.right, y = a.dist / m, D = a.dist / f;
    c !== "left" ? n.copy(d).multiplyScalar(g * 2) : n.set(0, 0, 0), c !== "right" ? r.copy(d).multiplyScalar(-g * 2) : r.set(0, 0, 0), R.copy(z).setLength(g * 3), n.add(a.pos), r.add(a.pos), R.add(a.pos), p.push(
      r.x,
      r.y,
      r.z,
      n.x,
      n.y,
      n.z,
      R.x,
      R.y,
      R.z
    ), M.push(
      h.x,
      h.y,
      h.z,
      h.x,
      h.y,
      h.z,
      h.x,
      h.y,
      h.z
    ), C.push(
      y,
      c !== "both" ? c !== "right" ? -2 : 0 : -0.5,
      y,
      c !== "both" ? c !== "left" ? 2 : 0 : 1.5,
      y + 1.5,
      c !== "both" ? 0 : 0.5
    ), o && G.push(
      D,
      c !== "both" ? c !== "right" ? -2 : 0 : -0.5,
      D,
      c !== "both" ? c !== "left" ? 2 : 0 : 1.5,
      D + 1.5 * s / f,
      c !== "both" ? 0 : 0.5
    ), t += 3, F.push(
      t - 1,
      t - 3,
      t - 2
    ), B += 3;
  }
  let v;
  if (_ > 0)
    for (let a = 0; a < x.count; a++) {
      const z = x.array[a];
      if (z.dist > _) {
        const h = x.array[a - 1];
        v = new P();
        const d = (_ - h.dist) / (z.dist - h.dist);
        v.lerpPathPoints(h, z, d), H(v);
        break;
      } else
        H(z);
    }
  else
    v = x.array[0];
  return l && (v = v || x.array[x.count - 1], T(v)), {
    position: p,
    normal: M,
    uv: C,
    uv2: G,
    indices: F,
    count: B
  };
}
export {
  nt as PathGeometry
};
