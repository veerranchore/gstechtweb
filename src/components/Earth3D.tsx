import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ─── Starfield helper (inline — avoids legacy path issues) ──────────────────
function createStarfield(numStars = 5000): any {
  const verts: number[] = [];
  const colors: number[] = [];

  for (let i = 0; i < numStars; i++) {
    const radius = Math.random() * 25 + 25;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    verts.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
    const col = new THREE.Color().setHSL(0.6, 0.4, Math.random());
    colors.push(col.r, col.g, col.b);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    map: new THREE.TextureLoader().load('/earth-assets/stars/circle.png'),
    transparent: true,
  });

  return new THREE.Points(geo, mat);
}

// ─── Fresnel glow helper (inline) ───────────────────────────────────────────
function createFresnelMat(rimHex = 0x3abef9, facingHex = 0x000000): any {
  return new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(rimHex) },
      color2: { value: new THREE.Color(facingHex) },
      fresnelBias: { value: 0.2 },
      fresnelScale: { value: 1.0 },
      fresnelPower: { value: 8.0 },
    },
    vertexShader: `
      uniform float fresnelBias;
      uniform float fresnelScale;
      uniform float fresnelPower;
      varying float vReflectionFactor;
      void main() {
        vec4 mvPosition    = modelViewMatrix * vec4(position, 1.0);
        vec4 worldPosition = modelMatrix    * vec4(position, 1.0);
        vec3 worldNormal   = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
        vec3 I = worldPosition.xyz - cameraPosition;
        vReflectionFactor = fresnelBias + fresnelScale * pow(1.0 + dot(normalize(I), worldNormal), fresnelPower);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying float vReflectionFactor;
      void main() {
        float f = clamp(vReflectionFactor, 0.0, 1.0);
        gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
  });
}

// ─── Component ───────────────────────────────────────────────────────────────
const Earth3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Enable color management (Three.js r138+)
    THREE.ColorManagement.enabled = true;

    // ── Scene / Camera ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    // ── Controls ──
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.autoRotate = false;

    // ── Earth group (tilted 23.4° like the real planet) ──
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    const loader = new THREE.TextureLoader();
    const geometry = new THREE.IcosahedronGeometry(1, 12);

    // Surface
    const earthMesh = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({ map: loader.load('/earth-assets/earthmap.jpg') })
    );
    earthGroup.add(earthMesh);

    // City lights (night side)
    const lightsMesh = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        map: loader.load('/earth-assets/earth_lights.png'),
        blending: THREE.AdditiveBlending,
      })
    );
    earthGroup.add(lightsMesh);

    // Clouds
    const cloudsMesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        map: loader.load('/earth-assets/cloud_combined.jpg'),
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      })
    );
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    // Atmosphere glow (Fresnel)
    const glowMesh = new THREE.Mesh(geometry, createFresnelMat());
    glowMesh.scale.setScalar(1.012);
    earthGroup.add(glowMesh);

    // ── Stars ──
    const stars = createStarfield(5000);
    scene.add(stars);

    // ── Sun light ──
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2.2, 0.7, 1.6);
    scene.add(sunLight);

    // ── Animation ──
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.0019;
      lightsMesh.rotation.y += 0.0019;
      cloudsMesh.rotation.y += 0.0026;
      glowMesh.rotation.y += 0.002;
      stars.rotation.y -= 0.0002;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ──
    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Earth3D;
