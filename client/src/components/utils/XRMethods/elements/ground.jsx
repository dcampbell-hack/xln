import React from "react";
import { useTexture } from '@react-three/drei';
import { usePlane } from '@react-three/cannon'


export const Ground = (props) => {
    const [ ref ] = usePlane(() => ({ rotation: [ - Math.PI / 2, 0, 0 ], ...props }));
    const terrainTextures = useTexture({ 
        map: '/images/texture/aerial_rocks/aerial_rocks_02_diff.jpg', 
        displacementMap: '/images/texture/aerial_rocks/aerial_rocks_02_ao_1k.jpg',  
        normalMap: '/images/texture/aerial_rocks/aerial_rocks_02.webp', 
        roughnessMap: '/images/texture/aerial_rocks/aerial_rocks_02_rough.jpg', 
        aoMap: '/images/texture/aerial_rocks/aerial_rocks_02_ao_1k.jpg'  
    });

    return(
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100,100, 100]}  />
            <meshStandardMaterial { ...terrainTextures } attach="material"  />
        </mesh>
    )
}
