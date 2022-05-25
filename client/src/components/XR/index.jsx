import * as React from "react";
//R3F
import { Canvas, useFrame } from "@react-three/fiber";
import { SpinningMesh } from '../utils/XRMethods'
// Deai - R3F
import {
  softShadows,
  Stars,
  OrbitControls,
} from "@react-three/drei";
import { Physics, useBox } from 'use-cannon';
// Styles
import "../../css/xr/index.scss";


function Box(){
  const [ref] = useBox(() => ({ mass: 1 }));


  return(
    <mesh position={[0,2,0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Plane(){
  return(
    <mesh position={[0,0,0]} rotation={[ -Math.PI / 2, 0, 0 ]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="seafoamgreen" />
    </mesh>
  )
}


const XRDemo = () => {

  return (
    <div id="canvas-container" >
      <Canvas>
        <Stars />
         <Box />
         <Plane />
         <OrbitControls />
         <ambientLight intensity={1.5} />
         <spotLight  position={[ 10, 15, 10 ]} angel={0.3} />
      </Canvas>
    </div>
  );
};

export default XRDemo;