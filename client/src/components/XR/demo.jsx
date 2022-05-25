import * as React from "react";
//R3F
import { Canvas } from "@react-three/fiber";
import { SpinningMesh } from '../utils/XRMethods'
// Deai - R3F
import {
  softShadows,
  OrbitControls,
} from "@react-three/drei";
// Styles
import "../../css/xr/index.scss";

// soft Shadows
softShadows();


const XRDemo2 = () => {
  return (
    <div id="canvas-container">
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <SpinningMesh
            position={[0, 1, 0]}
            color="purple"
            args={[3, 2, 1]}
            speed={2}
          />
          <SpinningMesh position={[-2, 1, -5]} color="red" speed={6} />
          <SpinningMesh position={[5, 1, -2]} color="blue" speed={6} />
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default XRDemo2;
