import React, { Suspense } from "react";

// Three
import { Canvas } from "@react-three/fiber";

// Components
import { Crosshair } from "./controls/Crosshair";
import { UI } from "./controls/UI";
//Scene
import { Shooter } from "./scene/shooter";

// Styles
// import "./styles.css";

export default function XRScene() {
  return (
    <div className="canvas">
      <UI>
        <Crosshair />
      </UI>
      <Canvas style={{ width: '100vw', height: '100vh' }} shadowsMap sRGB shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
           <Shooter />
        </Suspense>
      </Canvas>
    </div>
  );
}