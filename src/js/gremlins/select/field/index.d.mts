declare module '#gremlins/gremlins/select/field' {
  import type { ChangeEvent } from 'react'

  import {
    ValueField
  } from '#gremlins/components/field'

  export type SelectProps = GremlinsTypes.Components.Field.Select.SelectProps

  export default class SelectField<P extends SelectProps> extends ValueField<P> {
    handleChange (event: ChangeEvent<HTMLSelectElement>): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/select/field' {
  export { default } from '#gremlins/gremlins/select/field'
  export * from '#gremlins/gremlins/select/field'
}
