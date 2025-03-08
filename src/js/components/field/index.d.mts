declare module '#gremlins/components/field' {
  import React from 'react'

  export interface FieldProps {
    id: string
    name: string
    required: boolean
    disabled: boolean
    readOnly: boolean
    tabIndex: number
    accessKey: string
    placeholder: string
    onChange: GremlinsTypes.OnChangeType
    fieldRef: object
  }

  export default class Field extends React.Component<FieldProps> {}
}

declare module '@modernpoacher/gremlins/components/field' {
  export { default } from '#gremlins/components/field'
  export * from '#gremlins/components/field'
}
