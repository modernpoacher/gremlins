declare module '#gremlins/gremlins/email' {
  import {
    ValueGremlin
  } from '#gremlins/gremlins'

  export type EmailProps = GremlinsTypes.Gremlins.Email.EmailProps

  export default class EmailGremlin<P extends EmailProps> extends ValueGremlin<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/email' {
  export { default } from '#gremlins/gremlins/email'
  export * from '#gremlins/gremlins/email'
}
