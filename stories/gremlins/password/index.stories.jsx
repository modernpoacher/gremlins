import React from 'react'

import PasswordGremlin from '@modernpoacher/gremlins/gremlins/password'
import PasswordState from '#stories/state/password'

export default {
  title: 'Stories/Gremlins/Password',
  component: PasswordGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Value (args) {
  return (
    <PasswordState value='password'>
      <PasswordGremlin {...args} />
    </PasswordState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'password',
  name: 'password'
}

export function DefaultValue (args) {
  return (
    <PasswordState defaultValue='password'>
      <PasswordGremlin {...args} />
    </PasswordState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'password',
  name: 'password'
}
