import React from 'react'

import TextareaGremlin from '@modernpoacher/gremlins/gremlins/textarea'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Gremlins/Textarea',
  component: TextareaGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Value (args) {
  return (
    <TextareaState value='Value'>
      <TextareaGremlin {...args} />
    </TextareaState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'textarea',
  name: 'textarea'
}

export function DefaultValue (args) {
  return (
    <TextareaState defaultValue='Default value'>
      <TextareaGremlin {...args} />
    </TextareaState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'textarea',
  name: 'textarea'
}
