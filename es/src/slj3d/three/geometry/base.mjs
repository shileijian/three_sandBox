class i {
  constructor() {
  }
  add(e) {
    e.scene.add(this.mesh);
  }
  show() {
    this.mesh.visible = !0;
  }
  hide() {
    this.mesh.visible = !1;
  }
  remove(e) {
    e.scene.remove(this.mesh);
  }
  addEvent(e, s) {
    this.mesh.events || (this.mesh.events = {}), this.mesh.events[e] = () => {
      s(this);
    };
  }
  click(e) {
    this.addEvent("click", e);
  }
  rightClick(e) {
    this.addEvent("rightClick", e);
  }
}
export {
  i as default
};
