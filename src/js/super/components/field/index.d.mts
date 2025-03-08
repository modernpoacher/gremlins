declare module '#gremlins/super/components/field' {
  import React from 'react'
  import type {
    ChangeEvent
  } from 'react'

  export type FieldProps = GremlinsTypes.Super.Components.Field.FieldProps

  export default class Field<P extends FieldProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: FieldProps): boolean

    handleChange (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>): void
  }
}

declare module '@modernpoacher/gremlins/super/components/field' {
  export { default } from '#gremlins/super/components/field'
  export * from '#gremlins/super/components/field'
}
