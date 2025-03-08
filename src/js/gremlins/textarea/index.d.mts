declare module '#gremlins/gremlins/textarea' {
  import { FieldGremlin as Gremlin } from '#gremlins/gremlins'

  export default class TextareaGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/textarea' {
  export { default } from '#gremlins/gremlins/textarea'
}
