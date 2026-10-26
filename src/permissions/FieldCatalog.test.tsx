import {cleanup, renderHook} from '@testing-library/react'
import {afterEach, describe, expect, it, vi} from 'vitest'
import type {PropsWithChildren} from 'react'
import type {BackendFieldCatalog} from '@stellar-enclosure/stellar-enclosure-web-shared/permissions'
import {authorizationFixture} from '../test/permissionFixtures'
import {inputFields} from './fieldReferences'
const state = vi.hoisted(() => ({bootstrap: undefined as ReturnType<typeof authorizationFixture> | undefined}))
vi.mock('../auth/AuthContext', () => ({useAuth: () => state}))
import {FieldCatalogContext, useWritableFields} from './FieldCatalog'
afterEach(() => {cleanup(); state.bootstrap = undefined})
const writableCatalog = (): BackendFieldCatalog => {
  const authorization = authorizationFixture(['iam:user:write'])
  return {catalogScope: authorization.snapshot.catalogScope, catalogVersion: authorization.snapshot.catalogVersion,
    fields: Object.fromEntries(inputFields.CreateIdentityUserDTO.map(key => [key, {access: 'PROTECTED', inputBinding: true,
      fieldPolicy: {valueType: 'STRING', write: {mode: 'ALL', codes: ['iam:user:write']}}}]))}
}
const wrapper = (catalog: BackendFieldCatalog | null) => ({children}: PropsWithChildren) => <FieldCatalogContext.Provider value={catalog}>{children}</FieldCatalogContext.Provider>
describe('complete-replacement field experience', () => {
  it('requires current actor permission and a real backend input binding for every submitted field', () => {
    state.bootstrap = authorizationFixture(['iam:user:write'])
    const catalog = writableCatalog()
    expect(renderHook(() => useWritableFields('CreateIdentityUserDTO'), {wrapper: wrapper(catalog)}).result.current).toBe(true)
    const key = inputFields.CreateIdentityUserDTO[0]
    const readonly = {...catalog, fields: {...catalog.fields, [key]: {...catalog.fields[key], inputBinding: false}}}
    expect(renderHook(() => useWritableFields('CreateIdentityUserDTO'), {wrapper: wrapper(readonly)}).result.current).toBe(false)
  })
  it('keeps the form readonly on missing metadata, changed catalog or missing write permission', () => {
    state.bootstrap = authorizationFixture(['iam:user:write'])
    expect(renderHook(() => useWritableFields('CreateIdentityUserDTO'), {wrapper: wrapper(null)}).result.current).toBe(false)
    const catalog = writableCatalog()
    expect(renderHook(() => useWritableFields('CreateIdentityUserDTO'), {wrapper: wrapper({...catalog, catalogVersion: '99'})}).result.current).toBe(false)
    state.bootstrap = authorizationFixture(['iam:user:read'])
    expect(renderHook(() => useWritableFields('CreateIdentityUserDTO'), {wrapper: wrapper(catalog)}).result.current).toBe(false)
  })
})
