import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Canvas } from 'react-three-fiber'
import { Box, BoxProps } from '../components/Box'

export default {
  title: 'Basic/Box',
  component: Box,
  argTypes: {
    color: { control: 'color' },
    hoverColor: { control: 'color' },
  },
} as Meta

const Template: Story<BoxProps> = (args) => {
  return (
    <Canvas style={{ height: `100vh` }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box {...args} />
    </Canvas>
  )
}

interface MultiBoxProps {
  items: Array<any>
}
const MultiTemplate: Story<MultiBoxProps> = (args) => {
  return (
    <Canvas style={{ height: `100vh` }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {args.items.map((item, index) => (
        <Box key={`box-${index}`} {...item} />
      ))}
    </Canvas>
  )
}

export const Small = Template.bind({})
Small.args = {
  size: 1,
  position: [0, 0, 0],
}

export const Big = Template.bind({})
Big.args = {
  size: 2,
  activeScale: [1.5, 1.5, 1.5],
  position: [0, 0, 0],
}
