import {createContext, useContext, type PropsWithChildren} from 'react'
import {useQuery} from '@tanstack/react-query'
import {evaluateFieldAccess, loadFieldCatalog, type BackendFieldCatalog} from '@stellar-enclosure/stellar-enclosure-web-shared/permissions'
import {useAuth} from '../auth/AuthContext'
import {httpClient} from '../auth/authTransport'
import {fieldReferences, inputFields} from './fieldReferences'

export const FieldCatalogContext = createContext<BackendFieldCatalog | null>(null)
export const FieldCatalogProvider = ({children}: PropsWithChildren) => {
  const {bootstrap} = useAuth()
  const query = useQuery({queryKey: ['identity-field-catalog', bootstrap?.binding], enabled: Boolean(bootstrap), staleTime: 30_000, retry: false,
    queryFn: ({signal}) => loadFieldCatalog(fieldReferences.map(reference => reference.key), async query => {
      const result = await httpClient.request<{success: boolean; data: BackendFieldCatalog}>(`/api/v1/authorization/field-catalog?${query}`, {signal})
      if (result.success !== true || !result.data) throw new Error('字段目录不可用')
      return result.data
    })})
  return <FieldCatalogContext.Provider value={bootstrap && !query.error ? query.data ?? null : null}>{children}</FieldCatalogContext.Provider>
}
export const useWritableFields = (...dtos: readonly (keyof typeof inputFields)[]): boolean => {
  const catalog = useContext(FieldCatalogContext)
  const {bootstrap} = useAuth()
  return dtos.length > 0 && dtos.every(dto => inputFields[dto].every(key =>
    evaluateFieldAccess(key, catalog, bootstrap?.snapshot ?? null, bootstrap?.binding ?? null).writable))
}
