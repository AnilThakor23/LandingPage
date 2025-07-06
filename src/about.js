import * as THREE from 'three'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
let lastScroll = 0, curruntScroll = 0
lenis.on('scroll', ({ scroll }) => {
  curruntScroll = scroll
  let direction = Math.sign(curruntScroll - lastScroll)
  lastScroll = curruntScroll
 
  if (document.body.scrollHeight - scroll - document.querySelector(".page3").offsetHeight < 15 && direction === 1) {
    console.log("anil");
    
    footerImageAnimation()
  }
})
let isFooterAnimating = false;

// Make sure 4 images have this class
const images = document.querySelectorAll('.footer-image');
const footerImageAnimation = () => {
  if (isFooterAnimating) return;
  isFooterAnimating = true;
  
  const pageHeight = document.body.scrollHeight;
  const windowWidth = window.innerWidth;

  images.forEach((img) => {
    const scale = gsap.utils.random(0.7, 1, 0.01);
    const locationX = gsap.utils.random(-windowWidth * 0.0, windowWidth * 0.95);
    const direction = Math.random() < 0.5 ? 1 : -1;
    const distance = gsap.utils.random(400, 570);
    const rotate = gsap.utils.random(-100, 100);

    // Initial styles
    gsap.set(img, {
      x:0,
      y:0,
      scale,
      left: locationX +"px", 
      top:"100%",
      rotate: 0,
      opacity: 1,
    });

    // Animate upward
    gsap.to(img, {
      y: -distance ,
      x: direction*150/2,
      // opacity: 1,
      rotate,
      duration: 1.5,
      ease: 'power2.out',
      onComplete: () => {
        // Optionally remove or reset
        gsap.to(img, {
          opacity: 0,
          y:0,
          duration: 1.5,
          ease:"power2.in",
          onComplete: () => {       
            isFooterAnimating = false;
          }
        });
      }
    });
  });
};





let dimentions = document.querySelector("#aboutPageMyImg").getBoundingClientRect()
let center = {
    x: (dimentions.left + dimentions.width/2) - window.innerWidth/2,
    y: (dimentions.top + dimentions.height/2) - window.innerHeight/2
}

console.log(center.y);


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
  uniform float uOpacity;
  void main() {
    
    float dist = length(gl_PointCoord - vec2(0.5));
    // if (dist > 0.5) discard;

    gl_FragColor = vec4(vColor,uOpacity);
  }
`;

const config = {
    logoPath: 'images/myimg1.jpg',
    logoSize: 480,
    logoScaleX: 0.5,
    logoScaleY: 0.5,
    distortionRadius: 600,
    forceStrength: 0.015,
    maxDisplacement: 100,
    returnForce: 0.06,
  };
//   gui.add(config, 'logoScaleX', 0.1, 2.0).name('Logo Scale X').onChange(() => {
//     recreateParticles();
//   });
//   gui.add(config, 'logoScaleY', 0.1, 2.0).name('Logo Scale Y').onChange(() => {
//     recreateParticles();
//   });
// gui.add(config, 'distortionRadius', 500, 4000).name('Radius');
// gui.add(config, 'forceStrength', 0.001, 0.1).name('Force Strength');
// gui.add(config, 'maxDisplacement', 10, 200).name('Max Displacement');
// gui.add(config, 'returnForce', 0, 0.2).name('Return Force');










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

let canvas = document.querySelector("canvas")
renderer = new THREE.WebGLRenderer({ antialias: true,canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

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

        const px = (x - config.logoSize / 2) * 2 * config.logoScaleX + center.x;
        const py = -(y - config.logoSize / 2) * 2 * config.logoScaleY - center.y;


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
    uniforms:{
      uOpacity : {value:0},
    },
    transparent: true,
    vertexColors: true
  });
  gsap.to(material.uniforms.uOpacity,{
    value : 1.0,
    duration:1.5,
    ease:"power1.in"
  })
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


let textsHover = document.querySelectorAll("#textOnLoad")

textsHover.forEach((text)=>{
  let spans = text.querySelectorAll("span")
  gsap.fromTo(spans,{y:"100%"},{
    y:"0%",
    stagger:0.03,
    duration:1
  })
})

gsap.to(".beep",{
  opacity:1,
  repeat:-1,
  duration:0.5,
  yoyo:true,
  ease : "linear"
})

gsap.fromTo(".page3 #scrollText span",{y:"105%"},{
  y:"0%",
  stagger:0.015,
  duration:0.8,
  scrollTrigger: {
    trigger: ".page3 #scrollText",
    scroller: document.body, 
    start: "top 75%",      
  },

})

let textHovers = document.querySelectorAll("#HoverText")
textHovers.forEach((elem)=>{
  let P = elem.querySelectorAll("p")

  elem.addEventListener("mouseenter",()=>{    
    gsap.to(P,{ y:"-100%" , duration:0.3 })
  })
  elem.addEventListener("mouseleave",()=>{    
    gsap.to(P,{ y:"0%" , duration:0.3 })
  })
})

document.querySelectorAll(".page2 .elem").forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    let bg = elem.querySelector("#bg")
    gsap.to(bg,{
      width:"100%",
      duration:0.7,
      opacity:1
    })
  })
  elem.addEventListener("mouseleave",()=>{
    let bg = elem.querySelector("#bg")
    gsap.to(bg,{
      width:"0%",
      opacity:0
    })
  })
})

document.querySelectorAll(".page2 #scrollText").forEach((container)=>{
  
  
  let spans = container.querySelectorAll("span")
  gsap.fromTo(spans,{y:"105%"},{
    y:"0%",
    duration:0.8,
    scrollTrigger: {
      trigger: container,
      scroller: document.body, 
      start: "top 80%", 
    },
  
  })
})