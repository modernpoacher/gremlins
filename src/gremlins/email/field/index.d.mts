declare module '#gremlins/gremlins/email/field' {
  import Field from '#gremlins/components/field'

  export default class EmailField extends Field {}
}

declare module '@modernpoacher/gremlins/email/field' {
  export { default } from '#gremlins/gremlins/email/field'
}
