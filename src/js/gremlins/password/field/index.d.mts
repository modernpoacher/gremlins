declare module '#gremlins/gremlins/password/field' {
  import Field from '#gremlins/components/field'

  export default class PasswordField extends Field {}
}

declare module '@modernpoacher/gremlins/password/field' {
  export { default } from '#gremlins/gremlins/password/field'
}
