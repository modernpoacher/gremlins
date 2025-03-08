/**
 *  @typedef {GremlinsTypes.Gremlins.CheckProps} CheckProps
 */

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

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function Checked (args) {
  return (
    <form>
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
    </form>
  )
}

Checked.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'radio',
  name: 'radio'
}

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultChecked (args) {
  return (
    <form>
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
    </form>
  )
}

DefaultChecked.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'radio',
  name: 'radio'
}
