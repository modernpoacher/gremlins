/**
 *  @typedef {GremlinsTypes.Gremlins.CheckProps} CheckProps
 */

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

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function Checked (args) {
  return (
    <form>
      <CheckboxState checked>
        <CheckboxGremlin {...args} value='value' />
      </CheckboxState>
    </form>
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

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultChecked (args) {
  return (
    <form>
      <CheckboxState defaultChecked>
        <CheckboxGremlin {...args} value='value' />
      </CheckboxState>
    </form>
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
