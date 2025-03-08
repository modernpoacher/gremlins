/**
 *  @typedef {GremlinsTypes.OnEventType} OnEventType
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 *  @typedef {GremlinsTypes.Gremlins.Select.SelectProps} SelectProps
 */

/**
 *  SelectGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  ValueGremlin
} from '#gremlins/gremlins'

import Field from '#gremlins/gremlins/select/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {ValueGremlin<ValueProps & SelectProps>}
 */
export default class SelectGremlin extends ValueGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }

  /**
   *  @param {SelectProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      value,
      defaultValue,
      multiple,
      children,
      ...superProps
    } = props

    return (
      /**
       *  `value` may be `string` or `string[]`
       */
      (value !== this.props.value) ||
      /**
       *  `defaultValue` may be `string` or `string[]`
       */
      (defaultValue !== this.props.defaultValue) ||
      super.shouldComponentUpdate(superProps) ||
      (multiple !== this.props.multiple) ||
      (children !== this.props.children)
    )
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
      multiple = false,
      fieldRef,
      children
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
