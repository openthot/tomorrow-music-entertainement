import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 6;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.012;
    const m = state.pointer;
    ref.current.rotation.y += m.x * delta * 0.15;
    ref.current.rotation.x += -m.y * delta * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color={"#b89bff"}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Orb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.1;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color={"#7f5cff"} wireframe transparent opacity={0.18} />
    </mesh>
  );
}

export function HeroScene() {
  const [tier, setTier] = useState<"high" | "low">("high");
  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const cores = (navigator as any).hardwareConcurrency || 4;
    const mem = (navigator as any).deviceMemory || 4;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (cores < 4 || mem < 4 || reduced) setTier("low");
  }, []);
  const count = tier === "high" ? 2400 : 800;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={tier === "high" ? [1, 1.6] : [1, 1]}
      gl={{ antialias: tier === "high", powerPreference: "high-performance", alpha: true }}
    >
      <Particles count={count} />
      <Orb />
    </Canvas>
  );
}