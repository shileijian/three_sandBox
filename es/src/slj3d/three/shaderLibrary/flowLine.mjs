import { TextureLoader as a, NearestFilter as i, RepeatWrapping as o, ShaderMaterial as n, DoubleSide as v } from "../../../../node_modules/.pnpm/registry.npmmirror.com_three@0.158.0/node_modules/three/build/three.module.mjs";
const u = `
  // \u9876\u70B9\u7740\u8272\u5668\u4EE3\u7801
  varying vec2 vUv;

  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, s = `
  // \u7247\u5143\u7740\u8272\u5668\u4EE3\u7801
  uniform sampler2D usertexture;
  uniform float time;
  uniform float speed;
  varying vec2 vUv;

  void main() {
      // \u5BF9\u7EB9\u7406\u5750\u6807\u8FDB\u884C\u504F\u79FB
      vec2 offset = vec2(fract(vUv.x - time * 0.001 * speed), vUv.y);
      vec4 texColor = texture(usertexture, offset);
      gl_FragColor = texColor;
  }
`;
function f(r = {}) {
  var t;
  const e = new a().load(r.src);
  return e.minFilter = i, e.wrapS = o, e.wrapT = o, new n({
    vertexShader: u,
    fragmentShader: s,
    side: v,
    transparent: !0,
    uniforms: {
      usertexture: { value: e },
      time: this.frameNumber,
      speed: { value: (t = r.speed) != null ? t : 1 }
    }
  });
}
export {
  f as default
};
