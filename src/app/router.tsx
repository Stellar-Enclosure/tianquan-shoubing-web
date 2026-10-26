import {FieldCatalogProvider} from '../permissions/FieldCatalog'
import {RequireResource} from '../permissions/RequireResource'
import {Spin} from 'antd'
import {lazy, Suspense} from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {AppErrorBoundary} from '@stellar-enclosure/stellar-enclosure-web-shared'
import {AuthProvider, useAuth} from '../auth/AuthContext'
import {AdminLayout} from './AdminLayout'

const CentralLoginPage = lazy(() => import('../auth/CentralLoginPage').then(m => ({ default: m.CentralLoginPage })))
const OverviewPage = lazy(() => import('../features/overview/OverviewPage').then(m => ({ default: m.OverviewPage })))
const UserListPage = lazy(() => import('../features/users/UserListPage').then(m => ({ default: m.UserListPage })))
const ClientListPage = lazy(() => import('../features/clients/ClientListPage').then(m => ({ default: m.ClientListPage })))
const TenantListPage = lazy(() => import('../features/tenants/TenantListPage').then(m => ({default: m.TenantListPage})))
const ResourceServerListPage = lazy(() => import('../features/resource-servers/ResourceServerListPage').then(m => ({default: m.ResourceServerListPage})))
const ClientResourceGrantPage = lazy(() => import('../features/resource-grants/ClientResourceGrantPage').then(m => ({default: m.ClientResourceGrantPage})))
const SigningKeyPage = lazy(() => import('../features/keys/SigningKeyPage').then(m => ({ default: m.SigningKeyPage })))
const AuditLogPage = lazy(() => import('../features/audits/AuditLogPage').then(m => ({ default: m.AuditLogPage })))

const PageFallback = () => <Spin style={{ display: 'grid', placeItems: 'center', minHeight: 200 }} />

const LoginRoute = () => {
  const auth = useAuth()
  if (auth.loading) return <Spin fullscreen description="校验统一登录态" />
  if (auth.bootstrap) return <Navigate to="/overview" replace />
  return <CentralLoginPage />
}

const ConsoleGuard = ({ embedded }: { readonly embedded: boolean }) => {
  const auth = useAuth()
  if (auth.loading) return <Spin fullscreen description="校验统一登录态" />
  if (!auth.bootstrap) return <Navigate to="/login" replace />
  return (
    <AdminLayout embedded={embedded}>
      <Outlet />
    </AdminLayout>
  )
}

export const AppRouter = ({ embedded = false }: { readonly embedded?: boolean }) => (
  <AppErrorBoundary>
    <AuthProvider><FieldCatalogProvider>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route element={<ConsoleGuard embedded={embedded} />}>
            <Route index element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<RequireResource resourceKey="tianquan-shoubing.page.overview"><OverviewPage /></RequireResource>} />
            <Route path="/users" element={<RequireResource resourceKey="tianquan-shoubing.page.users"><UserListPage /></RequireResource>} />
            <Route path="/clients" element={<RequireResource resourceKey="tianquan-shoubing.page.clients"><ClientListPage /></RequireResource>} />
            <Route path="/tenants" element={<RequireResource resourceKey="tianquan-shoubing.page.tenants"><TenantListPage /></RequireResource>} />
              <Route path="/clients/:clientId/resource-grants" element={<RequireResource resourceKey="tianquan-shoubing.page.clients.clientId.resource.grants"><ClientResourceGrantPage /></RequireResource>}/>
              <Route path="/resource-servers" element={<RequireResource resourceKey="tianquan-shoubing.page.resource.servers"><ResourceServerListPage /></RequireResource>}/>
            <Route path="/keys" element={<RequireResource resourceKey="tianquan-shoubing.page.keys"><SigningKeyPage /></RequireResource>} />
            <Route path="/audits" element={<RequireResource resourceKey="tianquan-shoubing.page.audits"><AuditLogPage /></RequireResource>} />
          </Route>
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
      </Suspense>
    </FieldCatalogProvider></AuthProvider>
  </AppErrorBoundary>
)
