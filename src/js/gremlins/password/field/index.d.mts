declare module '#gremlins/gremlins/password/field' {
  import {
    ValueField
  } from '#gremlins/components/field'

  export type PasswordProps = GremlinsTypes.Components.Field.Password.PasswordProps

  export default class PasswordField<P extends PasswordProps> extends ValueField<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/password/field' {
  export { default } from '#gremlins/gremlins/password/field'
  export * from '#gremlins/gremlins/password/field'
}
