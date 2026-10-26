import {authorizationFixture} from '../../test/permissionFixtures'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {cleanup, render, screen, waitFor} from '@testing-library/react'
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {OverviewPage} from './OverviewPage'

const mocks = vi.hoisted(() => ({
  request: vi.fn(),
  activeRoleContexts: [] as {roleId: string; roleCode: string; applicationCode: string}[],
}))

vi.mock('../../auth/AuthContext', () => ({
  httpClient: {request: mocks.request},
  useAuth: () => ({
    bootstrap: authorizationFixture([], {tenantId: '1', subject: 'admin-sub', roles: mocks.activeRoleContexts.map(value => value.roleId)}),
  }),
}))

vi.mock('@stellar-enclosure/stellar-enclosure-web-shared', async (importOriginal) => ({
  ...await importOriginal<typeof import('@stellar-enclosure/stellar-enclosure-web-shared')>(),
  usePermission: () => ({has: () => false}),
}))

describe('Tianquan-Shoubing overview', () => {
  afterEach(cleanup)
  beforeEach(() => { mocks.activeRoleContexts = [] })

  it('renders the flat role descriptors returned by the bootstrap contract', async () => {
    mocks.activeRoleContexts = [{roleId: '1001', roleCode: 'TIANQUAN_SHOUBING_ADMIN', applicationCode: 'tianquan-shoubing-admin'}]
    mocks.request.mockResolvedValue({subject: 'admin-sub', tenantId: 'tenant-a'})
    render(
      <QueryClientProvider client={new QueryClient({defaultOptions: {queries: {retry: false}}})}>
        <OverviewPage />
      </QueryClientProvider>,
    )
    expect(await screen.findByText('1001')).toBeInTheDocument()
    expect(screen.queryByText('当前上下文未返回角色明细')).not.toBeInTheDocument()
  })

  it('shows safe identity profile fields without token identifiers', async () => {
    mocks.request.mockResolvedValue({
      subject: 'admin-sub',
      tenantId: 'tenant-a',
      tokenId: 'token-a',
      audience: ['private-token-audience'],
      issuedAt: '2026-08-31T00:00:00Z',
      expiresAt: '2026-09-01T00:00:00Z',
    })
    render(
      <QueryClientProvider client={new QueryClient({defaultOptions: {queries: {retry: false}}})}>
        <OverviewPage />
      </QueryClientProvider>,
    )

    expect(await screen.findByText('当前统一身份')).toBeInTheDocument()
    await waitFor(() => expect(mocks.request).toHaveBeenCalledWith('/api/v1/tianquan-shoubing/me'))
    expect(screen.getAllByText('admin-sub').length).toBeGreaterThan(0)
    expect(screen.getAllByText('tenant-a').length).toBeGreaterThan(0)
    expect(screen.queryByText('token-a')).not.toBeInTheDocument()
    expect(screen.queryByText('private-token-audience')).not.toBeInTheDocument()
    expect(screen.queryByText('Tianquan-Jianshen 用户 ID')).not.toBeInTheDocument()
    expect(screen.queryByText('rbac-user-1')).not.toBeInTheDocument()
    expect(screen.getByText('tianquan-shoubing')).toBeInTheDocument()
    expect(screen.getByText('当前上下文未返回角色明细')).toBeInTheDocument()
  })
})
