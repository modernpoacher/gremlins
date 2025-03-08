/**
 *  @typedef {GremlinsTypes.Components.Field.CheckProps} CheckProps
 *  @typedef {GremlinsTypes.Components.Field.Checkbox.CheckboxProps} CheckboxProps
 */

/**
 *  CheckboxField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  CheckField,
  toInputValue
} from '#gremlins/components/field'

/**
 *  @extends {CheckField<CheckProps & CheckboxProps>}
 */
export default class CheckboxField extends CheckField {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  render () {
    const {
      name,
      id,
      value,
      checked,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      fieldRef
    } = this.props

    const className = this.getClassName()

    if (typeof checked === 'boolean') {
      return (
        <>
          <input
            name={name}
            id={id}
            value={toInputValue(value)}
            checked={checked}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            tabIndex={tabIndex}
            accessKey={accessKey}
            onChange={this.handleChange}
            onClick={this.handleClick}
            className={className}
            type='checkbox'
            ref={fieldRef}
          />
          <label htmlFor={id}>
            {String.fromCodePoint(8203)}
          </label>
        </>
      )
    }

    const {
      defaultChecked
    } = this.props

    return (
      <>
        <input
          name={name}
          id={id}
          value={toInputValue(value)}
          defaultChecked={defaultChecked}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          tabIndex={tabIndex}
          accessKey={accessKey}
          onChange={this.handleChange}
          onClick={this.handleClick}
          className={className}
          type='checkbox'
          ref={fieldRef}
        />
        <label htmlFor={id}>
          {String.fromCodePoint(8203)}
        </label>
      </>
    )
  }
}

CheckboxField.propTypes = {
  ...CheckField.propTypes,
  value: PropTypes.string.isRequired
}
