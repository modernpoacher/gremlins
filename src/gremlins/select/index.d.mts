declare module '#gremlins/gremlins/select' {
  import { FieldGremlin as Gremlin } from '#gremlins/gremlins'

  export default class SelectGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/select' {
  export { default } from '#gremlins/gremlins/select'
}
