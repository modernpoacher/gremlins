import React from 'react'

import SelectGremlin from '@modernpoacher/gremlins/gremlins/select'
import SelectState from '#stories/state/select'

export default {
  title: 'Stories/Gremlins/Select',
  component: SelectGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    },
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
    }
  }
}

export function Value (args) {
  return (
  <SelectState value='one'>
    <SelectGremlin {...args}>
      <option value='one'>One</option>
      <option value='two'>Two</option>
      <option value='three'>Three</option>
    </SelectGremlin>
  </SelectState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

export function DefaultValue (args) {
  return (
    <SelectState defaultValue='one'>
      <SelectGremlin {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectGremlin>
    </SelectState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}
