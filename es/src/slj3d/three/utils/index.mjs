import { Material as s, MeshBasicMaterial as c, DoubleSide as i } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
function l() {
  function t() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
}
const b = (t) => {
  let e = t != null ? t : "null*";
  return e.slice(-1) === "*" && (e = e.slice(0, e.length - 1) + `&&${l()}`), e;
}, f = (t) => {
  let e = t;
  return e.slice(-1) === "*" && (e = e.slice(0, e.length - 1) + ".*"), new RegExp("^" + e + "$");
}, r = (t = 0) => t * (Math.PI / 180), a = (t = 0) => t * (180 / Math.PI), S = (t, e) => {
  let n;
  return t instanceof s ? n = t : n = new c({ side: i, ...e, ...t }), n;
}, j = (t, e) => {
  o(e) && t.position.set(e.x, e.y, e.z);
}, M = (t, e) => {
  o(e) && t.rotation.set(r(e.x), r(e.y), r(e.z));
}, p = (t, e) => {
  o(e) ? t.scale.set(e.x, e.y, e.z) : u(e) && t.scale.set(e, e, e);
}, x = (t) => Object.prototype.toString.call(t) === "[object String]", o = (t) => Object.prototype.toString.call(t) === "[object Object]", u = (t) => Object.prototype.toString.call(t) === "[object Number]";
export {
  f as getIdReg,
  S as getMaterial,
  u as isNumber,
  o as isObject,
  x as isString,
  b as setId,
  j as setPosition,
  M as setRotation,
  p as setScale,
  a as toDegree,
  r as toRadian
};
