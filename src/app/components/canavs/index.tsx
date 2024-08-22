import {  Grid } from '@react-three/drei'
import { Canvas,  } from '@react-three/fiber'
import React, { LegacyRef, useEffect, useRef } from 'react'
import { State, useStore } from '@/app/store'
import { generateShape } from './utils'
import Ruler, { RulerVertical } from '../ruler'


export default function CanvasRoot() {
    const shapes = useStore((state: State) => state.shapes)
    console.log("🚀 ~ CanvasRoot ~ shapes:", shapes)
    
  return (
   <Canvas className='flex-auto w-4/5' orthographic raycaster={{ params: { Mesh: {}, Line: { threshold: 5 }, LOD: {}, Points: {threshold: 1}, Sprite: {}  } }} camera={{ position: [0, 0, 500], zoom: 1 }}>
     <ambientLight intensity={0.5} />
    {shapes.map(({type, id}) => generateShape(type, id))}
    <Ruler />
     <RulerVertical />
    <Grid
      rotation={[Math.PI / 2, 0, 0]}
      cellSize={100}
      cellThickness={2}
      cellColor="black"
      sectionSize={50}
      sectionThickness={1.5}
      sectionColor="lightgray"
      fadeDistance={10000}
      infiniteGrid
    />
  </Canvas>
  )
}

