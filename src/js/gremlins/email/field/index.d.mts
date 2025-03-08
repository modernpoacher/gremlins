declare module '#gremlins/gremlins/email/field' {
  import {
    ValueField
  } from '#gremlins/components/field'

  export type EmailProps = GremlinsTypes.Components.Field.Email.EmailProps

  export default class EmailField<P extends EmailProps> extends ValueField<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/email/field' {
  export { default } from '#gremlins/gremlins/email/field'
  export * from '#gremlins/gremlins/email/field'
}
