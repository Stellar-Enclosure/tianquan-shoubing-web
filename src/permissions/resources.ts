import {defineResources, defineMessages} from '@stellar-enclosure/stellar-enclosure-web-shared/permissions'

export const resources = defineResources([
  {
    "key": "tianquan-shoubing.app.console",
    "type": "APP",
    "target": {
      "applicationCode": "tianquan-shoubing"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.app.console"
    }
  },
  {
    "key": "tianquan-shoubing.page.login",
    "type": "PAGE",
    "target": {
      "route": "/login"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.login"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.admin1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "admin1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "system:platform:admin"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.admin1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.create1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "create1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:create"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.create1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.grant1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "grant1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:grant"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.grant1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.update1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "update1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:update"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.update1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.update2",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "update2"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:update"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.update2"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.update3",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "update3"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:update"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.update3"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.update4",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "update4"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:update"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.update4"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientListPage.update5",
    "type": "BUTTON",
    "target": {
      "component": "src/features/clients/ClientListPage.tsx",
      "action": "update5"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:update"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientListPage.update5"
    }
  },
  {
    "key": "tianquan-shoubing.button.ResourceServerListPage.create1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/resource-servers/ResourceServerListPage.tsx",
      "action": "create1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:create"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ResourceServerListPage.create1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ResourceServerListPage.status1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/resource-servers/ResourceServerListPage.tsx",
      "action": "status1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:status"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ResourceServerListPage.status1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ResourceServerListPage.status2",
    "type": "BUTTON",
    "target": {
      "component": "src/features/resource-servers/ResourceServerListPage.tsx",
      "action": "status2"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:status"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ResourceServerListPage.status2"
    }
  },
  {
    "key": "tianquan-shoubing.button.ResourceServerListPage.status3",
    "type": "BUTTON",
    "target": {
      "component": "src/features/resource-servers/ResourceServerListPage.tsx",
      "action": "status3"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:status"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ResourceServerListPage.status3"
    }
  },
  {
    "key": "tianquan-shoubing.button.TenantListPage.manage1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/tenants/TenantListPage.tsx",
      "action": "manage1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:manage"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.TenantListPage.manage1"
    }
  },
  {
    "key": "tianquan-shoubing.button.TenantListPage.manage2",
    "type": "BUTTON",
    "target": {
      "component": "src/features/tenants/TenantListPage.tsx",
      "action": "manage2"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:manage"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.TenantListPage.manage2"
    }
  },
  {
    "key": "tianquan-shoubing.button.TenantListPage.manage3",
    "type": "BUTTON",
    "target": {
      "component": "src/features/tenants/TenantListPage.tsx",
      "action": "manage3"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:manage"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.TenantListPage.manage3"
    }
  },
  {
    "key": "tianquan-shoubing.button.TenantListPage.manage4",
    "type": "BUTTON",
    "target": {
      "component": "src/features/tenants/TenantListPage.tsx",
      "action": "manage4"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:manage"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.TenantListPage.manage4"
    }
  },
  {
    "key": "tianquan-shoubing.button.UserListPage.create1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/users/UserListPage.tsx",
      "action": "create1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:create"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.UserListPage.create1"
    }
  },
  {
    "key": "tianquan-shoubing.button.UserListPage.update1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/users/UserListPage.tsx",
      "action": "update1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:update"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.UserListPage.update1"
    }
  },
  {
    "key": "tianquan-shoubing.button.UserListPage.password-reset1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/users/UserListPage.tsx",
      "action": "password-reset1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:password-reset"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.UserListPage.password-reset1"
    }
  },
  {
    "key": "tianquan-shoubing.button.UserListPage.revoke-all1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/users/UserListPage.tsx",
      "action": "revoke-all1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:revoke-all"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.UserListPage.revoke-all1"
    }
  },
  {
    "key": "tianquan-shoubing.button.SigningKeyPage.admin1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/keys/SigningKeyPage.tsx",
      "action": "admin1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "system:platform:admin"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.SigningKeyPage.admin1"
    }
  },
  {
    "key": "tianquan-shoubing.button.SigningKeyPage.publish1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/keys/SigningKeyPage.tsx",
      "action": "publish1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:signing-key:publish"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.SigningKeyPage.publish1"
    }
  },
  {
    "key": "tianquan-shoubing.button.SigningKeyPage.activate1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/keys/SigningKeyPage.tsx",
      "action": "activate1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:signing-key:activate"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.SigningKeyPage.activate1"
    }
  },
  {
    "key": "tianquan-shoubing.button.SigningKeyPage.retire1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/keys/SigningKeyPage.tsx",
      "action": "retire1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:signing-key:retire"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.SigningKeyPage.retire1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientResourceGrantPage.admin1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/resource-grants/ClientResourceGrantPage.tsx",
      "action": "admin1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "system:platform:admin"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientResourceGrantPage.admin1"
    }
  },
  {
    "key": "tianquan-shoubing.button.ClientResourceGrantPage.grant1",
    "type": "BUTTON",
    "target": {
      "component": "src/features/resource-grants/ClientResourceGrantPage.tsx",
      "action": "grant1"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:grant"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.button.ClientResourceGrantPage.grant1"
    }
  },
  {
    "key": "tianquan-shoubing.component.overview.users",
    "type": "COMPONENT",
    "target": {
      "component": "OverviewPage",
      "module": "users"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.component.overview.users"
    }
  },
  {
    "key": "tianquan-shoubing.component.overview.clients",
    "type": "COMPONENT",
    "target": {
      "component": "OverviewPage",
      "module": "clients"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.component.overview.clients"
    }
  },
  {
    "key": "tianquan-shoubing.component.overview.tenants",
    "type": "COMPONENT",
    "target": {
      "component": "OverviewPage",
      "module": "tenants"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.component.overview.tenants"
    }
  },
  {
    "key": "tianquan-shoubing.component.overview.resource-servers",
    "type": "COMPONENT",
    "target": {
      "component": "OverviewPage",
      "module": "resource-servers"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.component.overview.resource-servers"
    }
  },
  {
    "key": "tianquan-shoubing.component.overview.keys",
    "type": "COMPONENT",
    "target": {
      "component": "OverviewPage",
      "module": "keys"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:signing-key:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.component.overview.keys"
    }
  },
  {
    "key": "tianquan-shoubing.component.overview.audits",
    "type": "COMPONENT",
    "target": {
      "component": "OverviewPage",
      "module": "audits"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:audit:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.component.overview.audits"
    }
  },
  {
    "key": "tianquan-shoubing.menu.overview",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "overview"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.overview"
    }
  },
  {
    "key": "tianquan-shoubing.menu.identity",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "identity"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.identity"
    }
  },
  {
    "key": "tianquan-shoubing.menu.users",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "users"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.users"
    }
  },
  {
    "key": "tianquan-shoubing.menu.tenants",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "tenants"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.tenants"
    }
  },
  {
    "key": "tianquan-shoubing.menu.oauth",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "oauth"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.oauth"
    }
  },
  {
    "key": "tianquan-shoubing.menu.clients",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "clients"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.clients"
    }
  },
  {
    "key": "tianquan-shoubing.menu.resource-servers",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "resource-servers"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.resource-servers"
    }
  },
  {
    "key": "tianquan-shoubing.menu.security",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "security"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.security"
    }
  },
  {
    "key": "tianquan-shoubing.menu.keys",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "keys"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:signing-key:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.keys"
    }
  },
  {
    "key": "tianquan-shoubing.menu.audits",
    "type": "MENU",
    "target": {
      "component": "AdminLayout",
      "menu": "audits"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:audit:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.menu.audits"
    }
  },
  {
    "key": "tianquan-shoubing.page.overview",
    "type": "PAGE",
    "target": {
      "route": "/overview"
    },
    "access": "PUBLIC",
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.overview"
    }
  },
  {
    "key": "tianquan-shoubing.page.users",
    "type": "PAGE",
    "target": {
      "route": "/users"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:identity-user:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.users"
    }
  },
  {
    "key": "tianquan-shoubing.page.clients",
    "type": "PAGE",
    "target": {
      "route": "/clients"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:oauth-client:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.clients"
    }
  },
  {
    "key": "tianquan-shoubing.page.tenants",
    "type": "PAGE",
    "target": {
      "route": "/tenants"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:tenant:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.tenants"
    }
  },
  {
    "key": "tianquan-shoubing.page.clients.clientId.resource.grants",
    "type": "PAGE",
    "target": {
      "route": "/clients/:clientId/resource-grants"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:grant"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.clients.clientId.resource.grants"
    }
  },
  {
    "key": "tianquan-shoubing.page.resource.servers",
    "type": "PAGE",
    "target": {
      "route": "/resource-servers"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:resource-server:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.resource.servers"
    }
  },
  {
    "key": "tianquan-shoubing.page.keys",
    "type": "PAGE",
    "target": {
      "route": "/keys"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:signing-key:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.keys"
    }
  },
  {
    "key": "tianquan-shoubing.page.audits",
    "type": "PAGE",
    "target": {
      "route": "/audits"
    },
    "requirement": {
      "mode": "ALL",
      "codes": [
        "tianquan-shoubing:audit:read"
      ]
    },
    "i18n": {
      "pageCode": "tianquan-shoubing.web.permissions",
      "labelKey": "tianquan-shoubing.page.audits"
    }
  }
] as const)

