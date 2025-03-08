/**
 *  @typedef {GremlinsTypes.OnEventType} OnEventType
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 *  @typedef {GremlinsTypes.Gremlins.Number.NumberProps} NumberProps
 */

/**
 *  NumberGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  ValueGremlin
} from '#gremlins/gremlins'

import Field from '#gremlins/gremlins/number/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {ValueGremlin<ValueProps & NumberProps>}
 */
export default class NumberGremlin extends ValueGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }

  /**
   *  @param {string | string[]} [value]
   */
  handleChange = (value) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
    } = this.props

    onChange(value)
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      defaultValue,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    return (
      <Field
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        fieldRef={fieldRef}
      />
    )
  }
}

NumberGremlin.propTypes = {
  ...ValueGremlin.propTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
