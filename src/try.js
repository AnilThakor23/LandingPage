// Import THREE.js
import * as THREE from 'three';
let canvas = document.querySelector("canvas") 
// ---- Scene Setup ----
const renderer = new THREE.WebGLRenderer({ antialias: true });
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const transitionScene = new THREE.Scene();

const camera1 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera1.position.z = 5;

const camera2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera2.position.z = 5;

const orthoCamera = new THREE.OrthographicCamera(
  -1, 1, 1, -1, 0, 1
);

// ---- Render Targets ----
const rt1 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
const rt2 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

// ---- Dummy Scene 1 ----
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
scene1.add(cube);
scene1.add(new THREE.AmbientLight(0xffffff, 1));

// ---- Dummy Scene 2 ----
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.75, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x00aaff })
);
scene2.add(sphere);
scene2.add(new THREE.AmbientLight(0xffffff, 1));

// ---- Shader Material for Transition ----
const transitionUniforms = {
  tScene1: { value: null },
  tScene2: { value: null },
  transition: { value: 0.0 }
};

const transitionMaterial = new THREE.ShaderMaterial({
  uniforms: transitionUniforms,
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tScene1;
    uniform sampler2D tScene2;
    uniform float transition;
    varying vec2 vUv;

    void main() {
      vec4 tex1 = texture2D(tScene1, vUv);
      vec4 tex2 = texture2D(tScene2, vUv);
      

      float border = 0.002;
      if (vUv.x <= 0.50) {
        gl_FragColor = tex1;
      } else {
        gl_FragColor = tex2;
      }
    }
  `
});

// Fullscreen Quad
const quad = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  transitionMaterial
);
transitionScene.add(quad);

// ---- Animate ----
let transitionValue = 0;
let increasing = true;

function animate() {
  requestAnimationFrame(animate);

  // Animate objects
  cube.rotation.y += 0.01;
  sphere.rotation.x += 0.01;

  // Transition logic (demo)
  transitionValue += (increasing ? 0.01 : -0.01);
  if (transitionValue >= 1) increasing = false;
  if (transitionValue <= 0) increasing = true;
  transitionUniforms.transition.value = transitionValue;

  // Render both scenes to targets
  renderer.setRenderTarget(rt1);
  renderer.render(scene1, camera1);

  renderer.setRenderTarget(rt2);
  renderer.render(scene2, camera2);

  renderer.setRenderTarget(null);

  // Update textures for blending
  transitionUniforms.tScene1.value = rt1.texture;
  transitionUniforms.tScene2.value = rt2.texture;

  // Render final quad
  renderer.render(transitionScene, orthoCamera);
}
animate();

// Handle resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  rt1.setSize(window.innerWidth, window.innerHeight);
  rt2.setSize(window.innerWidth, window.innerHeight);

  camera1.aspect = window.innerWidth / window.innerHeight;
  camera2.aspect = window.innerWidth / window.innerHeight;
  camera1.updateProjectionMatrix();
  camera2.updateProjectionMatrix();
});


let isDragging = false;

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // yahan drag ka logic
  console.log('Dragging', e.movementX, e.movementY);
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
});

canvas.addEventListener('mouseleave', () => {
  isDragging = false;
});