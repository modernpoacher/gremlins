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
    <CheckboxState value='value'>
      <CheckboxGremlin {...args} value='value' />
    </CheckboxState>
  )
}

Checked.args = {
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
    <CheckboxState defaultValue='value'>
      <CheckboxGremlin {...args} value='value' />
    </CheckboxState>
  )
}

DefaultChecked.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}
