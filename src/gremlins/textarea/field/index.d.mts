declare module '#gremlins/gremlins/textarea/field' {
  import Field from '#gremlins/components/field'

  export default class TextareaField extends Field {}
}

declare module '@modernpoacher/gremlins/textarea/field' {
  export { default } from '#gremlins/gremlins/textarea/field'
}
