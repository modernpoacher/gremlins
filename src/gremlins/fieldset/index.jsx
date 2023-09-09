/**
 * FieldsetGremlin component
 *
 * @typedef {import('@modernpoacher/gremlins/gremlins').GroupGremlinProps} GroupGremlinProps
 */

import React from 'react'

import classnames from 'classnames'

import { GroupGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'
import Group from './group/index.jsx'

export default class FieldsetGremlin extends Gremlin {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }

  renderGroup () {
    const {
      onChange,
      children
    } = this.props

    return (
      <Group
        onChange={onChange}>
        {children}
      </Group>
    )
  }
}

FieldsetGremlin.propTypes = {
  ...Gremlin.propTypes
}

FieldsetGremlin.defaultProps = {
  ...Gremlin.defaultProps
}
