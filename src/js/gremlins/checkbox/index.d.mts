declare module '#gremlins/gremlins/checkbox' {
  import {
    CheckGremlin
  } from '#gremlins/gremlins'

  export type CheckboxProps = GremlinsTypes.Gremlins.Checkbox.CheckboxProps

  export default class CheckboxGremlin<P extends CheckboxProps> extends CheckGremlin<P> {
    handleChange (
      value?: string | string[],
      checked?: boolean
    ): void

    handleClick (
      value?: string | string[],
      checked?: boolean
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/checkbox' {
  export { default } from '#gremlins/gremlins/checkbox'
  export * from '#gremlins/gremlins/checkbox'
}
