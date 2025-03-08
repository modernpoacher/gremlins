import type React from 'react'

declare global {
  namespace GremlinsTypes {
    export type OnEventType = (
      value?: string | string[],
      checked?: boolean
    ) => void

    export interface FieldErrorType {
      text: string
      href: string
    }

    export namespace Super {
      export namespace Gremlins {
        export interface FieldGremlinProps {
          id?: string
          name: string
          value?: string
          required?: boolean
          disabled?: boolean
          readOnly?: boolean
          tabIndex?: number
          accessKey?: string
          placeholder?: string
          onChange?: OnEventType
          fieldRef?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export type FieldGremlinState = Record<PropertyKey, unknown>

        export interface GroupGremlinProps extends React.PropsWithChildren {
          groupRef?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export type GroupGremlinState = Record<PropertyKey, unknown>
      }

      export namespace Components {
        export namespace Field {
          export type FieldProps = Gremlins.FieldGremlinProps

          export type FieldState = Gremlins.FieldGremlinState
        }

        export namespace Group {
          export type GroupProps = Gremlins.GroupGremlinProps

          export type GroupState = Gremlins.GroupGremlinState
        }
      }
    }

    export namespace Components {
      export namespace Common {
        export namespace TextContent {
          export interface TextContentProps {
            textContent?: string
          }
        }
      }

      export namespace Field {
        export interface ValueProps extends Super.Components.Field.FieldProps {
          defaultValue?: string
        }

        export interface CheckProps extends Super.Components.Field.FieldProps {
          checked?: boolean
          defaultChecked?: boolean
          onClick?: OnEventType
        }

        export namespace Checkbox {
          export type CheckboxProps = CheckProps
        }

        export namespace Email {
          export type EmailProps = ValueProps
        }

        export namespace Number {
          export type NumberProps = ValueProps
        }

        export namespace Password {
          export type PasswordProps = ValueProps
        }

        export namespace Radio {
          export type RadioProps = CheckProps
        }

        export namespace Select {
          export interface SelectProps extends ValueProps, React.PropsWithChildren {
            multiple?: boolean
          }
        }

        export namespace Text {
          export type TextProps = ValueProps
        }

        export namespace Textarea {
          export type TextareaProps = ValueProps
        }
      }

      export namespace Group {
        export type GroupProps = Super.Components.Group.GroupProps

        export type FieldsetProps = GroupProps
      }
    }

    export namespace Gremlins {
      export interface ValueProps extends Super.Gremlins.FieldGremlinProps {
        defaultValue?: string
      }

      export interface CheckProps extends Super.Gremlins.FieldGremlinProps {
        checked?: boolean
        defaultChecked?: boolean
        onClick?: OnEventType
      }

      export type GroupProps = Super.Gremlins.GroupGremlinProps

      export namespace Checkbox {
        export type CheckboxProps = CheckProps
      }

      export namespace Email {
        export type EmailProps = ValueProps
      }

      export namespace Number {
        export interface NumberProps extends Omit<Omit<ValueProps, 'value'>, 'defaultValue'> {
          value?: string | number
          defaultValue?: string | number
        }
      }

      export namespace Password {
        export type PasswordProps = ValueProps
      }

      export namespace Radio {
        export type RadioProps = CheckProps
      }

      export namespace Select {
        export interface SelectProps extends Omit<Omit<ValueProps, 'value'>, 'defaultValue'>, React.PropsWithChildren {
          value?: string | string[]
          defaultValue?: string | string[]
          multiple?: boolean
        }
      }

      export namespace Text {
        export type TextProps = ValueProps
      }

      export namespace Textarea {
        export type TextareaProps = ValueProps
      }

      export namespace Fieldset {
        export type FieldsetProps = GroupProps
      }
    }
  }
}

export {}
