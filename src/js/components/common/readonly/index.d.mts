declare module '#gremlins/components/common/readonly' {
  import type React from 'react'

  export default function ReadOnly (): React.JSX.Element
}

declare module '@modernpoacher/gremlins/components/common/readonly' {
  export { default } from '#gremlins/components/common/readonly'
}
