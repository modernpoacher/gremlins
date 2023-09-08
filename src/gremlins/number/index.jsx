/**
 * NumberGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ValueGremlin } from '@modernpoacher/gremlins/gremlins'

import Field from './field/index.jsx'

export default class NumberGremlin extends ValueGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }

  handleChange = (value) => {
    const {
      onChange
    } = this.props

    onChange(value)
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    return (
      <Field
        id={id}
        name={name}
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

NumberGremlin.defaultProps = {
  ...ValueGremlin.defaultProps
}
