declare module '#gremlins/gremlins/textarea/field' {
  import type { ChangeEvent } from 'react'

  import {
    ValueField
  } from '#gremlins/components/field'

  export type TextareaProps = GremlinsTypes.Components.Field.Textarea.TextareaProps

  export default class TextareaField<P extends TextareaProps> extends ValueField<P> {
    handleChange (event: ChangeEvent<HTMLTextAreaElement>): void
  }
}

declare module '@modernpoacher/gremlins/gremlins/textarea/field' {
  export { default } from '#gremlins/gremlins/textarea/field'
  export * from '#gremlins/gremlins/textarea/field'
}
