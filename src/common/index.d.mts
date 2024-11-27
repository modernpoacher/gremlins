declare module '#gremlins/common' {
  export function DEFAULT_HANDLE_CHANGE (): void

  export function DEFAULT_HANDLE_CLICK (): void
}

declare module '@modernpoacher/gremlins/common' {
  export * from '#gremlins/common'
}
