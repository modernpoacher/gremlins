declare module '#gremlins/gremlins/fieldset' {
  import { GroupGremlin as Gremlin } from '#gremlins/gremlins'

  export default class FieldsetGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/fieldset' {
  export { default } from '#gremlins/gremlins/fieldset'
}
