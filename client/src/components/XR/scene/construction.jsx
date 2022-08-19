import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment, Text3D, useTexture, Sky, Loader } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import fontUrl from '../../assets/fonts/xenosphere.json';
import * as THREE from "three";
import { FPSControls } from 'react-three-fpscontrols';

import { Cube } from '../utils/XRMethods/elements/cube';
import { Ground } from '../utils/XRMethods/elements/ground';
import { Character } from '../utils/XRMethods/elements/character';

const angleToRadians = angleInDeg => (Math.PI / 180 ) * angleInDeg;


const characterActions = [
    {
      action: 'StandingIdle',
      movement: "stand",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 5133
    },
    {
      action: 'RunForward',
      movement: "forward",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 899
    },
    {
      action: 'RunBack',
      movement: "back",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 699
    },
    {
      action: 'TurnLeft',
      movement: "left",
      position: [0,0,0],
      rotation: [45, 90, 180, 360],
      duration: 1266
    },
    {
      action: 'TurnRight',
      movement: "right",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 1133
    },
    {
      action: 'DiveForward',
      movement: "dive",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 1666
    },
    {
      action: 'MeleePunch',
      movement: "punch",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 1033
    },
    {
      action: 'MeleeKick',
      movement: "kick",
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 1466
    },
    {
      action: 'RunningJump',
      movement: 'jump',
      position: [0,0,0],
      rotation: [0,0,0],
      duration: 0
    },
  ]
  
  const DirectionalButtons = ({ setMovement, movement }) => {

    console.log('Check func', characterActions )

    return(
      <div className='ui-interface directional'>
            <div className='square full' onClick={() => setMovement({ ...movement, moveForward: true, moveBackward: false, moveLeft: false, moveRight: false }) }><i className="fa-solid fa-caret-up"></i></div>
            <div className='row'>
              <div className='square full' onClick={() => setMovement({ ...movement, moveForward: false, moveBackward: false, moveLeft: true, moveRight: false }) }><i className="fa-solid fa-caret-left"></i></div>
              <div className='square full' onClick={() => setMovement({ ...movement, moveForward: false, moveBackward: false, moveLeft: false, moveRight: true}) }><i className="fa-solid fa-caret-right"></i></div>
            </div>  
            <div className='square full' onClick={() => setMovement({ ...movement, moveForward: false, moveBackward: true, moveLeft: false, moveRight: false }) }><i className="fa-solid fa-caret-down"></i></div>

      </div> 
    )
  }
  
  
  const ActionButtons = ({ setActions }) => {
    return(
      <div className='ui-interface actions'>
          <div className='square outline' onClick={() => setActions(characterActions[6].action) }><i className="fa-solid fa-diamond"></i></div>
          <div className='row'>
          <div className='square outline' onClick={() => setActions(characterActions[7].action) }><i className="fa-solid fa-square"></i></div>
          <div className='square outline' onClick={() => setActions(characterActions[5].action) }><i className="fa-solid fa-circle"></i></div>
          </div>
          <div className='square outline' onClick={() => setActions(characterActions[0].action) }><i className="fa-solid fa-star"></i></div>
       </div>
    )
  }
  
  
  function runAnimation(transform, value, duration){
    setTimeout(() => {
      transform = value;
    }, duration)
  }
  
  
//   const Character = ({ controls, position }) => {
  
//   const char = useRef()
  
//   const [straight, setStraight] = useState("z")
//   const [rotation, setRotation] = useState([0,3,0])
  
//   switch(controls){
//     case characterActions[0].action:
//       setTimeout(() => {
//         //  char.current.position.z = 0;
//       }, characterActions[0].duration );
//       break;
//       case characterActions[3].action:
//          setRotation(rotation + 1)
//          break;
//       case characterActions[4].action:
//       setRotation(rotation - 1)
//       break;
//        default:
//          break;
//   }
  
//   useFrame(() => {
  
//   if(controls == characterActions[3].action ){
//     char.current.rotation.y = rotation;
//   }
  
//   })
  
// console.log('Character loaded ', controls)

//     return(
//       <mesh ref={char}  >
//           <Lola controls={controls} position={position} rotation={rotation} />
//           <meshStandardMaterial color="yellow"  />
//       </mesh>
//     )
//   }
  
//   const Plane = () => {
  
//     const terrain = useRef()
  
  
//     return(
//       <mesh
//       visible
//       position={[0, -1, 0]}
//       rotation={[-Math.PI / 2, 0, 0]}
//       ref={terrain}
//       >
//         <planeBufferGeometry args={[500, 500, 128, 128 ]} />
//         <meshStandardMaterial    wireframe   />
//       </mesh>
//     )
//   }
  

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const array = [
    {
        scale: 1,
        color: "yellow",
        position: [ 4, 2, 5 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 1,
        color: "pink",
        position: [ -5, 4, -2 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 1,
        color: "green",
        position: [ 4, 5, 5 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 1,
        color: "blue",
        position: [ 1, 1, 8 ],
        rotation: [ 3, 5, 1]
    },
    {
        scale: 0.5,
        color: "purple",
        position: [ 4, 1, 6 ],
        rotation: [ 3, 5, 1]
    }
]


const Ball = ({ scale, color, position, rotation }) => {
    return (
        <mesh scale={scale} position={position} rotation={rotation} >
            <sphereBufferGeometry />
            <meshNormalMaterial color={color} transparent={0.5}  />
        </mesh>
    )
}

const ArrayOfSpheres = () => {

    const renderSpheres = () => array.map(({ scale, color, position, rotation}) => <Ball key={color} scale={scale} color={color} position={position} rotation={rotation} />)

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




const Scene = ({ movement }) => {

    const [ actions, setActions ] = useState(characterActions[0].action)

    return(
        <mesh>
            <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2 }
            maxPolarAngle={Math.PI /2 }
            />
            <spotLight  args={["#fff", 1.5, 7]} position={[4, 3, 0]} intensity={1} />
            <directionalLight
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
            <ambientLight intensity={0.25} />
            <pointLight castShadow intensity={7} position={[100, 100, 100]} />
            <TextLayer text={"Under Contruction"} position={[-3,-1,6]} color={"silver"} />
             <TextLayer text={"Ball So Hard"} position={[-7,6,4 ]} color={"red"} />
             <TextLayer text={"Medallion XLN"} position={[-20,-1,3]} color={"gold"} />
             <Physics gravity={[0, -30, 0]}>
              <ArrayOfSpheres />
              <Cube  color={"blue"} type={"wood"} />
              <Character  controls={actions} position={[0, 0, 17]}  /> 
              <Ground position={[0, -2, 0]} />
           </Physics>
            <Environment
              background
             >
                 <mesh>
                    <sphereGeometry args={[1,100,100]} />
                    <meshBasicMaterial side={THREE.BackSide} />
                 </mesh>
             </Environment>


        </mesh>
    )
}


const XRContruction = () => {
  const [movement, setMovement ] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft:false,
    moveRight: false,
    jump: false
  })

    const [ actions, setActions ] = useState(characterActions[0].action)


  return (
    <div className="canvas">
       <DirectionalButtons setMovement={setMovement} movement={movement} />
       <ActionButtons setActions={setActions} /> 
        <Canvas shadowsMap sRGB shadows dpr={[1, 2]}>
            <Sky sunPosition={[100, 20, 100]} />
            <Suspense fallback={null}>
                <Scene movement={movement} />
            </Suspense>
        </Canvas>
        <Loader />
    </div>
  )
}

export default XRContruction