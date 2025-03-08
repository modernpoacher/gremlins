declare module '#gremlins/gremlins/radio' {
  import {
    CheckGremlin
  } from '#gremlins/gremlins'

  export type RadioProps = GremlinsTypes.Gremlins.Radio.RadioProps

  export default class RadioGremlin<P extends RadioProps> extends CheckGremlin<P> {
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

declare module '@modernpoacher/gremlins/gremlins/radio' {
  export { default } from '#gremlins/gremlins/radio'
  export * from '#gremlins/gremlins/radio'
}
