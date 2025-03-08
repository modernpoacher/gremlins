declare module '#gremlins/components/common/required' {
  import type React from 'react'

  export default function Required (): React.JSX.Element
}

declare module '@modernpoacher/gremlins/components/common/required' {
  export { default } from '#gremlins/components/common/required'
}
