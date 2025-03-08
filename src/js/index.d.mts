declare module '#gremlins' {
  export { default as CheckboxGremlin } from '#gremlins/gremlins/checkbox'
  export { default as EmailGremlin } from '#gremlins/gremlins/email'
  export { default as NumberGremlin } from '#gremlins/gremlins/number'
  export { default as PasswordGremlin } from '#gremlins/gremlins/password'
  export { default as RadioGremlin } from '#gremlins/gremlins/radio'
  export { default as SelectGremlin } from '#gremlins/gremlins/select'
  export { default as TextGremlin } from '#gremlins/gremlins/text'
  export { default as TextareaGremlin } from '#gremlins/gremlins/textarea'
  export { default as FieldsetGremlin } from '#gremlins/gremlins/fieldset'
}

declare module '@modernpoacher/gremlins' {
  export * from '#gremlins'
}
