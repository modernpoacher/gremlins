/**
 *  @typedef {GremlinsTypes.Super.Components.Group.GroupProps} GroupProps
 */

/**
 *  Group component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Group extends Component {
  getClassName () {
    return 'group'
  }

  /**
   *  @param {GroupProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.children !== this.props.children)
    )
  }

  render () {
    const {
      children
    } = this.props

    if (children) {
      const {
        groupRef
      } = this.props

      return (
        <fieldset
          className={this.getClassName()}
          ref={groupRef}>
          {children}
        </fieldset>
      )
    }

    return null
  }
}

Group.propTypes = {
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
