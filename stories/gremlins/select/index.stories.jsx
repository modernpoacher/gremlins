/**
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 */

import React from 'react'

import SelectGremlin from '@modernpoacher/gremlins/gremlins/select'
import SelectState from '#stories/state/select'

export default {
  title: 'Stories/Gremlins/Select',
  component: SelectGremlin,
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
      <SelectState value='one'>
        <SelectGremlin {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectGremlin>
      </SelectState>
    </form>
  )
}

Value.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <SelectState defaultValue='one'>
        <SelectGremlin {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectGremlin>
      </SelectState>
    </form>
  )
}

DefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function MultipleValue (args) {
  return (
    <form>
      <SelectState value={['one', 'three']}>
        <SelectGremlin multiple {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
          <option value='four'>Four</option>
          <option value='five'>Five</option>
          <option value='six'>Six</option>
        </SelectGremlin>
      </SelectState>
    </form>
  )
}

MultipleValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function MultipleDefaultValue (args) {
  return (
    <form>
      <SelectState defaultValue={['one', 'three']}>
        <SelectGremlin multiple {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
          <option value='four'>Four</option>
          <option value='five'>Five</option>
          <option value='six'>Six</option>
        </SelectGremlin>
      </SelectState>
    </form>
  )
}

MultipleDefaultValue.args = {
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}
