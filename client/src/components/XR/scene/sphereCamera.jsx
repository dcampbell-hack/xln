import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import * as THREE  from 'three';

const angleToRadians = angleInDeg => (Math.PI / 180 ) * angleInDeg;


const Ball = () => {
    return (
        <mesh>
            <sphereBufferGeometry />
            <meshStandardMaterial color={"yellow"}  />
        </mesh>
    )
}


const Plane = ({ color, position, rotation }) => {

    return(
        <mesh scale={100} position={position} rotation={rotation}  receiveShadow >
            <planeBufferGeometry args={[24,20]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

const Scene = () => {
    return(
        <mesh>
            <OrbitControls />
            <Ball castShadow />
            <Plane color={"cyan"} position={[0,-1,0]} rotation={[ angleToRadians(-90), 0,0]}  receiveShadow />
            <spotLight  args={["#fff", 1.5, 7]} position={[4, 3, 0]} intensity={1}  castShadow />
            <PerspectiveCamera />
            <ambientLight intensity={0.25} />

            <Environment
              background
             >
                 <mesh scale={100}>
                    <sphereGeometry args={[1,100,100]} />
                    <meshBasicMaterial color={"#429495"} side={THREE.BackSide} />
                 </mesh>
             </Environment>


        </mesh>
    )
}


const XRDemo = () => {
  return (
    <div className="canvas">
        <Canvas shadows>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    </div>
  )
}

export default XRDemo