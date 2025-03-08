/**
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 */

import React from 'react'

import NumberGremlin from '@modernpoacher/gremlins/gremlins/number'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Gremlins/Number',
  component: NumberGremlin,
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
      <NumberState value={1}>
        <NumberGremlin {...args} />
      </NumberState>
    </form>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <NumberState defaultValue={1}>
        <NumberGremlin {...args} />
      </NumberState>
    </form>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}
