/**
 * TextareaGremlin component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueGremlin } from '@modernpoacher/gremlins/gremlins'

import Field from './field/index.jsx'

export default class TextareaGremlin extends ValueGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
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

TextareaGremlin.propTypes = {
  ...ValueGremlin.propTypes
}

TextareaGremlin.defaultProps = {
  ...ValueGremlin.defaultProps
}
