import type {GatewayIdentityResult} from '@stellar-enclosure/stellar-enclosure-web-shared'
import {snapshotContext, type PermissionSnapshot} from '@stellar-enclosure/stellar-enclosure-web-shared/permissions'

export const identityFixture = (): GatewayIdentityResult => ({issuer: 'https://identity.example/tenants/1001', subject: 'admin-sub',
  tenantId: '1001', appAlias: 'edge-shoubing', clientId: 'edge-shoubing', authorizationExpiresAt: 2_000_000_000,
  authenticationExpiresAt: 2_000_000_000, securityVersion: {realm: '1', client: '1', subject: '1'},
  ssoLogoutUri: 'https://identity.example/tenants/1001/logout'})
export const authorizationFixture = (permissionCodes: readonly string[] = [], options: {tenantId?: string; subject?: string; roles?: string[]} = {}) => {
  const identity = {...identityFixture(), tenantId: options.tenantId ?? '1001', subject: options.subject ?? 'admin-sub'}
  const snapshot: PermissionSnapshot = {issuer: identity.issuer, subject: identity.subject,
    catalogScope: {catalogScopeId: '1', tenantId: identity.tenantId, businessCode: 'xingyuan', applicationCode: 'tianquan-shoubing', namespaceCode: 'default', environment: 'test'},
    catalogVersion: '1', authVersion: '2', policyVersion: '3', activeRoleContext: {applicationCode: 'tianquan-shoubing', rootRoleIds: options.roles ?? [], effectiveRoleIds: options.roles ?? []},
    permissionCodes, snapshotExpiresAt: new Date(Date.now() + 60_000).toISOString()}
  return {identity, snapshot, binding: snapshotContext(snapshot, 0), user: {id: identity.subject, identitySub: identity.subject, tenantId: identity.tenantId}}
}
