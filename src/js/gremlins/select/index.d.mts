declare module '#gremlins/gremlins/select' {
  import {
    ValueGremlin
  } from '#gremlins/gremlins'

  export type SelectProps = GremlinsTypes.Gremlins.Select.SelectProps

  export default class SelectGremlin<P extends SelectProps> extends ValueGremlin<Omit<Omit<P, 'value'>, 'defaultValue'>> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/select' {
  export { default } from '#gremlins/gremlins/select'
  export * from '#gremlins/gremlins/select'
}
