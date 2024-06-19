import { TextureLoader as i, NearestFilter as v, RepeatWrapping as s, ShaderMaterial as u, DoubleSide as n, Vector2 as m } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
const d = `
  // \u9876\u70B9\u7740\u8272\u5668\u4EE3\u7801
  varying vec2 vUv;

  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, x = `
  // \u7247\u5143\u7740\u8272\u5668\u4EE3\u7801
  uniform sampler2D usertexture;
  uniform float time;
  uniform vec2 speed;
  uniform vec2 repeat;
  uniform vec2 offset;
  varying vec2 vUv;

  void main() {
      // \u5BF9\u7EB9\u7406\u5750\u6807\u8FDB\u884C\u504F\u79FB
      vec2 uv = vUv * repeat;
      float offsetX = fract(uv.x - offset.x - time * 0.001 * speed.x);
      float offsetY = fract(uv.y - offset.y - time * 0.001 * speed.y);
      // float offsetX = mod((uv.x - offset.x - time * 0.001 * speed.x), 1.0);
      // float offsetY = mod((uv.y - offset.y - time * 0.001 * speed.y), 1.0);
      // vec2 offset = vec2(mod((uv.x - offset.x - time * 0.001 * speed.x), 1.0), fract(uv.y - offset.y - time * 0.001 * speed.y));
      vec4 texColor = texture(usertexture, vec2(offsetX, offsetY) );
      gl_FragColor = texColor;
  }
`, r = (e) => new m(e.x, e.y);
function l(e = {}) {
  var o, f, a;
  const t = new i().load(e.src);
  return t.minFilter = v, t.wrapS = s, t.wrapT = s, new u({
    vertexShader: d,
    fragmentShader: x,
    side: n,
    transparent: !0,
    uniforms: {
      usertexture: { value: t },
      time: this.frameNumber,
      offset: { value: r((o = e.offset) != null ? o : { x: 0, y: 0 }) },
      speed: { value: r((f = e.speed) != null ? f : { x: 1, y: 0 }) },
      repeat: { value: r((a = e.repeat) != null ? a : { x: 1, y: 1 }) }
    }
  });
}
export {
  l as default
};
