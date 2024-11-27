declare module '#gremlins/gremlins/number' {
  import { FieldGremlin as Gremlin } from '#gremlins/gremlins'

  export default class NumberGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/number' {
  export { default } from '#gremlins/gremlins/number'
}
