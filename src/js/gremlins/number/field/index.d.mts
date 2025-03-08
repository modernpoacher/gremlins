declare module '#gremlins/gremlins/number/field' {
  import Field from '#gremlins/components/field'

  export default class NumberField extends Field {}
}

declare module '@modernpoacher/gremlins/number/field' {
  export { default } from '#gremlins/gremlins/number/field'
}
