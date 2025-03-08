declare module '#gremlins/gremlins/password' {
  import {
    ValueGremlin
  } from '#gremlins/gremlins'

  export type PasswordProps = GremlinsTypes.Gremlins.Password.PasswordProps

  export default class PasswordGremlin<P extends PasswordProps> extends ValueGremlin<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/password' {
  export { default } from '#gremlins/gremlins/password'
  export * from '#gremlins/gremlins/password'
}
