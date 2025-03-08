/**
 *  @typedef {GremlinsTypes.OnEventType} OnEventType
 *  @typedef {GremlinsTypes.Super.Gremlins.FieldGremlinProps} FieldGremlinProps
 *  @typedef {GremlinsTypes.Gremlins.ValueProps} ValueProps
 *  @typedef {GremlinsTypes.Gremlins.CheckProps} CheckProps
 */

/**
 *  ValueGremlin component
 *  CheckGremlin component
 */
import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldGremlin
} from '#gremlins/super/gremlins'

import {
  ValueField,
  CheckField,
  toInputValue
} from '#gremlins/components/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

export {
  toInputValue
}

/**
 *  @extends {FieldGremlin<FieldGremlinProps & ValueProps>}
 */
export class ValueGremlin extends FieldGremlin {
  /**
   *  @param {ValueProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      value,
      defaultValue,
      ...superProps
    } = props

    return (
      (value !== this.props.value) ||
      (defaultValue !== this.props.defaultValue) ||
      super.shouldComponentUpdate(superProps)
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_EVENT,
      fieldRef
    } = this.props

    return (
      <ValueField
        name={name}
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={onChange}
        fieldRef={fieldRef}
      />
    )
  }
}

ValueGremlin.propTypes = {
  ...FieldGremlin.propTypes,
  defaultValue: PropTypes.string
}

/**
 *  @extends {FieldGremlin<FieldGremlinProps & CheckProps>}
 */
export class CheckGremlin extends FieldGremlin {
  /**
   *  @param {CheckProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      checked,
      defaultChecked,
      onClick,
      ...superProps
    } = props

    return (
      (checked !== this.props.checked) ||
      (defaultChecked !== this.props.defaultChecked) ||
      super.shouldComponentUpdate(superProps) ||
      (onClick !== this.props.onClick)
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_EVENT,
      onClick = DEFAULT_HANDLE_EVENT,
      fieldRef
    } = this.props

    return (
      <CheckField
        name={name}
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        fieldRef={fieldRef}
      />
    )
  }
}

CheckGremlin.propTypes = {
  ...FieldGremlin.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}
