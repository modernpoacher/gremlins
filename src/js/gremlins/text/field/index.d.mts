declare module '#gremlins/gremlins/text/field' {
  import {
    ValueField
  } from '#gremlins/components/field'

  export type TextProps = GremlinsTypes.Components.Field.Text.TextProps

  export default class TextField<P extends TextProps> extends ValueField<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/text/field' {
  export { default } from '#gremlins/gremlins/text/field'
  export * from '#gremlins/gremlins/text/field'
}
