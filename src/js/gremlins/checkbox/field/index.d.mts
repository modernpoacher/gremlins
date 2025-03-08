declare module '#gremlins/gremlins/checkbox/field' {
  import {
    CheckField
  } from '#gremlins/components/field'

  export type CheckboxProps = GremlinsTypes.Components.Field.Checkbox.CheckboxProps

  export default class CheckboxField<P extends CheckboxProps> extends CheckField<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/checkbox/field' {
  export { default } from '#gremlins/gremlins/checkbox/field'
  export * from '#gremlins/gremlins/checkbox/field'
}
