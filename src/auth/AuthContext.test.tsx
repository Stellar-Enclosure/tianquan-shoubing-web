import {act, cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react'
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {AuthProvider, useAuth} from './AuthContext'
import {gatewayAuth, httpClient} from './authTransport'
import {authorizationFixture, identityFixture} from '../test/permissionFixtures'
const Probe = () => {
  const auth = useAuth()
  return <><p>{auth.loading ? 'loading' : auth.bootstrap?.user.identitySub ?? 'logged-out'}</p>
    <button onClick={() => void auth.logout()}>logout</button></>
}
beforeEach(() => {
  vi.stubEnv('VITE_PERMISSION_NAMESPACE', 'default')
  vi.stubEnv('VITE_PERMISSION_ENVIRONMENT', 'test')
  vi.spyOn(gatewayAuth, 'identity').mockResolvedValue(identityFixture())
  vi.spyOn(httpClient, 'request').mockResolvedValue({success: true, data: authorizationFixture().snapshot})
  vi.spyOn(gatewayAuth, 'logout').mockResolvedValue({operationId: '11111111-1111-1111-1111-111111111111', status: 'LOCAL_CLOSED', remoteState: 'PENDING', ssoLogoutUri: identityFixture().ssoLogoutUri})
})
afterEach(() => {cleanup(); vi.restoreAllMocks(); vi.unstubAllEnvs()})
describe('identity-bound permission hydration', () => {
  it('loads the verified identity before accepting the canonical application snapshot', async () => {
    render(<AuthProvider><Probe /></AuthProvider>)
    await screen.findByText('admin-sub')
    expect(httpClient.request).toHaveBeenCalledWith('/api/v1/authorization/effective-permissions', expect.objectContaining({signal: expect.any(AbortSignal)}))
  })
  it.each(['tenant', 'application', 'environment'])('rejects another %s context', async field => {
    const snapshot = authorizationFixture().snapshot
    vi.mocked(httpClient.request).mockResolvedValue({success: true, data: {...snapshot, catalogScope: {...snapshot.catalogScope,
      ...(field === 'tenant' ? {tenantId: '2'} : field === 'application' ? {applicationCode: 'tianquan-jianshen'} : {environment: 'dev'})}}})
    render(<AuthProvider><Probe /></AuthProvider>)
    await screen.findByText('logged-out')
  })
  it('clears local state immediately and rejects a late result after logout', async () => {
    let finish: (value: unknown) => void = () => {}
    vi.mocked(httpClient.request).mockImplementation(() => new Promise(resolve => {finish = resolve}))
    render(<AuthProvider><Probe /></AuthProvider>)
    await waitFor(() => expect(httpClient.request).toHaveBeenCalledOnce())
    fireEvent.click(screen.getByText('logout'))
    await act(async () => finish({success: true, data: authorizationFixture().snapshot}))
    expect(screen.getByText('logged-out')).toBeTruthy()
  })
  it('does not reuse permissions after the shared context is invalidated', async () => {
    render(<AuthProvider><Probe /></AuthProvider>)
    await screen.findByText('admin-sub')
    act(() => gatewayAuth.context.invalidate())
    expect(screen.getByText('logged-out')).toBeTruthy()
  })
})
