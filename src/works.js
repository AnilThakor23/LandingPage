import * as THREE from "three";
import { works , vertexShader , fragmentShader } from "./worksData"




const config = {
    cellSize: 0.65,
    zoomlevel:1.25,
    lerpFactor:0.075,

    borderColor : "rgba(255,255,255,0.1)",
    backgroundColor : "rgba(0,0,0,1)",
    textColor : "rgba(128,128,128,1)",
    hoverColor : "rgba(100,100,100,0.1)",
}

let scene , camera , renderer , plane;

let isDragging = false ,
   isClick = true,
   clickStartTime = 0;

let previousMouse = { x:0 , y:0};
let offset = { x:0 , y:0},
    targetOffset = { x:0 , y:0},
    lastOffset = { x:0 , y: 0};

let mousePosition = { x:-1 , y:-1};
let zoomLevel = 1.0,
    targetZoom = 1.0;

let textTextures = [];

const rgbaToArray = (rgba)=>{
    const match = rgba.match(/rgba?\(([^)]+)\)/)
    if(!match) return [1,1,1,1];
    return match[1]
    .split(",")
    .map( (v,i)=>
        i<3? parseFloat(v.trim())/255 : parseFloat(v.trim() || 1)
    )
}

const createTextTexture =  (title , year)=>{
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0,0,2048,256);
    ctx.font = "bold 100px Anton";
    ctx.fillStyle = config.textColor;
    ctx.textBaseline = "middle"
    ctx.imageSmoothingEnabled = true

    ctx.textAlign = "left"
    ctx.fillText(title.toUpperCase(),30,128)
    ctx.textAlign = "right"
    ctx.fillText(year.toString().toUpperCase() , 2048-30,128)

    const texture = new THREE.CanvasTexture(canvas)
    Object.assign(texture , {
        wrapS : THREE.ClampToEdgeWrapping,
        wrapT:THREE.ClampToEdgeWrapping,
        minFilter : THREE.NearestFilter,
        magFilter : THREE.NearestFilter,
        flipY : false,
        generateMipmaps : false,
        format : THREE.RGBAFormat
    })

    return texture;
}

const createTextureAtlas = (textures, isText = false) => {
    const atlasSize = Math.ceil(Math.sqrt(textures.length));
    const textureSize = 512;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = atlasSize * textureSize;
    const ctx = canvas.getContext("2d");

    if (isText) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    textures.forEach((texture, index) => {
        const x = (index % atlasSize) * textureSize;
        const y = Math.floor(index / atlasSize) * textureSize;

        if (isText && texture.source?.data) {
            ctx.drawImage(texture.source.data, x, y, textureSize, textureSize);
        } else if (!isText && texture.image?.complete) {
            ctx.drawImage(texture.image, x, y, textureSize, textureSize);
        }
    });

    const atlasTexture = new THREE.CanvasTexture(canvas)
    Object.assign(atlasTexture , {
        wrapS : THREE.ClampToEdgeWrapping,
        wrapT:THREE.ClampToEdgeWrapping,
        minFilter : THREE.NearestFilter,
        magFilter : THREE.NearestFilter,
        flipY : false,
    })

    return atlasTexture;
};

const loadTextures = () => {
    const textureLoader = new THREE.TextureLoader();
    const imageTextures = [];
    let loadedCount = 0;

    return new Promise((resolve) => {
        works.forEach((project) => {
            const texture = textureLoader.load(project.image, () => {
                if (++loadedCount === works.length) resolve(imageTextures);
            });

            Object.assign(texture, {
                wrapS: THREE.ClampToEdgeWrapping,
                wrapT: THREE.ClampToEdgeWrapping,
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
            });

            imageTextures.push(texture);
            textTextures.push(createTextTexture(project.title, project.year));
        });
    });
};

const updateMousePosition = (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mousePosition.x = event.clientX - rect.left;
    mousePosition.y = event.clientY - rect.top;
    plane?.material.uniforms.uMousePos.value.set(
        mousePosition.x,
        mousePosition.y
    );
};

const startDrag = (x, y) => {
    isDragging = true;
    isClick = true;
    clickStartTime = Date.now();
    document.body.classList.add("dragging");
    previousMouse.x = x;
    previousMouse.y = y;
    // setTimeout( ()=> isDragging && (targetZoom = config.zoomlevel) ,10)
    targetZoom = config.zoomlevel
};

const onPointerDown = (e) => startDrag(e.clientX, e.clientY);
const onTouchStart = (e) => {
    e.preventDefault();
    startDrag(e.touches[0].clientX, e.touches[0].clientY);
};

const handleMove = (currentX, currentY) => {
    if (!isDragging || currentX === undefined || currentY === undefined) return;

    const deltaX = currentX - previousMouse.x;
    const deltaY = currentY - previousMouse.y;

    if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        isClick = false;
        if (targetZoom === 1.0) targetZoom = config.zoomlevel;
    }

    targetOffset.x -= deltaX * 0.007;
    targetOffset.y += deltaY * 0.007;
    lastOffset.y = targetOffset.y
    lastOffset.x = targetOffset.x
    previousMouse.x = currentX;
    previousMouse.y = currentY;
};

