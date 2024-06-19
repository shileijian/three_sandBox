import e from "./box/box.mjs";
import n from "./tube/tube.mjs";
import o from "./sphere/sphere.mjs";
import r from "./point/point.mjs";
import c from "./line/line.mjs";
import i from "./line/pathLine.mjs";
import m from "./model/model.mjs";
import u from "./BufferGeometry/polygon.mjs";
import f from "./dom/CSS3DSprite.mjs";
import p from "./dom/CSS2DObject.mjs";
import { default as q } from "./point/image.mjs";
const h = function(t) {
  return new e(t);
}, y = function(t) {
  return new n(t);
}, L = function(t) {
  return new o(t);
}, S = function(t) {
  return new r(t);
}, $ = function(t) {
  return new c(t);
}, j = function(t) {
  return new i(t);
}, B = function(t) {
  return new u(t);
}, I = function(t) {
  return new m(t);
}, M = function(t) {
  return new f(t);
}, O = function(t) {
  return new p(t);
};
export {
  h as createBox,
  O as createDom,
  M as createDom3d,
  q as createImage,
  $ as createLine,
  I as createModel,
  j as createPathLine,
  S as createPoint,
  B as createPolygon,
  L as createSphere,
  y as createTube
};
