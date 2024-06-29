/**
 * GroupGremlin component
 *
 * @typedef {import('@modernpoacher/gremlins/gremlins').GroupGremlinProps} GroupGremlinProps
 */
/**
 * FieldGremlin component
 *
 * @typedef {import('@modernpoacher/gremlins/gremlins').FieldGremlinProps} FieldGremlinProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from '@modernpoacher/gremlins/common'

import Field, {
  ValueField,
  CheckField
} from '@modernpoacher/gremlins/components/field'

import Group from '@modernpoacher/gremlins/components/group'

export class FieldGremlin extends Component {
  getClassName () {
    const {
      required = false,
      disabled = false,
      readOnly = false
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

  /**
   * @param {FieldGremlinProps} props
   * @returns {boolean}
   */
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
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_CHANGE,
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

FieldGremlin.propTypes = {
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

FieldGremlin.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
  onChange: DEFAULT_HANDLE_CHANGE
}

export class ValueGremlin extends FieldGremlin {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_CHANGE,
      fieldRef
    } = this.props

    return (
      <ValueField
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
}

ValueGremlin.propTypes = {
  ...FieldGremlin.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}

ValueGremlin.defaultProps = {
  ...FieldGremlin.defaultProps
}

export class CheckGremlin extends FieldGremlin {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.checked !== this.props.checked) ||
      (props.onClick !== this.props.onClick)
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_CHANGE,
      onClick = DEFAULT_HANDLE_CLICK,
      fieldRef
    } = this.props

    return (
      <CheckField
        id={id}
        name={name}
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

CheckGremlin.defaultProps = {
  ...FieldGremlin.defaultProps,
  onClick: DEFAULT_HANDLE_CLICK
}

export class GroupGremlin extends Component {
  getClassName () {
    return 'gremlin'
  }

  /**
   * @param {GroupGremlinProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.children !== this.props.children) ||
      (props.onChange !== this.props.onChange)
    )
  }

  renderGroup () {
    const {
      onChange = DEFAULT_HANDLE_CHANGE,
      groupRef,
      children
    } = this.props

    return (
      <Group
        onChange={onChange}
        groupRef={groupRef}>
        {children}
      </Group>
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderGroup()}
      </div>
    )
  }
}

GroupGremlin.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]),
  groupRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

GroupGremlin.defaultProps = {
  onChange: DEFAULT_HANDLE_CHANGE
}
