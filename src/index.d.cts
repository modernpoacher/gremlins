declare namespace FieldGremlinsTypes {
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

  export type FieldGremlinProps = {
    id: string,
    name: string,
    required: boolean,
    disabled: boolean,
    readOnly: boolean,
    placeholder: string,
    onChange: FieldGremlinsTypes.OnChangeType,
    fieldRef: object
  }

  export class FieldGremlin extends React.Component<FieldGremlinProps> {}
}

declare module '@modernpoacher/gremlins/gremlins/checkbox' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class CheckboxGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/email' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class EmailGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/number' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class NumberGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/password' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class PasswordGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/radio' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class RadioGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/select' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class SelectGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/text' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class TextGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins/textarea' {
  import { FieldGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

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
    onChange: FieldGremlinsTypes.OnChangeType,
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

declare namespace GroupGremlinsTypes {
  export type OnChangeType = () => void

  export type ComponentsType = {}
}

declare module '@modernpoacher/gremlins/components/group' {
  import React from 'react'

  export type GroupProps = {
    onChange: GroupGremlinsTypes.OnChangeType,
    groupRef: object,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Group extends React.Component<GroupProps> {}
}

declare module '@modernpoacher/gremlins/gremlins/fieldset/group' {
  import Group from '@modernpoacher/gremlins/components/group'

  export default class FieldsetGroup extends Group {}
}

declare module '@modernpoacher/gremlins/gremlins/fieldset' {
  import { GroupGremlin as Gremlin } from '@modernpoacher/gremlins/gremlins'

  export default class FieldsetGremlin extends Gremlin {}
}

declare module '@modernpoacher/gremlins/gremlins' {
  import React from 'react'

  export type GroupGremlinProps = {
    title: string,
    onChange: GroupGremlinsTypes.OnChangeType,
    groupRef: object,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export class GroupGremlin extends React.Component<GroupGremlinProps> {}
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
  export { default as FieldsetGremlin } from '@modernpoacher/gremlins/gremlins/fieldset'
}
