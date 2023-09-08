/**
 * Gremlin component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Field from '@modernpoacher/gremlins/components/field'

function onChange () {
  /* */
}

function onClick () {
  /* */
}

export default class Gremlin extends Component {
  getClassName () {
    const {
      required,
      disabled,
      readOnly
    } = this.props

    return classnames('gremlin', { required, disabled, readOnly })
  }

  getId () {
    const {
      id,
      name
    } = this.props

    return id || name
  }

  shouldComponentUpdate (props) {
    return (
      (props.name !== this.props.name) ||
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

  renderField () {
    const id = this.getId()

    const {
      name,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder,
      onChange,
      fieldRef
    } = this.props

    return (
      <Field
        id={id}
        name={name}
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

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderField()}
      </div>
    )
  }
}

Gremlin.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

Gremlin.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
  onChange
}

export class ValueGremlin extends Gremlin {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
  }
}

ValueGremlin.propTypes = {
  ...Gremlin.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}

ValueGremlin.defaultProps = {
  ...Gremlin.defaultProps
}

export class CheckGremlin extends Gremlin {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.checked !== this.props.checked) ||
      (props.onClick !== this.props.onClick)
    )
  }
}

CheckGremlin.propTypes = {
  ...Gremlin.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}

CheckGremlin.defaultProps = {
  ...Gremlin.defaultProps,
  onClick
}
