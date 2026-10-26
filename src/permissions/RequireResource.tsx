import type {PropsWithChildren} from 'react'
import {Result} from 'antd'
import type {ResourceKey} from '@stellar-enclosure/stellar-enclosure-web-shared/permissions'
import {resources} from './resources'
import {useResourcePermission} from './useResourcePermission'

export const RequireResource = ({resourceKey, children}: PropsWithChildren<{resourceKey: ResourceKey<typeof resources>}>) =>
  useResourcePermission().has(resourceKey) ? children : <Result status="403" title="403" subTitle="当前身份没有此页面的权限" />
