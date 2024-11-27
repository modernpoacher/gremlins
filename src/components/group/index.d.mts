declare module '#gremlins/components/group' {
  import React from 'react'

  export interface GroupProps {
    onChange: GremlinsTypes.OnChangeType
    groupRef: object
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Group extends React.Component<GroupProps> {}
}

declare module '@modernpoacher/gremlins/components/group' {
  export { default } from '#gremlins/components/group'
  export * from '#gremlins/components/group'
}
