/**
 * CheckboxGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckGremlin } from '@modernpoacher/gremlins/gremlins'

import Field from './field/index.jsx'

export default class CheckboxGremlin extends CheckGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  handleClick = (value) => {
    const {
      onClick
    } = this.props

    onClick(value)
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
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onClick={this.handleClick}
        onChange={this.handleChange}
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

CheckboxGremlin.propTypes = {
  ...CheckGremlin.propTypes,
  value: PropTypes.string.isRequired
}

CheckboxGremlin.defaultProps = {
  ...CheckGremlin.defaultProps
}
