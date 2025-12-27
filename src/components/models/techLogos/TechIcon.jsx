import React, {useEffect} from 'react'
import {Canvas} from "@react-three/fiber"
import {Environment, Float, OrbitControls} from "@react-three/drei";

/**
 *
 * @returns {React.JSX.Element}
 * @constructor
 * - Load a .glb model (GLTF format)
 * - Adds basic Lights
 * - Applies environment reflections for realism
 * - Wraps the model in a floating animation
 * - Disables zoom using OrbitControls
 *
 */
import * as THREE from "three";
import {useGLTF} from "@react-three/drei";

const TechIcon = ({model}) => {

  const scene = useGLTF(model.modelPath)
  if (model.name === "Interactive Developer") {
    scene.scene.traverse((child) => {
      if (child.isMesh && child.name === "Object_5") {
        child.material = new THREE.MeshStandardMaterial({color: "gray"})
      }
    })
  }

  useEffect(() => {

  }, [scene]);

  return (
      <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5, 5, 5]} intensity={1}/>
        <Environment preset={"city"}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={model.scale}>
            <primitive object={scene.scene} rotation={model.rotation}/>
          </group>
        </Float>

        <OrbitControls enableZoom={false}></OrbitControls>
      </Canvas>
  )
}
export default TechIcon
