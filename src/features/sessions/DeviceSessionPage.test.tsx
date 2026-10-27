import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {afterEach, beforeEach, expect, it, vi} from 'vitest'
import {DeviceSessionPage} from './DeviceSessionPage'

const state = vi.hoisted(() => ({request: vi.fn(), canRevoke: true}))
vi.mock('../../auth/AuthContext', () => ({httpClient: {request: state.request}}))
vi.mock('../../permissions/useResourcePermission', () => ({useResourcePermission: () => ({has: () => state.canRevoke})}))

const browser = {sessionId: '1001', clientId: 'web', clientName: '办公浏览器', channel: 'BROWSER', platform: 'Windows',
    ipAddress: '192.0.2.1', authenticatedAt: '2026-10-27T00:00:00Z', expiresAt: '2026-10-28T00:00:00Z'}
const app = {...browser, sessionId: '1002', clientId: 'mobile', clientName: '手机应用', channel: 'APP', platform: 'Android'}
const renderPage = () => render(<QueryClientProvider client={new QueryClient({defaultOptions: {
    queries: {retry: false}, mutations: {retry: false},
}})}><DeviceSessionPage/></QueryClientProvider>)

beforeEach(() => {
    state.canRevoke = true
    state.request.mockReset().mockImplementation((_path: string, options?: RequestInit) => Promise.resolve(options ? undefined : [browser, app]))
})
afterEach(cleanup)

it('shows separate browser and app login information with the five-session limit', async () => {
    renderPage()
    expect(await screen.findByText('办公浏览器')).toBeInTheDocument()
    expect(screen.getByText('手机应用')).toBeInTheDocument()
    expect(screen.getByText('Windows')).toBeInTheDocument()
    expect(screen.getByText('Android')).toBeInTheDocument()
    expect(screen.getByText('2 / 5')).toBeInTheDocument()
})

it('confirms and kicks only the selected session', async () => {
    renderPage()
    await screen.findByText('办公浏览器')
    fireEvent.click(screen.getAllByRole('button', {name: /踢\s*出/})[0])
    expect(state.request).not.toHaveBeenCalledWith(expect.anything(), {method: 'POST'})
    fireEvent.click((await screen.findAllByRole('button', {name: /踢\s*出/})).at(-1)!)
    await waitFor(() => expect(state.request).toHaveBeenCalledWith('/api/v1/tianquan-shoubing/me/sessions/1001/revoke', {method: 'POST'}))
    expect(state.request).not.toHaveBeenCalledWith('/api/v1/tianquan-shoubing/me/sessions/1002/revoke', expect.anything())
})

it('keeps the list readable when session revocation is not granted', async () => {
    state.canRevoke = false
    renderPage()
    await screen.findByText('办公浏览器')
    expect(screen.queryByRole('button', {name: /踢\s*出/})).not.toBeInTheDocument()
})