export const messages = defineMessages([
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.app.console",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "console"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.login",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "login"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.admin1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "admin1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.create1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "create1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.grant1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "grant1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.update1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "update1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.update2",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "update2"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.update3",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "update3"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.update4",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "update4"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientListPage.update5",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "update5"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ResourceServerListPage.create1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "create1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ResourceServerListPage.status1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "status1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ResourceServerListPage.status2",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "status2"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ResourceServerListPage.status3",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "status3"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.TenantListPage.manage1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "manage1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.TenantListPage.manage2",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "manage2"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.TenantListPage.manage3",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "manage3"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.TenantListPage.manage4",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "manage4"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.UserListPage.create1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "create1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.UserListPage.update1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "update1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.UserListPage.password-reset1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "password-reset1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.UserListPage.revoke-all1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "revoke-all1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.SigningKeyPage.admin1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "admin1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.SigningKeyPage.publish1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "publish1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.SigningKeyPage.activate1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "activate1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.SigningKeyPage.retire1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "retire1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientResourceGrantPage.admin1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "admin1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.button.ClientResourceGrantPage.grant1",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "grant1"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.component.overview.users",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "users"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.component.overview.clients",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "clients"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.component.overview.tenants",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "tenants"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.component.overview.resource-servers",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "resource-servers"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.component.overview.keys",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "keys"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.component.overview.audits",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "audits"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.overview",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "overview"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.identity",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "identity"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.users",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "users"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.tenants",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "tenants"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.oauth",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "oauth"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.clients",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "clients"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.resource-servers",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "resource-servers"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.security",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "security"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.keys",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "keys"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.menu.audits",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "audits"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.overview",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "overview"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.users",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "users"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.clients",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "clients"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.tenants",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "tenants"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.clients.clientId.resource.grants",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "grants"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.resource.servers",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "servers"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.keys",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "keys"
    }
  },
  {
    "pageCode": "tianquan-shoubing.web.permissions",
    "key": "tianquan-shoubing.page.audits",
    "defaultLocale": "en-US",
    "defaults": {
      "en-US": "audits"
    }
  }
] as const)
