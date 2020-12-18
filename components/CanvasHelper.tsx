import React, { useEffect, useRef, useState } from 'react'
import { useThree } from 'react-three-fiber'

export interface CanvasHelperProps {
  fullscreen?: boolean
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export function CanvasHelper(props: CanvasHelperProps) {
  const { fullscreen } = props
  const { size } = useThree()
  const scene = useRef()

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log('windowDimensions', windowDimensions)
  console.log('canvas size', size)
  return <scene ref={scene}>{/* ... */}</scene>
}
