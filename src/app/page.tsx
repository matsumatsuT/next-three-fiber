"use client";

import { R3fBox } from "./components/R3fBox";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div>Hello</div>
      <Canvas>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />

        <R3fBox position={[-1.2, 0, 0]} />
      </Canvas>
    </>
  );
}
