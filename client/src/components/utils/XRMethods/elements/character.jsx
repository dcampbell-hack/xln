import React, { useRef, useState, useEffect } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame, Vector3 } from "@react-three/fiber";
import { useKeyboardControls } from "../../hooks/useKeyboardControls";
import Lola from "../../../XR/models/Lola";

const SPEED = 6;

export const Character = (props) => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = useKeyboardControls();

  // const { camera } = useThree();
  // const [ref, api] = useSphere(() => ({
  //   mass: 1,
  //   type: "Dynamic",
  //   ...props,
  // }));

  // const velocity = useRef([0, 0, 0]);

  // useEffect(() => {
  //   api.velocity.subscribe((v) => (velocity.current = v));
  // }, [api.velocity]);

  // useFrame(() => {
  //   camera.position.copy(ref.current.position);
  //   const direction = new Vector3();
  //   const frontVector = new Vector3(
  //     0,
  //     0,
  //     (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
  //   );
  //   const sideVector = new Vector3(
  //     (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
  //     0,
  //     0
  //   );

  //   direction
  //     .subVectors(frontVector, sideVector)
  //     .normalize()
  //     .multiplyScalar(SPEED)
  //     .applyEuler(camera.rotation);

  //   api.velocity.set(direction.x, velocity.current[1], direction.z);
  // });

  return (
    <mesh>
      <Lola controls={props.controls}/>
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};
