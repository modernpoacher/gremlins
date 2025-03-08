declare module '#gremlins/gremlins' {
  import {
    FieldGremlin
  } from '#gremlins/super/gremlins'

  export type FieldGremlinProps = GremlinsTypes.Super.Gremlins.FieldGremlinProps
  export type ValueProps = GremlinsTypes.Gremlins.ValueProps
  export type CheckProps = GremlinsTypes.Gremlins.CheckProps

  export class ValueGremlin<P extends ValueProps> extends FieldGremlin<P> {
    shouldComponentUpdate (props: ValueProps): boolean
  }

  export class CheckGremlin<P extends CheckProps> extends FieldGremlin<P> {
    shouldComponentUpdate (props: CheckProps): boolean
  }

  export function toInputValue (value: unknown): string
}

declare module '@modernpoacher/gremlins/gremlins' {
  export {
    ValueGremlin,
    CheckGremlin,
    toInputValue
  } from '#gremlins/gremlins'
}
