declare module '#gremlins/gremlins/number' {
  import {
    ValueGremlin
  } from '#gremlins/gremlins'

  export type NumberProps = GremlinsTypes.Gremlins.Number.NumberProps

  export default class NumberGremlin<P extends NumberProps> extends ValueGremlin<Omit<Omit<P, 'value'>, 'defaultValue'>> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/number' {
  export { default } from '#gremlins/gremlins/number'
  export * from '#gremlins/gremlins/number'
}
