declare module '#gremlins/gremlins/fieldset/group' {
  import Group from '#gremlins/super/components/group'

  export type FieldsetProps = GremlinsTypes.Gremlins.Fieldset.FieldsetProps

  export default class FieldsetGroup<P extends FieldsetProps> extends Group<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/fieldset/group' {
  export { default } from '#gremlins/gremlins/fieldset/group'
  export * from '#gremlins/gremlins/fieldset/group'
}
