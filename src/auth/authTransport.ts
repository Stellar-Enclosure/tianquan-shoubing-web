import {createGatewayAuthClient, createHttpClient} from '@stellar-enclosure/stellar-enclosure-web-shared'

const listeners = new Set<() => void>()
export const gatewayAuth = createGatewayAuthClient({baseUrl: import.meta.env.VITE_YUHENG_ORIGIN ?? '',
  appAlias: import.meta.env.VITE_OAUTH_APP_ALIAS ?? 'edge-shoubing', fetch: (...args) => globalThis.fetch(...args)})
export const httpClient = createHttpClient({baseUrl: gatewayAuth.applicationBaseUrl, credentials: 'include',
  context: gatewayAuth.context, getCsrf: signal => gatewayAuth.csrf(signal), fetch: (...args) => globalThis.fetch(...args),
  onAuthError: () => listeners.forEach(listener => listener())})
export const subscribeAuthorizationFailure = (listener: () => void) => {
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}
