/**
 * TextGremlin component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueGremlin } from '#gremlins/gremlins'

import {
  DEFAULT_HANDLE_CHANGE
} from '#gremlins/common'

import Field from './field/index.jsx'

export default class TextGremlin extends ValueGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }

  handleChange = (value) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE
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

TextGremlin.propTypes = {
  ...ValueGremlin.propTypes
}
