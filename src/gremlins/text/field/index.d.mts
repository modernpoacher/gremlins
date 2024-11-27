declare module '#gremlins/gremlins/text/field' {
  import Field from '#gremlins/components/field'

  export default class TextField extends Field {}
}

declare module '@modernpoacher/gremlins/text/field' {
  export { default } from '#gremlins/gremlins/text/field'
}
