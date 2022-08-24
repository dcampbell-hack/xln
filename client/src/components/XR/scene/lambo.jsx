import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import Lambo from "../models/Lambo";
import { Environment, OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { useDrag } from "react-use-gesture"; 
import "../../css/xr/index.scss";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const angleToRadians = angleInDeg => (Math.PI / 180 ) * angleInDeg;

const Box = () => {

  const [position, setPosition] = useState([1.9,2.5,4.25]);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(({ offset: [x, y] }) => {
    const [,, z] = position;
    setPosition([x / aspect, -y / aspect, z]);
}, { pointerEvents: true });


  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return(
    <mesh ref={boxRef}  position={position} {...bind()}>
      <boxBufferGeometry args={[1,1,1]} castShadow />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

const Ball = () => {
  return(
    <mesh position={[1,0.5,-3]}>
      <sphereGeometry args={[0.5,32,32]} castShadow />
       <meshStandardMaterial color="red" />
    </mesh>
  )
}

const TextLayer = () => {
  return(
    <mesh scale={30} position={[6,1.9,0]} rotation={[0,-1.5,0]} castShadow>
      <Text 
      characters="abcdefghijklmnopqrstuvwxyz0123456789!?"
      bevelEnabled
      bevelSize={0.05}
      >
        When Lambo?
        <meshBasicMaterial />
      </Text>
    </mesh>
  )
}

const Plane = () => {
  return(
    <mesh scale={100} position={[0, 0, 0]} rotation={[ angleToRadians(-90), 0,0]} receiveShadow>
      <planeGeometry args={[24,20]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  )
}

const Scene = () => {

  const orbitControlsRef = useRef(null);

  //   useFrame(( state) => {
  //   if(!!orbitControlsRef.current){
  //     const [ x, y] = state.mouse;
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
  //     orbitControlsRef.current.setPolarAngle(y * angleToRadians(90 - 30));
  //     orbitControlsRef.current.update()
  //   }
  // })

  useEffect(() => {
    if(!!orbitControlsRef.current){
     console.log('orbitControls', orbitControlsRef.current)
    }
  }, [orbitControlsRef.current])

  return(
    <>
        <PerspectiveCamera makeDefault position={[-4,1,1]} rotation={[ 0,-1.5,0]}  minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />
        <Lambo position={[2,0,1.5]} rotation={[0,-90,0]} />
        <Box castShadow />
        <Ball castShadow />
        <TextLayer />
        <directionalLight
         castShadow
         intensity={0.5} 
         position={[0, 10, 0]}
         shadow-mapSize-width={1024}
         shadow-mapSize-height={1024}
         shadow-camera-far={50}
         shadow-camera-left={-10}
         shadow-camera-right={10}
         shadow-camera-top={10}
         shadow-camera-bottom={-10}
         />
        <ambientLight intensity={0.25} />
        <spotLight args={["#fff", 1.5, 7]}  position={[8, 1, 0]} intensity={1} castShadow />
        <spotLight args={["#fff", 1.5, 7]}  position={[-4, 1, 0]} intensity={1} castShadow />
        <Plane />
    </>
  )

}



const XRDemo = () => {

  return (
    <div className="canvas">
      <Canvas shadow>
        <Suspense fallback={null}>
            <Scene />
         </Suspense>
      </Canvas>
      </div>
  );
};

export default XRDemo;