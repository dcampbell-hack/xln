import React, { useMemo } from "react";
import { useTexture } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
import niceColors from "nice-color-palettes";

// Constants
const paletteIndex = 8;

export const Cube = (props) => {
  const [cubeRef] = useBox(() => ({
    mass: 1,
    args: [0.5, 0.5, 0.5],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));

  /** Random cube color */
  const color = useMemo(
    () =>
      niceColors[paletteIndex][
        Math.floor(Math.random() * niceColors[paletteIndex].length)
      ],
    []
  );

  const terrainTextures = useTexture({ 
    map: '/images/texture/wood_worn/wood_cabinet_worn_long_diff.jpg', 
    displacementMap: '/images/texture/wood_worn/wood_cabinet_worn_long_disp.png',  
    normalMap: '/images/texture/wood_worn/wood_cabinet_worn_long_diff.jpg', 
    roughnessMap: '/images/texture/wood_worn/wood_cabinet_worn_long_arm.jpg', 
    aoMap: '/images/texture/wood_worn/wood_cabinet_worn_long_ao.jpg'  
});

  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <meshLambertMaterial color={color} />
      {/* <meshLambertMaterial color={color} {...terrainTextures} /> */}
    </mesh>
  );
};
