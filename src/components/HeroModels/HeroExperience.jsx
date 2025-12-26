import React from 'react'
import {Canvas} from '@react-three/fiber'


const HeroExperience = () => {
  return (
      <Canvas>
        <mesh>
          <directionalLight color="red" position={[0, 0, 5]}/>
          <boxGeometry/>
          <meshStandardMaterial/>
        </mesh>
      </Canvas>
  )
}
export default HeroExperience
