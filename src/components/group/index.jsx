/**
 * Group component
 *
 * @typedef {import('@modernpoacher/gremlins/components/group').GroupProps} GroupProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Group extends Component {
  getClassName () {
    return 'group'
  }

  /**
   * @param {GroupProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.onChange !== this.props.onChange) ||
      (props.children !== this.props.children)
    )
  }

  render () {
    const {
      onChange,
      groupRef,
      children
    } = this.props

    return (
      <fieldset
        onChange={onChange}
        className={this.getClassName()}
        ref={groupRef}>
        {children}
      </fieldset>
    )
  }
}

Group.propTypes = {
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
