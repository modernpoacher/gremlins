declare module '#gremlins/gremlins/text' {
  import { FieldGremlin as Gremlin } from '#gremlins/gremlins'

  export default class TextGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/text' {
  export { default } from '#gremlins/gremlins/text'
}
