# tianquan-shoubing-web

React console for Shoubing identity, tenant, OAuth client and resource-token administration. All first-party modules start at **0.0.1**.

## Pages and capabilities

| Route | Function |
|---|---|
| `/overview` | Identity/security administration overview. |
| `/users` | Manage identity users, reset passwords and revoke user tokens. |
| `/tenants` | Manage tenants and their memberships. |
| `/clients` | Manage OAuth clients, redirect/resource URIs and client credentials. |
| `/clients/:clientId/resource-grants` | Maintain the client's grants to resource servers. |
| `/resource-servers` | Manage resource-server definitions and enabled state. |
| `/keys` | Publish, activate and retire signing keys. |
| `/audits` | Inspect identity administration audit records. |

See [routes](src/app/router.tsx) and [feature modules](src/features/). Authentication uses Edge registration `edge-shoubing`, BFF sessions and `/api/v1/tianquan-shoubing/auth/bootstrap`; the backend is [tianquan-shoubing-service](https://github.com/Stellar-Enclosure/tianquan-shoubing-service). The `/login` page redirects to centralized login rather than collecting a password inside the SPA.

The console manages identity/OAuth resources; RBAC role graphs, constraints and active-role governance are owned by [tianquan-jianshen-web](https://github.com/Stellar-Enclosure/tianquan-jianshen-web). Tokens and signing keys remain server responsibilities. The application supports standalone/portal embedding with `VITE_BASE_PATH`; a frontend build does not verify real consent, token revocation or key rotation.

## Build and test

Requires Node 24 and npm 11. After the SDKs are published:

```bash
npm ci
npm run build
npm test -- --run
```

For the initial release before npm publication, clone `web-sdk` next to this repository:

```bash
node ../web-sdk/scripts/verify-consumers.mjs \
  --workspace "$(cd .. && pwd)" \
  --cache "$HOME/.npm" \
  --output "$(cd ../web-sdk && pwd)/dist/npm-release" \
  --consumer tianquan-shoubing-web --phase verify --online true
```

The verifier uses actual pack checksums and official registry addresses in the committed lock, then validates offline installation. It never publishes packages.

## Application delivery (no package publication)

This repository is a frontend application, not a library. Its `package.json` remains `private: true`; do not publish it to npm or Maven Central. Publish only the reusable packages owned by [web-sdk](https://github.com/Stellar-Enclosure/web-sdk#publish-to-npmjs).

```bash
npm ci
npm test
npm run build
```

Deploy the resulting `dist/` directory as static application assets. Before the first SDK publication, use the Build section's local consumer verification instead of `npm ci` against the public registry. These commands do not start a server.

## Compatibility and publication

Java packages/classes, Bean names, configuration keys, OAuth/RPC identities, APIs, and database ownership are retained. Existing SQL and DDL history are copied byte for byte. Artifact/build versions and necessary build paths change. A successful build does not imply application startup or live infrastructure acceptance.

Git pushes run validation only. Central and npm publication are separate user actions. CI defaults to initial source bootstrap; after publication set `STELLAR_USE_SOURCE_BOOTSTRAP=false` to consume published artifacts directly. Private organizations may supply the Actions secret `STELLAR_ENCLOSURE_READ_TOKEN` with repository read access.

Original MIT/LGPL licenses and author attribution are preserved.
