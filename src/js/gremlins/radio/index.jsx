/**
 *  @typedef {GremlinsTypes.OnEventType} OnEventType
 *  @typedef {GremlinsTypes.Gremlins.CheckProps} CheckProps
 *  @typedef {GremlinsTypes.Gremlins.Radio.RadioProps} RadioProps
 */

/**
 *  Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  CheckGremlin
} from '#gremlins/gremlins'

import Field from '#gremlins/gremlins/radio/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {CheckGremlin<CheckProps & RadioProps>}
 */
export default class Radio extends CheckGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }

  /**
   *  @param {string} name
   *  @param {string | string[]} [value]
   *  @param {boolean} [checked]
   */
  handleChange = (value, checked) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
    } = this.props

    onChange(value, checked)
  }

  /**
   *  @param {string} name
   *  @param {string | string[]} [value]
   *  @param {boolean} [checked]
   */
  handleClick = (value, checked) => {
    const {
      onClick = DEFAULT_HANDLE_EVENT
    } = this.props

    onClick(value, checked)
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      checked,
      defaultChecked,
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
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        onClick={this.handleClick}
        fieldRef={fieldRef}
      />
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderField()}
      </div>
    )
  }
}

Radio.propTypes = {
  ...CheckGremlin.propTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
