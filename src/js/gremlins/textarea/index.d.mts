declare module '#gremlins/gremlins/textarea' {
  import {
    ValueGremlin
  } from '#gremlins/gremlins'

  export type TextareaProps = GremlinsTypes.Gremlins.Textarea.TextareaProps

  export default class TextareaGremlin<P extends TextareaProps> extends ValueGremlin<P> {
    handleChange (
      value?: string | string[]
    ): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/textarea' {
  export { default } from '#gremlins/gremlins/textarea'
  export * from '#gremlins/gremlins/textarea'
}
