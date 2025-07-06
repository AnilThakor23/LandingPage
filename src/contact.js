import * as THREE from 'three'
import GUI from 'lil-gui';
const gui = new GUI();


const vertexShader = `
//   attribute vec3 color;
  varying vec3 vColor;

  void main() {
    vColor = color;
    gl_PointSize = 3.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vColor;

  void main() {
    
    float dist = length(gl_PointCoord - vec2(0.5));
    // if (dist > 0.5) discard;

    gl_FragColor = vec4(vColor,1.0);
  }
`;

const config = {
    logoPath: 'images/myimg2.JPG',
    logoSize: 500,
    logoScaleX: .7,
    logoScaleY: .35,
    distortionRadius: 1000,
    forceStrength: 0.015,
    maxDisplacement: 100,
    returnForce: 0.05,
  };
  gui.add(config, 'logoScaleX', 0.1, 2.0).name('Logo Scale X').onChange(() => {
    recreateParticles();
  });
  gui.add(config, 'logoScaleY', 0.1, 2.0).name('Logo Scale Y').onChange(() => {
    recreateParticles();
  });
gui.add(config, 'distortionRadius', 500, 4000).name('Radius');
gui.add(config, 'forceStrength', 0.001, 0.1).name('Force Strength');
gui.add(config, 'maxDisplacement', 10, 200).name('Max Displacement');
gui.add(config, 'returnForce', 0, 0.2).name('Return Force');


function recreateParticles() {
    if (!image) return;
    if (points) scene.remove(points);
    particles = [];
    createParticlesFromImage(image);
  }
  

let scene, camera, renderer, geometry, points;
let particles = [];
let mouse = new THREE.Vector2();
let animationCount = 0;

// ---------- Setup Scene ----------
scene = new THREE.Scene();

const aspect = window.innerWidth / window.innerHeight;
camera = new THREE.OrthographicCamera(
  -window.innerWidth / 2, window.innerWidth / 2,
  window.innerHeight / 2, -window.innerHeight / 2,
  -1000, 1000
);
camera.position.z = 1;

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ---------- Load Image ----------
const image = new Image();
image.crossOrigin = "anonymous";
image.src = config.logoPath;
image.onload = () => createParticlesFromImage(image);

// ---------- Create Particles ----------
function createParticlesFromImage(image) {
  const tempCanvas = document.createElement('canvas');
  const ctx = tempCanvas.getContext('2d');

  tempCanvas.width = config.logoSize;
  tempCanvas.height = config.logoSize;

  const scale = 0.9;
  const size = config.logoSize * scale;
  const offset = (config.logoSize - size) / 2;
  ctx.drawImage(image, offset, offset, size, size);

  const imageData = ctx.getImageData(0, 0, config.logoSize, config.logoSize).data;
  const positions = [];
  const colors = [];

  for (let y = 0; y < config.logoSize; y++) {
    for (let x = 0; x < config.logoSize; x++) {
      const idx = (y * config.logoSize + x) * 4;
      const a = imageData[idx + 3];

      if (a > 10) {
        const r = imageData[idx] / 255;
        const g = imageData[idx + 1] / 255;
        const b = imageData[idx + 2] / 255;

        const px = (x - config.logoSize / 2) * 4 * config.logoScaleX;
        const py = -(y - config.logoSize / 2) * 4 * config.logoScaleY;


        positions.push(px, py, 0);
        colors.push(r, g, b);

        particles.push({
          originalX: px, originalY: py,
          x: px, y: py, vx: 0, vy: 0
        });
      }
    }
  }

  geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    vertexColors: true
  });

  points = new THREE.Points(geometry, material);
  scene.add(points);
  animate();
}

// ---------- Mouse Interaction ----------
window.addEventListener('mousemove', (e) => {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = (e.clientX - rect.left) - window.innerWidth / 2;
  mouse.y = -((e.clientY - rect.top) - window.innerHeight / 2);
  animationCount = 300;
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.left = -window.innerWidth / 2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = -window.innerHeight / 2;
  camera.updateProjectionMatrix();
});

// ---------- Animate / Physics ----------
function animate() {
  requestAnimationFrame(animate);
  updateParticles();
  renderer.render(scene, camera);
}

function updateParticles() {
  if (!geometry || animationCount <= 0) return;
  animationCount--;

  const positions = geometry.attributes.position.array;
  const radiusSq = config.distortionRadius * config.distortionRadius;

  for (let i = 0; i < particles.length; i++) { 
    const p = particles[i];
    const dx = mouse.x - p.x;
    const dy = mouse.y - p.y;
    const distSq = dx * dx + dy * dy;

    if (distSq < radiusSq && distSq > 0) {
      const force = -radiusSq / distSq;
      const angle = Math.atan2(dy, dx);
      // const distFromOrigin = Math.hypot(p.x - p.originalX, p.y - p.originalY);
      const distFromOrigin = Math.sqrt((p.x - p.originalX)**2 + (p.y - p.originalY)**2); //*****

      const forceMultiplier = Math.max(0.1, 1 - distFromOrigin / (config.maxDisplacement * 2));

      p.vx += Math.cos(angle) * force * config.forceStrength * forceMultiplier;
      p.vy += Math.sin(angle) * force * config.forceStrength * forceMultiplier;
    }

    p.vx *=0.82; //**** */
    p.vy *=0.82;// ****

    const tx = p.x + p.vx + (p.originalX - p.x) * config.returnForce;
    const ty = p.y + p.vy + (p.originalY - p.y) * config.returnForce;

    // p.vx = (tx - p.originalX) * 0.1;
    // p.vy = (ty - p.originalY) * 0.1;

    const ox = tx - p.originalX;
    const oy = ty - p.originalY;
    const dist = Math.hypot(ox, oy);

    if (dist > config.maxDisplacement) {
      const excess = dist - config.maxDisplacement // ****
      const scale = config.maxDisplacement / dist;
      const damped = scale + (1 - scale) * Math.exp(-excess * 0.02);
      p.x = p.originalX + ox * damped;
      p.y = p.originalY + oy * damped;

      p.vx *= 0.7
      p.vy *= 0.7
    } else {
      p.x = tx;
      p.y = ty;
    }

    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
  }

  geometry.attributes.position.needsUpdate = true;
}
