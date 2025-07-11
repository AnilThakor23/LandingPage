import './style.css'

import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { SSRPass } from 'three/examples/jsm/postprocessing/SSRPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { gsap } from "gsap";
import * as YUKA from 'yuka';
import fragment from '/shaders/fragment.glsl'
import groundFragment from '/shaders/groundFragment.glsl'
import vertex from '/shaders/vertex.glsl'
import { Noise } from 'noisejs'
import { Text } from 'troika-three-text';

let scene, camera, renderer, composer, ssrPass, bloomPass, shaderPass, ground, cylinder, cylindermat, points;
let entityManager, vehicle, path;
let animationId, clock, startCylinder = 0.0;
let mouse = { x: 0, y: 0 };
let oldMousePosition = { x: 0.5, y: 0.5 }, newMousePosition = { x: 0.5, y: 0.5 };
let loaderTL;
let videos = [], Vcanvas, ctx, texture;
let doesTextAppear = false;

function initHome() {
  // ------------  scene ---------- //
  const canvas = document.querySelector(".canvas")
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // ------------  camera ---------- //
  // camera = new THREE.OrthographicCamera(
  //   window.innerWidth / -40,
  //   window.innerWidth / 40,
  //   window.innerHeight / 40,
  //   window.innerHeight / -40,
  //   0.1,
  //   100
  // );
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 2, 5);

  // ------------  renderer ---------- //
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setPixelRatio(window.devicePixelRatio);

  // ------------  HDRI & light---------- //
  new RGBELoader().load('HDRI/hdri1.hdr', (hdr) => {
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = hdr;
  });
  const light = new THREE.AmbientLight(0xFFFFFF, 5)
  scene.add(light)

  // ------------  Cylinder ---------- //
  const radius = 12.5
  const cylinderHeight = 6.75
  const cylinderGeo = new THREE.CylinderGeometry(radius, radius, cylinderHeight, 600, 1, true)
  cylindermat = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    flatShading: false,
    metalness: 0.5,
    roughness: 0.3
  })
  cylinder = new THREE.Mesh(cylinderGeo, cylindermat)
  cylinder.position.y = cylinderHeight / 2 - 1;
  scene.add(cylinder);

  // ------------  Reflective ground (:need ssr)---------- //
  ground = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.ShaderMaterial({
      color: 0x000000,
      metalness: 0.1,
      roughness: 0.9,
      uniforms: {
             iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
             iTime: { value: 0 },
             iChannel0: { value: null } 
        },
      vertexShader: `
        varying vec2 vUv;
        void main() {
         vUv = uv;
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }  ` ,
      
      fragmentShader : groundFragment,
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1
  scene.add(ground);

  // ------------  composer , ssr and Bloom---------- //
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  ssrPass = new SSRPass({
    renderer,
    scene,
    camera,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  ssrPass.opacity = 0.4,
    ssrPass.enableBlur = true;
  ssrPass.blurKernelSize = 30;
  ssrPass.blurSharpness = 15;
  ssrPass.maxDistance = 5;
  ssrPass.thickness = .8;
  ssrPass.enableDistanceAttenuation = true;
  composer.addPass(ssrPass);

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    .3, // strength
    0.4, // radius
    0.85 // threshold
  );
  composer.addPass(bloomPass);

  // ------------  Creating Video Texture for cylinder ---------- //
  Vcanvas = document.getElementById('videoCanvas');
  ctx = Vcanvas.getContext('2d');

  videos = [
    document.getElementById('v1'),
    document.getElementById('v2'),
    document.getElementById('v3'),
    document.getElementById('v4'),
  ];

  const videoWidth = 512;
  const videoHeight = 512;
  Vcanvas.width = videoWidth * videos.length;
  Vcanvas.height = videoHeight;

  texture = new THREE.CanvasTexture(Vcanvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.repeat.set(1, 1);
  texture.center.set(0, 0);
  texture.needsUpdate = true;

  function updateCanvas() {
    ctx.clearRect(0, 0, Vcanvas.width, Vcanvas.height);
    videos.forEach((video, i) => {
      ctx.drawImage(video, i * videoWidth, 0, videoWidth, videoHeight);
    });
    texture.needsUpdate = true;
    cylindermat.map = texture
    animationId = requestAnimationFrame(updateCanvas);
  }
  updateCanvas();

  videos.forEach((v, i) => {
    v.muted = true;
    v.loop = true;
    v.play().catch(e => console.warn(`Video ${i} error:`, e));
  });

  // ------------  Yuka - for camera Animation ---------- //
  gsap.to("nav", {
    y: -100,
  }) // navbaar set

  entityManager = new YUKA.EntityManager();

  vehicle = new YUKA.Vehicle()
  vehicle.position.set(-5, 0, 50);
  path = new YUKA.Path();
  path.add(new YUKA.Vector3(-5, 0, 50));
  path.add(new YUKA.Vector3(2, 1, 25));
  path.add(new YUKA.Vector3(28, 2.5, -2));
  path.loop = false;

  vehicle.setRenderComponent(camera, (entity, renderComponent) => {
    renderComponent.position.copy(entity.position);
    if (entity.position.z <= 15) {
      gsap.to(camera.rotation, {
        y: Math.PI / 2 * (15 - camera.position.z) / 15,
        duration: 1,
      });
      if (!doesTextAppear) {
        gsap.to("nav", {
          delay: 5,
          y: 0,
          opacity: 1,
          duration: 1
        })
      }
    }
  });

  const followPathBehavior = new YUKA.FollowPathBehavior(path, 15);
  vehicle.steering.add(followPathBehavior);
  vehicle.maxSpeed = 40;

  entityManager.add(vehicle);

  // ------------  shaderPass - for distortion and chromatic abration effect ---------- //
  const shader = {
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      tDiffuse: { value: null },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseDirection: { value: new THREE.Vector2(0, 0) },
      uTime: { value: 0.0 },
    },
  }

  shaderPass = new ShaderPass(shader);
  composer.addPass(shaderPass);
  composer.setSize(window.innerWidth, window.innerHeight);

  // ------------  particles ---------- //
  const noise = new Noise(Math.random())
  const particlesCount = 70

  const positions = new Float32Array(particlesCount * 3)
  const speeds = new Float32Array(particlesCount)

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 40.5
    positions[i * 3 + 1] = (Math.random() - 0.1) * 20.5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40.5

    speeds[i] = 2.25 + Math.random() * 10.2
  }

  const particleGeometry = new THREE.BufferGeometry()
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  particleGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1))

  const particleMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    uniforms: {
      size: { value: 4 },
      scale: { value: 4 },
      color: { value: new THREE.Color(0xffffff) }
    },
    vertexShader: THREE.ShaderLib.points.vertexShader,
    fragmentShader: `
      uniform vec3 color;
      void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float ll = length(xy);
        float r = step(length(xy + vec2(0.01, 0.0)), 0.5);
        float g = step(ll, 0.5);
        float b = step(length(xy - vec2(0.01, 0.0)), 0.5);
        gl_FragColor = vec4(r, g, b, 1.0)*0.6 ;
      }
    `
  })

  points = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(points)

  clock = new THREE.Clock()

  function updateParticles() {
    const time = clock.getElapsedTime()
    const pos = particleGeometry.attributes.position.array
    const spd = particleGeometry.attributes.speed.array

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3

      const noiseX = noise.simplex3(pos[i3] * 0.5, pos[i3 + 1] * 0.5, time * 0.2)
      const noiseY = noise.simplex3(pos[i3 + 1] * 0.5, pos[i3 + 2] * 0.5, time * 0.2)
      const noiseZ = noise.simplex3(pos[i3 + 2] * 0.5, pos[i3] * 0.5, time * 0.2)

      pos[i3 + 0] += noiseX * 0.01 * spd[i]
      pos[i3 + 1] += noiseY * 0.01 * spd[i]
      pos[i3 + 2] += noiseZ * 0.01 * spd[i]
    }

    particleGeometry.attributes.position.needsUpdate = true
  }

  // ------------  animate function ---------- //
  function animate() {
    animationId = requestAnimationFrame(animate);
    const delta = clock.getDelta();
    cylinder.rotation.y = clock.getElapsedTime() * 0.05 - Math.PI / 8
    shaderPass.uniforms.uTime.value = performance.now() / 1000

    entityManager.update(delta * startCylinder);

    ground.material.uniforms.iTime.value = performance.now() / 10000;
    updateParticles();
    composer.render();
  }
  animate();

  // ------------  Manage Mouse effects ---------- //
  window.addEventListener("mousemove", onMouseMove);

  function onMouseMove(dets) {
    let x = dets.x / window.innerWidth
    let y = 1 - dets.y / window.innerHeight;

    mouse.x = x
    mouse.y = y
    newMousePosition.x = x
    newMousePosition.y = y
    gsap.to(shaderPass.uniforms.uMouseDirection.value, {
      x: -Math.sign(newMousePosition.x - oldMousePosition.x),
      y: -Math.sign(newMousePosition.y - oldMousePosition.y),
    })
    oldMousePosition.x = x
    oldMousePosition.y = y

    gsap.to(shaderPass.uniforms.uMouse.value, {
      x: x,
      y: y,
      duration: 0.5,
      ease: "power2.out"
    });
  }

  // ------------  HtML animations ---------- //
  function playSound() {
    const sound = document.getElementById("sound");
    sound.volume = 0.1;
    sound.currentTime = 0;
    sound.play();
  }

  document.querySelectorAll(".hero .NavButton").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        backgroundColor: "#FFFFFF",
        color: "black",
        duration: 0.7
      })
    })
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        backgroundColor: "transparent",
        color: "white",
        duration: 0.7,
      })
    })
  })

  document.querySelectorAll("#playSound").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      playSound();
    })
  })

  loaderTL = gsap.timeline()
  loaderTL.to(".loadingPage .loader", {
    height: "40vh",
    duration: 2,
    ease: "power2.in",
  })
    .to(".loadingPage", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        document.querySelector(".loadingPage").style.display = "none"
        startCylinder = 1;
      }
    })

  console.log("home Start");
}

function destroyHome() {
  // Cancel animation
  console.log("home end");
  if (animationId) cancelAnimationFrame(animationId);

  // Dispose Three.js objects
  if (renderer) {
    renderer.dispose?.();
    renderer.forceContextLoss?.();
    renderer.domElement?.parentNode?.removeChild(renderer.domElement);
    renderer = null;
  }
  if (scene) {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    scene = null;
  }
  camera = null;
  composer = null;
  ssrPass = null;
  bloomPass = null;
  shaderPass = null;
  ground = null;
  cylinder = null;
  cylindermat = null;
  points = null;
  entityManager = null;
  vehicle = null;
  path = null;
  clock = null;

  // Remove event listeners
  window.removeEventListener("mousemove", onMouseMove);

  // Remove HTML/GSAP animations if needed
  if (loaderTL) loaderTL.kill();
}

initHome()