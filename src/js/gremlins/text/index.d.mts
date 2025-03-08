declare module '#gremlins/gremlins/text' {
  import {
    ValueGremlin
  } from '#gremlins/gremlins'

  export type TextProps = GremlinsTypes.Gremlins.Text.TextProps

  export default class TextGremlin<P extends TextProps> extends ValueGremlin<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/text' {
  export { default } from '#gremlins/gremlins/text'
  export * from '#gremlins/gremlins/text'
}
