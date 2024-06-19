import { ShaderMaterial as t, DoubleSide as o, TextureLoader as i } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
const a = `
  // \u9876\u70B9\u7740\u8272\u5668\u4EE3\u7801
  varying vec2 vUv;

  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, v = `
  // \u7247\u5143\u7740\u8272\u5668\u4EE3\u7801
  uniform sampler2D usertexture;
  uniform float time;
  uniform float speed;
  varying vec2 vUv;

  void main() {
      // \u5BF9\u7EB9\u7406\u5750\u6807\u8FDB\u884C\u504F\u79FB
      vec2 offset = vec2(fract(vUv.x + time * 0.001 * speed), vUv.y);
      vec4 texColor = texture(usertexture, offset);
      gl_FragColor = texColor;
  }
`;
function u(e = {}) {
  var r;
  return new t({
    vertexShader: a,
    fragmentShader: v,
    side: o,
    uniforms: {
      usertexture: { value: new i().load(e.src) },
      time: this.frameNumber,
      speed: { value: (r = e.speed) != null ? r : 1 }
    }
  });
}
export {
  u as default
};
