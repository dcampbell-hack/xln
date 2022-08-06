import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment, Text3D } from '@react-three/drei';
import fontUrl from '../../../assets/fonts/xenosphere.json';
import * as THREE  from 'three';

const angleToRadians = angleInDeg => (Math.PI / 180 ) * angleInDeg;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const array = [
    {
        scale: 1,
        color: "yellow",
        position: [ 2, 3, 5 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 1,
        color: "pink",
        position: [ -5, 2, -2 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 1,
        color: "green",
        position: [ 6, 3, -5 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 1,
        color: "blue",
        position: [ -5, 0, 3 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 0.5,
        color: "purple",
        position: [ 2, 0, 4 ],
        rotation: [ 3, 5, 1]
    }
]


const Ball = ({ scale, color, position, rotation }) => {
    return (
        <mesh scale={scale} position={position} rotation={rotation} castShadow>
            <sphereBufferGeometry />
            <meshNormalMaterial color={color} transparent={0.5}  />
        </mesh>
    )
}

const ArrayOfSpheres = () => {

    const renderSpheres = () => array.map(({ scale, color, position, rotation}) => <Ball scale={scale} color={color} position={position} rotation={rotation} />)

    return (
          <mesh>
              {renderSpheres()}
          </mesh>
    )
}

const TextLayer = ({ text, position, color }) => {

    const textOptions =  {
		size: 12,
		height: 5,
		curveSegments: 5,
		bevelEnabled: false,
		bevelThickness: 5,
		bevelSize: 4,
		bevelOffset: 0,
		bevelSegments: 2
	};

    return(
        <mesh scale={0.1} position={position}>
            <Text3D font={fontUrl} {...textOptions}>
               {text}
              <meshStandardMaterial color={color} roughness={10} />
            </Text3D>
        </mesh>
    )
}


const Plane = ({ color, position, rotation }) => {

    return(
        <mesh scale={100} position={position} rotation={rotation} >
            <planeBufferGeometry args={[24,20]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

const Scene = () => {
    return(
        <mesh>
            <OrbitControls />
            <Plane color={"cyan"} position={[0,-1,0]} rotation={[ angleToRadians(-90), 0,0]}  receiveShadow />
            <spotLight  args={["#fff", 1.5, 7]} position={[4, 3, 0]} intensity={1}  castShadow />
            <PerspectiveCamera position={[-2,1.5,9]} rotation={[0,0,45]}  makeDefault  />
            <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={0.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
        />
           <ArrayOfSpheres />
            <ambientLight intensity={0.25} castShadow />
             <TextLayer text={"Medallion"} position={[-2,1.5,2]} color={"red"} />
             <TextLayer text={"Page"} position={[-3,-1,1]} color={"red"} />
             <TextLayer text={"NOT FOUND"} position={[3,-0.5,-5]} color={"grey"} />
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


const NotFound3D = () => {
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

export default NotFound3D