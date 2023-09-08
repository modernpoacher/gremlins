declare namespace gremlinsTypes {
  export type OnChangeType = () => void

  export type AnswerDefinitionType = {
    answer: {
      value: string | string[]
    }
    changeAnswer: {
      text: string
      href: string
      visuallyHiddenText?: string
    }
  }

  export type ErrorDefinitionType = {
    type: string,
    uri: string,
    params: {
      expectedType: string
    }
  }

  export type ComponentsType = {}

  export type FieldChangeType = {
    text: string,
    href: string
  }

  export type FieldErrorType = {
    text: string,
    href: string
  }
}

declare module '@modernpoacher/gremlins/gremlins' {
  import React from 'react'

  export type GremlinProps = {
    id: string,
    name: string,
    required: boolean,
    disabled: boolean,
    readOnly: boolean,
    placeholder: string,
    onChange: gremlinsTypes.OnChangeType,
    fieldRef: object
  }

  export default class Gremlin extends React.Component<GremlinProps> {}
}

declare module '@modernpoacher/gremlins/gremlins/checkbox' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class CheckboxGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/email' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class EmailGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/number' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class NumberGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/password' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class PasswordGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/radio' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class RadioGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/select' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class SelectGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/text' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class TextGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/textarea' {
  import Gremlin from '@modernpoacher/gremlins/gremlins'

  export default class TextareaGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/components/common/disabled' {
  import React from 'react'

  export default function Disabled(): React.JSX.Element
}

declare module '@modernpoacher/gremlins/components/common/readonly' {
  import React from 'react'

  export default function ReadOnly(): React.JSX.Element
}

declare module '@modernpoacher/gremlins/components/common/required' {
  import React from 'react'

  export default function Required(): React.JSX.Element
}

declare module '@modernpoacher/gremlins/components/common/text-content' {
  import React from 'react'

  export type TextContentProps = {
    textContent: string
  }

  export default function TextContent(props: TextContentProps): React.JSX.Element
}

declare module '@modernpoacher/gremlins/components/field' {
  import React from 'react'

  export type FieldProps = {
    id: string,
    name: string,
    required: boolean,
    disabled: boolean,
    readOnly: boolean,
    tabIndex: number,
    accessKey: string,
    placeholder: string,
    onChange: gremlinsTypes.OnChangeType,
    fieldRef: object
  }

  export default class Field extends React.Component<FieldProps> {}
}

declare module '@modernpoacher/gremlins/gremlins/checkbox/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class CheckboxField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/email/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class EmailField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/number/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class NumberField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/password/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class PasswordField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/radio/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class RadioField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/select/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class SelectField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/text/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class TextField extends Field {}
}

declare module '@modernpoacher/gremlins/gremlins/textarea/field' {
  import Field from '@modernpoacher/gremlins/components/field'

  export default class TextareaField extends Field {}
}

declare module '@modernpoacher/gremlins' {
  export { default as CheckboxGremlin } from '@modernpoacher/gremlins/gremlins/checkbox'
  export { default as EmailGremlin } from '@modernpoacher/gremlins/gremlins/email'
  export { default as NumberGremlin } from '@modernpoacher/gremlins/gremlins/number'
  export { default as PasswordGremlin } from '@modernpoacher/gremlins/gremlins/password'
  export { default as RadioGremlin } from '@modernpoacher/gremlins/gremlins/radio'
  export { default as SelectGremlin } from '@modernpoacher/gremlins/gremlins/select'
  export { default as TextGremlin } from '@modernpoacher/gremlins/gremlins/text'
  export { default as TextareaGremlin } from '@modernpoacher/gremlins/gremlins/textarea'
}
