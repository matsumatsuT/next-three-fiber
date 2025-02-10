"use client";
import { Canvas } from "@react-three/fiber";

const View1 = () => {
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <Canvas>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default View1;
