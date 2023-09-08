import React from 'react'

import RadioGremlin from '@modernpoacher/gremlins/gremlins/radio'
import RadioState from '#stories/state/radio'

export default {
  title: 'Stories/Gremlins/Radio',
  component: RadioGremlin,
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
    <RadioState value='value'>
      <RadioGremlin {...args} id='radio' value='value' />
    </RadioState>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  name: 'radio'
}

export function DefaultValue (args) {
  return (
    <RadioState defaultValue='value'>
      <RadioGremlin {...args} id='radio' value='value' />
    </RadioState>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  name: 'radio'
}
