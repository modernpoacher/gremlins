import React from 'react'

import EmailGremlin from '@modernpoacher/gremlins/gremlins/email'
import EmailState from '#stories/state/email'

export default {
  title: 'Stories/Gremlins/Email',
  component: EmailGremlin,
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
    <EmailState value='email@email.com'>
      <EmailGremlin {...args} />
    </EmailState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'email',
  name: 'email'
}

export function DefaultValue (args) {
  return (
    <EmailState defaultValue='email@email.com'>
      <EmailGremlin {...args} />
    </EmailState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'email',
  name: 'email'
}
