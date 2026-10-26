import {usePermission} from '@stellar-enclosure/stellar-enclosure-web-shared/react-permissions'
import {useAuth} from '../auth/AuthContext'
import {resources} from './resources'

export const useResourcePermission = () => {
  const {bootstrap} = useAuth()
  const permission = usePermission(bootstrap?.snapshot ?? null, bootstrap?.binding ?? null)
  return {has: (key: string) => {
    const resource = resources.find(value => value.key === key)
    return resource ? permission.allows('requirement' in resource ? resource.requirement : {access: resource.access}) : false
  }}
}
