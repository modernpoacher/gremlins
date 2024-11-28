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
    <RadioState value='two' checked>
      <RadioGremlin
        {...args}
        id='radio-a'
        value='one'
      />
      <RadioGremlin
        {...args}
        id='radio-b'
        value='two'
      />
      <RadioGremlin
        {...args}
        id='radio-c'
        value='three'
      />
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
    <RadioState value='two' defaultChecked>
      <RadioGremlin
        {...args}
        id='radio-1'
        value='one'
      />
      <RadioGremlin
        {...args}
        id='radio-2'
        value='two'
      />
      <RadioGremlin
        {...args}
        id='radio-3'
        value='three'
      />
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
