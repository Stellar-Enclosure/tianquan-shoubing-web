import {definePermissionReferences} from '@stellar-enclosure/stellar-enclosure-web-shared/permissions'

export const permissions = definePermissionReferences([
  "system:platform:admin",
  "tianquan-shoubing:audit:read",
  "tianquan-shoubing:identity-user:create",
  "tianquan-shoubing:identity-user:password-reset",
  "tianquan-shoubing:identity-user:read",
  "tianquan-shoubing:identity-user:revoke-all",
  "tianquan-shoubing:identity-user:update",
  "tianquan-shoubing:oauth-client:create",
  "tianquan-shoubing:oauth-client:read",
  "tianquan-shoubing:oauth-client:update",
  "tianquan-shoubing:resource-server:create",
  "tianquan-shoubing:resource-server:grant",
  "tianquan-shoubing:resource-server:read",
  "tianquan-shoubing:resource-server:status",
  "tianquan-shoubing:signing-key:activate",
  "tianquan-shoubing:signing-key:publish",
  "tianquan-shoubing:signing-key:read",
  "tianquan-shoubing:signing-key:retire",
  "tianquan-shoubing:tenant:manage",
  "tianquan-shoubing:tenant:read"
] as const)
