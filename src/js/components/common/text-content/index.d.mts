declare module '#gremlins/components/common/text-content' {
  import type React from 'react'

  export type TextContentProps = GremlinsTypes.Components.Common.TextContent.TextContentProps

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module '@modernpoacher/gremlins/components/common/text-content' {
  export { default } from '#gremlins/components/common/text-content'
  export * from '#gremlins/components/common/text-content'
}
