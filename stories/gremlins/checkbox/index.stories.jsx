import React from 'react'

import CheckboxGremlin from '@modernpoacher/gremlins/gremlins/checkbox'
import CheckboxState from '#stories/state/checkbox'

export default {
  title: 'Stories/Gremlins/Checkbox',
  component: CheckboxGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Checked (args) {
  return (
    <CheckboxState checked>
      <CheckboxGremlin {...args} value='Value' />
    </CheckboxState>
  )
}

Checked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}

export function DefaultChecked (args) {
  return (
    <CheckboxState defaultChecked>
      <CheckboxGremlin {...args} value='Value' />
    </CheckboxState>
  )
}

DefaultChecked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}
