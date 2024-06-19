import n from "../dom/CSS2DObject.mjs";
function d(i = {}) {
  var o, e;
  const t = document.createElement("img");
  return t.src = i.src, t.width = (o = i.width) != null ? o : 10, t.height = (e = i.height) != null ? e : 10, t.style.pointerEvents = "auto", new n({
    id: i.id,
    position: i.position,
    dom: t
  });
}
export {
  d as default
};
