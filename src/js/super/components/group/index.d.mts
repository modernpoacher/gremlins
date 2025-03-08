declare module '#gremlins/super/components/group' {
  import React from 'react'

  export type GroupProps = GremlinsTypes.Super.Components.Group.GroupProps

  export default class Group<P extends GroupProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: GroupProps): boolean
  }
}

declare module '@modernpoacher/gremlins/super/components/group' {
  export { default } from '#gremlins/super/components/group'
  export * from '#gremlins/super/components/group'
}
