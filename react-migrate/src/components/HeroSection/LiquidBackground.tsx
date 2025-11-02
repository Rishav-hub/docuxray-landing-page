import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './LiquidBackground.module.css';

// Animated gradient mesh component
function GradientMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  // Create custom shader material
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;
        
        vec3 color1 = vec3(0.0235, 0.5882, 0.4118); // #059669
        vec3 color2 = vec3(0.0549, 0.5804, 0.5451); // #0D9488
        vec3 color3 = vec3(0.2039, 0.8314, 0.6); // #34D399
        
        void main() {
          vec2 uv = vUv;
          
          // Create flowing wave patterns
          float wave1 = sin(uv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
          float wave2 = cos(uv.y * 2.0 + uTime * 0.3) * 0.5 + 0.5;
          float wave3 = sin((uv.x + uv.y) * 2.5 + uTime * 0.4) * 0.5 + 0.5;
          
          // Mix colors based on waves
          vec3 color = mix(color1, color2, wave1);
          color = mix(color, color3, wave2 * wave3);
          
          // Add some alpha gradient
          float alpha = 0.3 + wave3 * 0.3;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
      },
    });
  }, []);

  useFrame((state) => {
    timeRef.current += 0.01;
    if (meshRef.current) {
      shaderMaterial.uniforms.uTime.value = timeRef.current;
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <planeGeometry args={[20, 20, 32, 32]} />
    </mesh>
  );
}

function LiquidBackground() {
  return (
    <div className={styles.liquidBackground}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <GradientMesh />
      </Canvas>
    </div>
  );
}

export default LiquidBackground;

