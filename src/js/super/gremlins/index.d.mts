declare module '#gremlins/super/gremlins' {
  import React from 'react'

  export type FieldGremlinProps = GremlinsTypes.Super.Gremlins.FieldGremlinProps

  export class FieldGremlin<P extends FieldGremlinProps> extends React.Component<P> {
    static propTypes: Record<PropertyKey, unknown>

    getClassName (): string

    getId (): string

    shouldComponentUpdate (props: FieldGremlinProps): boolean

    renderField (): React.JSX.Element | null
  }

  export type GroupGremlinProps = GremlinsTypes.Super.Gremlins.GroupGremlinProps

  export class GroupGremlin<P extends GroupGremlinProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: GroupGremlinProps): boolean

    renderGroup (): React.JSX.Element | null
  }
}

declare module '@modernpoacher/gremlins/super/gremlins' {
  export {
    FieldGremlin,
    GroupGremlin
  } from '#gremlins/super/gremlins'
}
