import React from 'react'

import TextGremlin from '@modernpoacher/gremlins/gremlins/text'
import TextState from '#stories/state/text'

export default {
  title: 'Stories/Gremlins/Text',
  component: TextGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Value (args) {
  return (
    <TextState value='Value'>
      <TextGremlin {...args} />
    </TextState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}

export function DefaultValue (args) {
  return (
    <TextState defaultValue='Default value'>
      <TextGremlin {...args} />
    </TextState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}
