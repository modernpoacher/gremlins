declare module '#gremlins/components/common/text-content' {
  import type React from 'react'

  export interface TextContentProps {
    textContent: string
  }

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module '@modernpoacher/gremlins/components/common/text-content' {
  export { default } from '#gremlins/components/common/text-content'
  export * from '#gremlins/components/common/text-content'
}
