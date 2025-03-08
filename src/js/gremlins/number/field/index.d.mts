declare module '#gremlins/gremlins/number/field' {
  import {
    ValueField
  } from '#gremlins/components/field'

  export type NumberProps = GremlinsTypes.Components.Field.Number.NumberProps

  export default class NumberField<P extends NumberProps> extends ValueField<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/number/field' {
  export { default } from '#gremlins/gremlins/number/field'
  export * from '#gremlins/gremlins/number/field'
}
