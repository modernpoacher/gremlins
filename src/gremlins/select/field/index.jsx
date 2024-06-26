/**
 * SelectField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ValueField } from '@modernpoacher/gremlins/components/field'

function getSelectedValues ({ target: { selectedOptions } }) {
  return (
    Array.from(selectedOptions)
      .map(({ value, text }) => value || text)
  )
}

function getSelectedValue ({ target: { value } }) {
  return value
}

export default class SelectField extends ValueField {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.multiple !== this.props.multiple) ||
      (props.children !== this.props.children)
    )
  }

  getClassName () {
    return classnames(super.getClassName(), 'select')
  }

  handleChange = (event) => {
    const {
      multiple,
      onChange
    } = this.props

    if (multiple) {
      onChange(getSelectedValues(event))
    } else {
      onChange(getSelectedValue(event))
    }
  }

  render () {
    const {
      id,
      name,
      value,
      defaultValue,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      multiple,
      children,
      fieldRef
    } = this.props

    const className = this.getClassName()

    return (
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        multiple={multiple}
        onChange={this.handleChange}
        className={className}
        ref={fieldRef}>
        {children}
      </select>
    )
  }
}

SelectField.propTypes = {
  ...ValueField.propTypes,
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

SelectField.defaultProps = {
  ...ValueField.defaultProps,
  multiple: false
}
