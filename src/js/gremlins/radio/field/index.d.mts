declare module '#gremlins/gremlins/radio/field' {
  import {
    CheckField
  } from '#gremlins/components/field'

  export type RadioProps = GremlinsTypes.Components.Field.Radio.RadioProps

  export default class RadioField<P extends RadioProps> extends CheckField<P> {}
}

declare module '@modernpoacher/gremlins/gremlins/radio/field' {
  export { default } from '#gremlins/gremlins/radio/field'
  export * from '#gremlins/gremlins/radio/field'
}
