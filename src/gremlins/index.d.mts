declare module '#gremlins/gremlins' {
  import React from 'react'

  export interface FieldGremlinProps {
    id: string
    name: string
    required: boolean
    disabled: boolean
    readOnly: boolean
    placeholder: string
    onChange: GremlinsTypes.OnChangeType
    fieldRef: object
  }

  export interface ValueGremlinProps extends FieldGremlinProps {
    value: string
    defaultValue: string
    onChange: GremlinsTypes.OnChangeType
  }

  export interface CheckGremlinProps extends FieldGremlinProps {
    checked: boolean
    defaultChecked: boolean
    onClick: GremlinsTypes.OnClickType
  }

  export interface GroupGremlinProps {
    title: string
    onChange: GremlinsTypes.OnChangeType
    groupRef: object
    children: React.JSX.Element | React.JSX.Element[]
  }

  export class FieldGremlin extends React.Component<FieldGremlinProps> {}

  export class ValueGremlin extends React.Component<ValueGremlinProps> {}

  export class CheckGremlin extends React.Component<CheckGremlinProps> {}

  export class GroupGremlin extends React.Component<GroupGremlinProps> {}
}

declare module '@modernpoacher/gremlins/gremlins' {
  export * from '#gremlins/gremlins'
}
