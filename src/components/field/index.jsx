/**
 * Field component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from '@modernpoacher/gremlins/common'

export default class Field extends Component {
  getClassName () {
    return 'input'
  }

  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly) ||
      (props.tabIndex !== this.props.tabIndex) ||
      (props.accessKey !== this.props.accessKey) ||
      (props.placeholder !== this.props.placeholder) ||
      (props.onChange !== this.props.onChange)
    )
  }

  render () {
    const {
      id,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    return (
      <input
        id={id}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        className={this.getClassName()}
        ref={fieldRef}
      />
    )
  }
}

Field.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  accessKey: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

Field.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
  onChange: DEFAULT_HANDLE_CHANGE
}

/**
 * ValueField component
 */
export class ValueField extends Field {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
  }

  handleChange = ({ target: { value } }) => {
    const { onChange = DEFAULT_HANDLE_CHANGE } = this.props

    onChange(value)
  }
}

ValueField.propTypes = {
  ...Field.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}

ValueField.defaultProps = {
  ...Field.defaultProps
}

/**
 * CheckField component
 */
export class CheckField extends Field {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.checked !== this.props.checked) ||
      (props.onClick !== this.props.onClick)
    )
  }

  handleClick = ({ target: { checked } }) => {
    const { onClick = DEFAULT_HANDLE_CLICK } = this.props

    onClick(checked)
  }

  handleChange = ({ target: { checked } }) => {
    const { onChange = DEFAULT_HANDLE_CHANGE } = this.props

    onChange(checked)
  }
}

CheckField.propTypes = {
  ...Field.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}

CheckField.defaultProps = {
  ...Field.defaultProps,
  onClick: DEFAULT_HANDLE_CLICK
}
