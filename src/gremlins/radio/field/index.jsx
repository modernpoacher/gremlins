/**
 * RadioField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckField } from '@modernpoacher/gremlins/components/field'

export default class RadioField extends CheckField {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }

  handleClick = ({ target: { value } }) => {
    const { onClick } = this.props

    onClick(value)
  }

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props

    onChange(value)
  }

  render () {
    const {
      checked,
      id,
      name,
      value,
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
            checked={checked}
            id={id}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            tabIndex={tabIndex}
            accessKey={accessKey}
            onClick={this.handleClick}
            onChange={this.handleChange}
            className={className}
            type='radio'
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
          defaultChecked={defaultChecked}
          id={id}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          tabIndex={tabIndex}
          accessKey={accessKey}
          onClick={this.handleClick}
          onChange={this.handleChange}
          className={className}
          type='radio'
          ref={fieldRef}
        />
        <label htmlFor={id}>
          {String.fromCodePoint(8203)}
        </label>
      </>
    )
  }
}

RadioField.propTypes = {
  ...CheckField.propTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

RadioField.defaultProps = {
  ...CheckField.defaultProps
}
