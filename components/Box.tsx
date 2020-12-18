import React, { useRef, useState } from 'react'
import { useFrame, Vector3 } from 'react-three-fiber'
import { Mesh } from 'three'

export interface BoxProps {
  position: Vector3
  size?: number
  color?: string
  hoverColor?: string
  rotationSpeed?: number
  activeScale?: Vector3
}

export function Box(props: BoxProps) {
  const {
    position,
    size = 2,
    color = 'orange',
    hoverColor = 'hotpink',
    rotationSpeed = 0.01,
    activeScale = [2, 2, 2],
  } = props
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += rotationSpeed
  })

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={active ? activeScale : [1, 1, 1]}
      onClick={(_event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[size, size, size]} />
      <meshStandardMaterial color={hovered ? hoverColor : color} />
    </mesh>
  )
}
