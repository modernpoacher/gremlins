declare module '#gremlins/gremlins/password' {
  import { FieldGremlin as Gremlin } from '#gremlins/gremlins'

  export default class PasswordGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/password' {
  export { default } from '#gremlins/gremlins/password'
}
