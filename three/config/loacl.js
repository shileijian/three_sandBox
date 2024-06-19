
function importJS(name) {
  document.writeln(`<script type="module" src="/es/src/slj3d/index.mjs"></script>`)
  document.writeln(`<link rel="stylesheet" href="/three/config/style.css">`)
  document.writeln(`<script type="text/javascript" src="/CDN/dat.gui.min.js"></script>`)
}
if (!window.indexPage) {
  importJS()
}
