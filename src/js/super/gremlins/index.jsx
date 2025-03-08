/**
 *  @typedef {GremlinsTypes.OnEventType} OnEventType
 *  @typedef {GremlinsTypes.Super.Gremlins.FieldGremlinProps} FieldGremlinProps
 *  @typedef {GremlinsTypes.Super.Gremlins.GroupGremlinProps} GroupGremlinProps
 */

/**
 *  FieldGremlin component
 *  GroupGremlin component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Field from '#gremlins/super/components/field'
import Group from '#gremlins/super/components/group'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

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
   *  @param {FieldGremlinProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.name !== this.props.name) ||
      (props.id !== this.props.id) ||
      (props.value !== this.props.value) ||
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
      <Field
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
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  accessKey: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string
    })
  })
}

export class GroupGremlin extends Component {
  getClassName () {
    return 'gremlin'
  }

  /**
   *  @param {GroupGremlinProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.children !== this.props.children)
    )
  }

  renderGroup () {
    const {
      groupRef,
      children
    } = this.props

    return (
      <Group
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]),
  groupRef: PropTypes.shape({
    current: PropTypes.shape({})
  })
}
