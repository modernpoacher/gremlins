/**
 *  @typedef {GremlinsTypes.Super.Gremlins.GroupGremlinProps} GroupGremlinProps
 *  @typedef {GremlinsTypes.Gremlins.Fieldset.FieldsetProps} FieldsetProps
 */

/**
 *  FieldsetGremlin component
 */
import React from 'react'
import classnames from 'classnames'

import {
  GroupGremlin
} from '#gremlins/super/gremlins'

import Group from '#gremlins/gremlins/fieldset/group'

/**
 *  @extends {GroupGremlin<GroupGremlinProps & FieldsetProps>}
 */
export default class FieldsetGremlin extends GroupGremlin {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }

  renderGroup () {
    const {
      children
    } = this.props

    return (
      <Group>
        {children}
      </Group>
    )
  }
}
