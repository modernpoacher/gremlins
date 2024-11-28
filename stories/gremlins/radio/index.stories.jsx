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
    }
  }
}

export function Checked (args) {
  return (
    <RadioState checked>
      <RadioGremlin {...args} value='Value' />
    </RadioState>
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
  id: 'radio',
  name: 'radio'
}

export function DefaultChecked (args) {
  return (
    <RadioState defaultChecked>
      <RadioGremlin {...args} value='Value' />
    </RadioState>
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
  id: 'radio',
  name: 'radio'
}
