declare module '#gremlins/gremlins/email' {
  import { FieldGremlin as Gremlin } from '#gremlins/gremlins'

  export default class EmailGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/email' {
  export { default } from '#gremlins/gremlins/email'
}
