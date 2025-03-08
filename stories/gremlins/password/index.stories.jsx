/**
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 */

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

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <PasswordState value='password'>
        <PasswordGremlin {...args} />
      </PasswordState>
    </form>
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

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <PasswordState defaultValue='password'>
        <PasswordGremlin {...args} />
      </PasswordState>
    </form>
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
