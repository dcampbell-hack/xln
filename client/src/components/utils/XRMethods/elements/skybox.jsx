import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";


export const Skybox = () => {
  const { scene } = useThree();

  // useEffect(() => {
  //   scene.background = new CubeTextureLoader()
  //     .setPath("images/texture/skybox/")
  //     .load([
  //       "left.jpeg",
  //       "right.jpeg",
  //       "top.jpeg",
  //       "bottom.jpeg",
  //       "back.jpeg",
  //       "front.jpeg"
  //     ]);
  // }, [scene]);

  return <></>;
};
