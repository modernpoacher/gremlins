/**
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 */

import React from 'react'

import TextareaGremlin from '@modernpoacher/gremlins/gremlins/textarea'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Gremlins/Textarea',
  component: TextareaGremlin,
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
      <TextareaState value='Value'>
        <TextareaGremlin {...args} />
      </TextareaState>
    </form>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'textarea',
  name: 'textarea'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <TextareaState defaultValue='Default value'>
        <TextareaGremlin {...args} />
      </TextareaState>
    </form>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'textarea',
  name: 'textarea'
}
