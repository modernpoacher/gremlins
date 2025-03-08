/**
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 */

import React from 'react'

import TextGremlin from '@modernpoacher/gremlins/gremlins/text'
import TextState from '#stories/state/text'

export default {
  title: 'Stories/Gremlins/Text',
  component: TextGremlin,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <TextState value='Value'>
        <TextGremlin {...args} />
      </TextState>
    </form>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <TextState defaultValue='Default value'>
        <TextGremlin {...args} />
      </TextState>
    </form>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}
