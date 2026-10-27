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

## Permission manifest builds and controlled delivery

`npm run build` uses the explicit SDK tool checkout to prepare the digest-pinned RBAC contract, scan and validate all declared modules, typecheck, and build Vite assets. It writes a FULL manifest and artifact record under `.generated/permissions/`, and embeds matching build identifiers in `dist/permission-build.json`. A failed build removes its current success evidence. The frontend owns its APP/MENU/PAGE/COMPONENT/BUTTON declarations; API and FIELD entries reference backend definitions. Form writes require the current identity snapshot, matching field catalog, backend `inputBinding`, and the field's write expression.

For local source verification, provide absolute reviewed paths. The current `permission-toolchain.local.lock.json` has mode `LOCAL_UNCOMMITTED`; it permits offline validation and rejects online registration and distribution. `PAC_CONTRACT_ARTIFACT` must name the exact JAR whose SHA-256 is recorded by that lock. These variables contain paths and build metadata only.

```sh
export PAC_SDK_DIR=/absolute/path/to/web-sdk
export PAC_TOOLCHAIN_LOCK="$PWD/permission-toolchain.local.lock.json"
export PAC_CONTRACT_ARTIFACT=/absolute/path/to/reviewed-permission-contract.jar
npm ci --offline --ignore-scripts
npm run typecheck
npm test -- --run --testTimeout=15000
npm run build
python3 scripts/permission-ci.test.py
node "$PAC_SDK_DIR/scripts/permissions/ci.mjs" --phase validate \
  --lock "$PAC_TOOLCHAIN_LOCK" --manifest .generated/permissions/manifest-v1.json \
  --evidence .generated/permissions/artifact-record.json --artifact dist \
  --output-dir .generated/permission-ci
```

Install the same reviewed SDK tarballs into the npm cache before `npm ci --offline`; use `web-sdk/scripts/verify-consumers.mjs --phase prepare` and then `--phase verify` for the six-consumer lock/integrity check. An npm cache or an offline source build is not npm registry publication.

CI requires a real `permission-toolchain.lock.json` in `PINNED_COMMIT` mode, a clean SDK checkout at its exact commit, and a digest-matching RC artifact. No immutable toolchain pin or target account is fabricated in this working tree. Configure the non-secret `permission-targets.json` with the exact scope, producer, issuer, client and allowed service scopes before enabling delivery. Namespace/environment build settings must match the deployed authorization snapshot.

The normal GitHub/GitLab pipelines perform offline checks and package artifact evidence. Pull requests receive no registration credential. The separate protected delivery phase explicitly chooses `register` or `activate`; registration uses one stable operation ID, and pending/unknown outcomes remain exit code 6 and must be queried with that same ID. Registration does not grant roles or activate a version. Activation consumes the exact successful build plus fresh trusted deployment/readiness evidence and the complete producer selection with existing qualification IDs. The server independently rechecks scope, ownership, revisions and qualification. Keep credentials in protected owner-only files; do not place them in command arguments, manifests, reports or source.

Local unit/build evidence does not prove PostgreSQL migrations, browser/SSO behavior, deployed artifact readiness, real CI runs, or remote registration/activation. Those require the separately prepared environment. None of these commands starts an application, database, container or browser.

GitLab activation additionally requires protected `PERMISSION_DEPLOYMENT_JOB_NAME` (the exact name of a separate successful deployment job) and `PERMISSION_GITLAB_READ_TOKEN_FILE` (an absolute owner-only file containing a `read_api` token). Deployment evidence includes `gitlab: {projectId, pipelineId, jobId}` using decimal strings from the current project. The adapter reads that job and successful pipeline from the configured GitLab API, checks the current protected ref/commit and fresh readiness, and compares the original `permission-deployment.json` job artifact with the local proof. The API must share the `CI_SERVER_URL` HTTPS origin; artifact CDN redirects never receive the API token. These external variables and deployment jobs still require environment configuration and verification.

## Login devices

The **登录设备** page at `/sessions` lists browser/App sessions for the current tenant account, including the client, platform, source address and login time. Accounts keep at most five active sessions; another login evicts the oldest. A confirmed kick closes only the chosen session. All devices use the same account active-role selection.

The page requires `tianquan-shoubing:identity:self:read`; its kick action requires `tianquan-shoubing:identity:self:session-revoke`. Publish the updated backend/frontend permission manifests and configure the existing role/client scope grants before runtime use. The local permission build verifies artifacts only and does not register or activate them.
