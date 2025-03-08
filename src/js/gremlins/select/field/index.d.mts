declare module '#gremlins/gremlins/select/field' {
  import Field from '#gremlins/components/field'

  export default class SelectField extends Field {}
}

declare module '@modernpoacher/gremlins/select/field' {
  export { default } from '#gremlins/gremlins/select/field'
}
