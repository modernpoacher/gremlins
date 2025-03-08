declare module '#gremlins/gremlins/checkbox/field' {
  import Field from '#gremlins/components/field'

  export default class CheckboxField extends Field {}
}

declare module '@modernpoacher/gremlins/checkbox/field' {
  export { default } from '#gremlins/gremlins/checkbox/field'
}
