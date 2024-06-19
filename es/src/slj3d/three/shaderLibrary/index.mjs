import r from "./shader1.mjs";
import t from "./flowLine.mjs";
import n from "./flowCommon.mjs";
const f = function(o) {
  return r.call(this, o);
}, l = function(o) {
  return t.call(this, o);
}, m = function(o) {
  return n.call(this, o);
};
export {
  f as createShader1,
  m as flowCommon,
  l as flowLine
};
