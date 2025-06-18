varying vec2 vUv;

void main() {
    vUv = uv; // pass UV coordinates to fragment shader
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}