/**
 * CheckboxGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckGremlin } from '#gremlins/gremlins'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from '#gremlins/common'

import Field from './field/index.jsx'

export default class CheckboxGremlin extends CheckGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  handleChange = (value, checked) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE
    } = this.props

    onChange(value, checked)
  }

  handleClick = (value, checked) => {
    const {
      onClick = DEFAULT_HANDLE_CLICK
    } = this.props

    onClick(value, checked)
  }

  shouldComponentUpdate (props, state) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
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

CheckboxGremlin.propTypes = {
  ...CheckGremlin.propTypes,
  value: PropTypes.string.isRequired
}
