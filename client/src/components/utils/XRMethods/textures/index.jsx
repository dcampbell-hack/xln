import { useTexture } from '@react-three/drei';
import dirtImg from '/images/texture/red_mud/red_mud_stones_diff.jpg'
import grassImg from '/images/texture/forrest_ground/forrest_ground_01_diff.jpg'
//import glassImg from '/images/texture/glass.png'
import metalImg from '/images/texture/metal_plate/metal_plate_disp.png'
//import logImg from '/images/texture/log.jpg'
import woodImg from '/images/texture/wood_worn/wood_cabinet_worn_long_diff.jpg'

import { TextureLoader } from 'three'

export const dirt = new TextureLoader().load(dirtImg);
//export const glass = new TextureLoader().load(glassImg);
export const grass = new TextureLoader().load(grassImg);
export const wood = new TextureLoader().load(woodImg);
//export const log = new TextureLoader().load(logImg);
export const metal = new TextureLoader().load(metalImg);