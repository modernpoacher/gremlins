import React from 'react'

import NumberGremlin from '@modernpoacher/gremlins/gremlins/number'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Gremlins/Number',
  component: NumberGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Value (args) {
  return (
    <NumberState value={1}>
      <NumberGremlin {...args} />
    </NumberState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}

export function DefaultValue (args) {
  return (
    <NumberState defaultValue={1}>
      <NumberGremlin {...args} />
    </NumberState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}
