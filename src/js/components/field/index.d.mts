declare module '#gremlins/components/field' {
  import type { MouseEvent } from 'react'

  import Field from '#gremlins/super/components/field'

  export function toInputValue (value: unknown): string

  export type ValueProps = GremlinsTypes.Components.Field.ValueProps
  export type CheckProps = GremlinsTypes.Components.Field.CheckProps

  export class ValueField<P extends ValueProps> extends Field<P> {
    shouldComponentUpdate (props: ValueProps): boolean
  }

  export class CheckField<P extends CheckProps> extends Field<P> {
    shouldComponentUpdate (props: CheckProps): boolean

    handleClick (event: MouseEvent<HTMLInputElement>): void
  }
}

declare module '@modernpoacher/gremlins/components/field' {
  export * from '#gremlins/components/field'
}
