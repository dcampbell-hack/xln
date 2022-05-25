import * as React from "react";
import { useFrame } from "@react-three/fiber";
// React Spring
import { useSpring, animated } from "@react-spring/three";
import {
  MeshWobbleMaterial
} from "@react-three/drei";


export const SpinningMesh = ({ position, color, speed, args }) => {
    //ref to target the mesh
    const mesh = React.useRef();
  
    //useFrame allows us to re-render/update rotation on each frame
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  
    //Basic expand state
    const [expand, setExpand] = React.useState(false);
    // React spring expand animation
    const props = useSpring({
      scale: expand ? 1.4 : 1,
    });
    return (
      <animated.mesh
        position={position}
        ref={mesh}
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        castShadow
      >
        <boxBufferGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          color={color}
          speed={speed}
          attach="material"
          factor={0.6}
          skinning={undefined}
          vertexTangents={undefined}
          morphTargets={undefined}
          morphNormals={undefined}
        />
      </animated.mesh>
    );
  };

        //Using Drei box if you want
      // <Box {...props} ref={mesh} castShadow>
      //   <MeshWobbleMaterial
      //     {...props}
      //     attach='material'
      //     factor={0.6}
      //     Speed={1}
      //   />
      // </Box>