const onPointerMove = (e) => handleMove(e.clientX, e.clientY);
const onTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
};

const onPointerUp = (event) => {
    
    isDragging = false;
    document.body.classList.remove("dragging");
    targetZoom = 1.0;

    if (isClick && Date.now() - clickStartTime < 200) {
        const endX = event.clientX || event.changedTouches?.[0]?.clientX;
        const endY = event.clientY || event.changedTouches?.[0]?.clientY;

        if (endX !== undefined && endY !== undefined) {
            const rect = renderer.domElement.getBoundingClientRect();
            const screenX = ((endX - rect.left) / rect.width) * 2 - 1;
            const screenY = -((endY - rect.top) / rect.height) * 2 - 1;

            const radius = Math.sqrt(screenX * screenX + screenY * screenY);
            const distortion = 1.0 - 0.08 * radius * radius;

            let worldX =
                screenX * distortion * (rect.width / rect.height) * zoomLevel +
                offset.x;
            let worldY = screenY * distortion * zoomLevel + offset.y;

            const cellX = Math.floor(worldX / config.cellSize);
            const cellY = Math.floor(worldY / config.cellSize);
            const texIndex = Math.floor(
                (cellX + cellY * 3.0) % works.length
            );
            const actualIndex =
                texIndex < 0 ? works.length + texIndex : texIndex;

            if (works[actualIndex]?.href) {
                window.location.href = works[actualIndex].href;
            }
        }
    }
};


const onWindowResize = () => {
    const container = document.getElementById("gallery");
    if (!container) return;

    const { offsetWidth: width, offsetHeight: height } = container;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    plane?.material.uniforms.uResolution.value.set(width, height);
};

const setupEventListeners = () => {
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("mousemove", onPointerMove);
    document.addEventListener("mouseup", onPointerUp);
    document.addEventListener("mouseleave", onPointerUp);

    const passiveOpts = { passive: false };
    document.addEventListener("touchstart", onTouchStart, passiveOpts);
    document.addEventListener("touchmove", onTouchMove, passiveOpts);
    document.addEventListener("touchend", onPointerUp, passiveOpts);

    window.addEventListener("resize", onWindowResize);
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    renderer.domElement.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove",(dets)=>{
        let x = (dets.x / window.innerWidth * 2 )- 1
        let y = (dets.y / window.innerHeight * 2 )- 1
      
        
        if(!isDragging){
            targetOffset.x = - x *0.1 + lastOffset.x
            targetOffset.y =  y *0.1 + lastOffset.y
        }
    })
    renderer.domElement.addEventListener("mouseleave", () => {
        mousePosition.x = mousePosition.y = -1;
        plane?.material.uniforms.uMousePos.value.set(-1, -1);
    });
};

export const animate = ()=>{
    requestAnimationFrame(animate)
    
    offset.x += (targetOffset.x - offset.x) * config.lerpFactor;
    offset.y += (targetOffset.y - offset.y) * config.lerpFactor;
    zoomLevel += (targetZoom - zoomLevel) * config.lerpFactor;

    if(plane?.material.uniforms){
        plane.material.uniforms.uOffset.value.set(offset.x , offset.y)
        plane.material.uniforms.uZoom.value = zoomLevel
    }
    renderer.render(scene,camera)
}

const init = async () => {
    const container = document.getElementById("gallery");
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const bgColor = rgbaToArray(config.backgroundColor);
    renderer.setClearColor(
        new THREE.Color(bgColor[0], bgColor[1], bgColor[2]),
        bgColor[3]
    );

    container.appendChild(renderer.domElement);

    const imageTextures = await loadTextures();
    const imageAtlas = createTextureAtlas(imageTextures, false);
    const textAtlas = createTextureAtlas(textTextures, true);

    let uniforms = {
        uOffset: { value: new THREE.Vector2(0, 0) },
        uResolution: {
            value: new THREE.Vector2(container.offsetWidth, container.offsetHeight),
        },
        uBorderColor: {
            value: new THREE.Vector4(...rgbaToArray(config.borderColor)),
        },
        uHoverColor: {
            value: 0,
        },
        uBackgroundColor: {
            value: new THREE.Vector4(...rgbaToArray(config.backgroundColor)),
        },
        uMousePos: { value : new THREE.Vector2(-1,-1) },
        uZoom: { value :1.0},
        uCellSize: {value :config.cellSize},
        uTextureCount : { value : works.length},
        uImageAtlas : { value : imageAtlas},
        uTextAtlas : { value : textAtlas}
    };

    works.forEach((work)=>{
        uniforms.uHoverColor.value = new THREE.Vector4(...rgbaToArray(work.hoverColor))
    })
    const geometry = new THREE.PlaneGeometry(2,2)
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
    })

    plane = new THREE.Mesh(geometry,material)
    scene.add(plane)


    setupEventListeners()
    animate()
};

init()


export {
    scene,camera
}