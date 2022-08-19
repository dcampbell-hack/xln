import { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import io  from 'socket.io-client'

import Lola from '../models/Lola'


// const socket = io();



const characterActions = [
  {
    action: 'StandingIdle',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 5133
  },
  {
    action: 'RunForward',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 899
  },
  {
    action: 'RunBack',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 699
  },
  {
    action: 'TurnLeft',
    position: [0,0,0],
    rotation: [45, 90, 180, 360],
    duration: 1266
  },
  {
    action: 'TurnRight',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 1133
  },
  {
    action: 'DiveForward',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 1666
  },
  {
    action: 'MeleePunch',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 1033
  },
  {
    action: 'MeleeKick',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 1466
  },
  {
    action: 'RunningJump',
    position: [0,0,0],
    rotation: [0,0,0],
    duration: 0
  },
]

const DirectionalButtons = ({ setActions }) => {
  return(
    <div className='ui-interface directional'>
          <div className='square full' onClick={() => setActions(characterActions[1].action) }><i className="fa-solid fa-caret-up"></i></div>
          <div className='row'>
            <div className='square full' onClick={() => setActions(characterActions[4].action) }><i className="fa-solid fa-caret-left"></i></div>
            <div className='square full' onClick={() => setActions(characterActions[3].action) }><i className="fa-solid fa-caret-right"></i></div>
          </div>
          <div className='square full' onClick={() => setActions(characterActions[2].action) }><i className="fa-solid fa-caret-down"></i></div>

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


const Character = ({ controls }) => {

const char = useRef()

const [straight, setStraight] = useState("z")
const [position, setPosition] = useState([ 0, -1, 0 ])
const [rotation, setRotation] = useState(0)

switch(controls){
  case characterActions[0].action:
    setTimeout(() => {
      //  char.current.position.z = 0;
    }, characterActions[0].duration );
    break;
    case characterActions[3].action:
       setRotation(rotation + 1)
       break;
    case characterActions[4].action:
    setRotation(rotation - 1)
    break;
     default:
       break;
}

useFrame(() => {

if(controls == characterActions[3].action ){
  char.current.rotation.y = rotation;
}

})

  return(
    <mesh ref={char}>
        <Lola controls={controls} position={position} />
        <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

const Plane = () => {

  const terrain = useRef()


  return(
    <mesh
    visible
    position={[0, -1, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    ref={terrain}
    >
      <planeBufferGeometry args={[500, 500, 128, 128 ]} />
      <meshStandardMaterial    wireframe   />
    </mesh>
  )
}





function XRScene() {

const [up, setUp] = useState(0)
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [down, setDown] = useState(0)

const [ actions, setActions ] = useState(characterActions[0].action)

console.log(actions)

useEffect(() => {
  // console.log('Socket', socket)
  // socket.on('connect', () => {
  //  console.log('Connected');
  // });

  // socket.on('disconnect', () => {
  //   console.log('Disconnected')
  // });

  // socket.on('pong', () => {
  //   setLastPong(new Date().toISOString());
  // });

  // return () => {
  //   socket.off('connect');
  //   socket.off('disconnect');
  //   socket.off('pong');
  // };
}, []);



  return (
    <div className='canvas'>
      <DirectionalButtons setActions={setActions} />
       <ActionButtons setActions={setActions} />
<Canvas className='canvas' style={{ background: "#000" }}>
  <OrbitControls />
    <ambientLight intensity={1} />
    <pointLight intensity={2} position={[ -1, 1, 3]} color="red" />
    <pointLight intensity={2} position={[ 1, 1, 3]} color="blue" />
    <pointLight intensity={2} position={[ 0, 3, -10]} color="white" />

    {/* <Box up={up} down={down} left={left} right={right} /> */}
    <Plane />
    <Suspense fallback={null}> 
      <Character controls={actions} position={[0,-1,0]} />
    </Suspense>
</Canvas>
</div>
  )
}

export default XRScene
