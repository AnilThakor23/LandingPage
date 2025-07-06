export const works = [
    { title: "Motion Study", image: "images/works1.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2024 ,href : '/'},
    { title: "Digital Bloom", image: "images/works2.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2023 ,href : '/'},
    { title: "Echo Design", image: "images/works3.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2022 ,href : '/'},
    { title: "Waveform Art", image: "images/works4.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2024 ,href : '/'},
    { title: "Pixel Flow", image: "images/works5.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2021 ,href : '/'},
    { title: "Neon Trails", image: "images/works6.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2023 ,href : '/'},
    { title: "Visual Drift", image: "images/works7.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2022 ,href : '/'},
    { title: "Reactive Grid", image: "images/works8.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2020 ,href : '/'},
    { title: "Geometry Loop", image: "images/works9.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2023 ,href : '/'},
    { title: "Pattern Code", image: "images/works10.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2024 ,href : '/'},
    { title: "Signal Noise", image: "images/works11.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2021 ,href : '/'},
    { title: "Light Canvas", image: "images/works12.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2022 ,href : '/'},
    { title: "Echo Pulse", image: "images/works13.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2023 ,href : '/'},
    { title: "Fragment Flow", image: "images/works14.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2024 ,href : '/'},
    { title: "Frame Sync", image: "images/works15.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2020 ,href : '/'},
    { title: "Generative Mesh", image: "images/works16.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2021 ,href : '/'},
    { title: "Visual Memory", image: "images/works17.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2022 ,href : '/'},
    { title: "Data Pulse", image: "images/works18.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2024 ,href : '/'},
    { title: "Motion Language", image: "images/works19.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2023 ,href : '/'},
    { title: "Layer Drift", image: "images/works20.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2022 ,href : '/'},
    { title: "Echo Layer", image: "images/works21.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2021 ,href : '/'},
    { title: "Form Noise", image: "images/works22.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2020 ,href : '/'},
    { title: "Mesh Vibe", image: "images/works23.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2023 ,href : '/'},
    { title: "Rhythm Grid", image: "images/works24.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2024 ,href : '/'},
    { title: "Sketch Synth", image: "images/works25.jpg",hoverColor : "rgba(100,100,100,0.1)", year: 2022 ,href : '/'},
  ];
  

  export const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform vec2 uOffset;
  uniform vec2 uResolution;
  uniform vec4 uBorderColor;
  uniform vec4 uHoverColor;
  uniform vec4 uBackgroundColor;
  uniform vec2 uMousePos;
  uniform float uZoom;
  uniform float uCellSize;
  uniform float uTextureCount;
  uniform sampler2D uImageAtlas;
  uniform sampler2D uTextAtlas;

  varying vec2 vUv;

  void main() {
    vec2 screenUV = (vUv - 0.5) *2.0;

    float radius = length(screenUV);
    float distortion = 1.0 - 0.11 * radius * radius;
    vec2 distortedUV = screenUV * distortion;

    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 worldCoord = distortedUV * aspectRatio;

    worldCoord *= uZoom;
    worldCoord += uOffset;

    vec2 cellPos = worldCoord / uCellSize;
    vec2 cellId = floor(cellPos);
    vec2 cellUV = fract(cellPos);

    vec2 mouseScreenUV = (uMousePos / uResolution) * 2.0 - 1.0;
    mouseScreenUV.y = -mouseScreenUV.y;

    float mouseRadius = length(mouseScreenUV);
    float mouseDistortion = 1.0 - 0.08 * mouseRadius * mouseRadius;
    vec2 mouseDistortedUV = mouseScreenUV * mouseDistortion;
    vec2 mouseWorldCoord = mouseDistortedUV * aspectRatio;
    mouseWorldCoord *= uZoom;
    mouseWorldCoord += uOffset;

    vec2 mouseCellPos = mouseWorldCoord / uCellSize;
    vec2 mouseCellId = floor(mouseCellPos);

    vec2 cellCenter = cellId + 0.5;
    vec2 mouseCellCenter = mouseCellId + 0.5;

    float cellDistance = length(cellCenter - mouseCellCenter);
    float hoverIntensity = 1.0 - smoothstep(0.4, 0.7, cellDistance);
    bool isHovered = hoverIntensity > 0.0 && uMousePos.x >= 0.0;

    vec3 backgroundColor = uBackgroundColor.rgb;
    if (isHovered) {
      backgroundColor = mix(uBackgroundColor.rgb, uHoverColor.rgb, hoverIntensity * uHoverColor.a);
    }

    float lineWidth = 0.005;
    float gridX = smoothstep(0.0, lineWidth, cellUV.x) * smoothstep(0.0, lineWidth, 1.0 - cellUV.x);
    float gridY = smoothstep(0.0, lineWidth, cellUV.y) * smoothstep(0.0, lineWidth, 1.0 - cellUV.y);
    float gridMask = gridX * gridY;

    float imageSize = 0.6;
    float imageBorder = (1.0 - imageSize) * 0.5;
    vec2 imageUV = (cellUV - imageBorder) / imageSize;

    float edgeSmooth = 0.01;
    vec2 imageMask = smoothstep(-edgeSmooth, edgeSmooth, imageUV) *
                     smoothstep(-edgeSmooth, edgeSmooth, 1.0 - imageUV);
    float imageAlpha = imageMask.x * imageMask.y;

    bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 &&
                       imageUV.y >= 0.0 && imageUV.y <= 1.0;

    float textHeight = 0.08;
    float textY = 0.88;

    bool inTextArea = cellUV.x >= 0.05 && cellUV.x <= 0.95 &&
                      cellUV.y >= textY && cellUV.y <= (textY + textHeight);

    float textIndex = mod(cellId.x + cellId.y * 3.0, uTextureCount);

    vec3 color = backgroundColor;

    if (inImageArea && imageAlpha > 0.0) {
      float atlasSize = ceil(sqrt(uTextureCount));
      vec2 atlasPos = vec2(mod(textIndex, atlasSize), floor(textIndex / atlasSize));
      vec2 atlasUV = (atlasPos + imageUV) / atlasSize;
      atlasUV.y = 1.0 - atlasUV.y;

      vec3 imageColor = texture2D(uImageAtlas, atlasUV).rgb;
      color = mix(color, imageColor, imageAlpha);
    }

    if (inTextArea) {
      vec2 textCoord = vec2((cellUV.x - 0.05) / 0.9, (cellUV.y - textY) / textHeight);
      textCoord.y = 1.0 - textCoord.y;

      float atlasSize = ceil(sqrt(uTextureCount));
      vec2 atlasPos = vec2(mod(textIndex, atlasSize), floor(textIndex / atlasSize));
      vec2 atlasUV = (atlasPos + textCoord) / atlasSize;

      vec4 textColor = texture2D(uTextAtlas, atlasUV);
      vec3 textBgColor = backgroundColor;
      color = mix(textBgColor, textColor.rgb, textColor.a);
    }

    vec3 borderRGB = uBorderColor.rgb;
    float borderAlpha = uBorderColor.a;
    color = mix(color, borderRGB, (1.0 - gridMask) * borderAlpha);

    float fade = 1.0 - smoothstep(1.2, 1.8, radius);
    gl_FragColor = vec4(color * fade, 1.0);
  }
`;
