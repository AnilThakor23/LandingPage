
uniform float uTime;
float grain(vec2 coord) {
    return fract(sin(dot(coord * uTime, vec2(12.9898, 78.233))) * 43758.5453);
}

uniform vec2 uMouse;
uniform vec2 uMouseDirection;
uniform sampler2D tDiffuse;
varying vec2 vUv;

void main() {

    vec2 uv = vUv;
    vec4 baseState = texture2D(tDiffuse , uv);

    vec2 gridUV = floor(uv * vec2(80.0,80.0)) /  vec2(80.0,80.0);

    vec2 centerOfPixel = gridUV + vec2(1.0 / 160.0 , 1.0 / 160.0);

    vec2 pixelToMouseDirection = centerOfPixel - uMouse;
    
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.2 ,0.0 , pixelDistanceToMouse) ;
    vec2 distortion = vec2(0.04) * strength  * uMouseDirection ;
   
    vec4 colorR = texture2D(tDiffuse , clamp(uv + distortion *0.8, 0.0, 1.0));
    vec4 colorG = texture2D(tDiffuse , clamp(uv + distortion*0.6, 0.0, 1.0));
    vec4 colorB = texture2D(tDiffuse ,clamp(uv + distortion*0.5, 0.0, 1.0));
    vec4 finalColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);

   gl_FragColor = vec4(finalColor);

   }