/**
 *  @typedef {GremlinsTypes.Components.Group.GroupProps} GroupProps
 *  @typedef {GremlinsTypes.Components.Group.FieldsetProps} FieldsetProps
 */

/**
 *  FieldsetGroup component
 */
import classnames from 'classnames'
import Group from '#gremlins/components/group'

/**
 *  @extends {Group<GroupProps & FieldsetProps>}
 */
export default class FieldsetGroup extends Group {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}
