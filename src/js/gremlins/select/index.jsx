/**
 * SelectGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ValueGremlin } from '#gremlins/gremlins'

import {
  DEFAULT_HANDLE_CHANGE
} from '#gremlins/common'

import Field from './field/index.jsx'

export default class SelectGremlin extends ValueGremlin {
  shouldComponentUpdate (props, state) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.multiple !== this.props.multiple) ||
      (props.children !== this.props.children)
    )
  }

  getClassName () {
    return classnames(super.getClassName(), 'select')
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
      multiple = false,
      fieldRef,
      children
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
        multiple={multiple}
        onChange={this.handleChange}
        fieldRef={fieldRef}>
        {children}
      </Field>
    )
  }
}

SelectGremlin.propTypes = {
  ...ValueGremlin.propTypes,
  multiple: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    )
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    )
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}
