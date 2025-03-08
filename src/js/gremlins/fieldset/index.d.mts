declare module '#gremlins/gremlins/fieldset' {
  import {
    GroupGremlin
  } from '#gremlins/super/gremlins'

  export type FieldsetProps = GremlinsTypes.Gremlins.Fieldset.FieldsetProps

  export default class FieldsetGroupGremlin<P extends FieldsetProps> extends GroupGremlin<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/fieldset' {
  export { default } from '#gremlins/gremlins/fieldset'
  export * from '#gremlins/gremlins/fieldset'
}
