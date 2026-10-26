import {useResourcePermission} from '../permissions/useResourcePermission'
import {Breadcrumb, Tag} from 'antd'
import type {ItemType} from 'antd/es/breadcrumb/Breadcrumb'
import {HomeOutlined, LogoutOutlined} from '@ant-design/icons'
import {
    EnterpriseLayout,
    type EnterpriseLayoutConfig,
    type EnterpriseNavigationItem,
} from '@stellar-enclosure/stellar-enclosure-web-shared'
import {type PropsWithChildren, useMemo} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useAuth} from '../auth/AuthContext'
import {version} from '../../package.json'

interface NavItem {
    key: string
    label: string
    path?: string
    permission: string
    activePathPrefixes?: readonly string[]
    children?: readonly NavItem[]
}

// 导航只消费当前版本快照与静态资源声明。
const ALL_NAV_ITEMS: NavItem[] = [
    {key: 'overview', label: '身份概览', path: '/overview', permission: 'tianquan-shoubing.menu.overview'},
    {key: 'identity', label: '身份目录', permission: 'tianquan-shoubing.menu.identity', children: [
        {key: 'users', label: '全局用户', path: '/users', permission: 'tianquan-shoubing.menu.users'},
        {key: 'tenants', label: '租户目录', path: '/tenants', permission: 'tianquan-shoubing.menu.tenants'},
    ]},
    {key: 'oauth', label: 'OAuth 与资源', permission: 'tianquan-shoubing.menu.oauth', children: [
        {key: 'clients', label: 'OAuth 客户端', path: '/clients', activePathPrefixes: ['/clients'], permission: 'tianquan-shoubing.menu.clients'},
        {key: 'resource-servers', label: 'Resource Server', path: '/resource-servers', permission: 'tianquan-shoubing.menu.resource-servers'},
    ]},
    {key: 'security', label: '安全治理', permission: 'tianquan-shoubing.menu.security', children: [
        {key: 'keys', label: '签名密钥', path: '/keys', permission: 'tianquan-shoubing.menu.keys'},
        {key: 'audits', label: '安全审计', path: '/audits', permission: 'tianquan-shoubing.menu.audits'},
    ]},
]

const PATH_LABELS: Record<string, string> = {
    '/overview': '身份概览',
    '/users': '全局用户',
    '/clients': 'OAuth 客户端',
    '/tenants': '租户目录',
    '/resource-servers': 'Resource Server',
    '/keys': '签名密钥',
    '/audits': '安全审计',
}

export const AdminLayout = ({ children, embedded = false }: PropsWithChildren<{ readonly embedded?: boolean }>) => {
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const { has } = useResourcePermission()

    const navigation: EnterpriseNavigationItem[] = useMemo(
        () => filterNavigation(ALL_NAV_ITEMS, has),
        [has],
    )

    const currentPath = location.pathname
    const breadcrumbItems = useMemo((): ItemType[] => {
        const items: ItemType[] = [{title: <><HomeOutlined/> 首页</>}]
        const label = PATH_LABELS[currentPath]
        if (label && currentPath !== '/overview') {
            items.push({title: label})
        }
        if (currentPath.includes('/resource-grants')) {
            items.push({title: 'Resource Grant'})
        }
        return items
    }, [currentPath])

    const config: EnterpriseLayoutConfig = {
        platformName: '统一身份平台',
        navigation,
        actions: auth.bootstrap
            ? <Tag color="blue">{auth.bootstrap.user.tenantId}</Tag>
            : undefined,
        user: auth.bootstrap
            ? {
                name: auth.bootstrap.user.identitySub,
                description: `Tenant: ${auth.bootstrap.user.tenantId}`,
                menu: [
                    {
                        key: 'logout',
                        label: '退出登录',
                        icon: <LogoutOutlined/>,
                        onClick: () => {
                            void auth.logout()
                            navigate('/login', { replace: true })
                        },
                    },
                ],
            }
            : undefined,
        footer: { version },
    }

    const layoutConfig: EnterpriseLayoutConfig = embedded
        ? {...config, hideHeader: true, hideFooter: true}
        : config

    return (
        <EnterpriseLayout config={layoutConfig}>
            <Breadcrumb items={breadcrumbItems} style={{ marginBottom: 16 }} />
            {children}
        </EnterpriseLayout>
    )
}

const filterNavigation = (
    items: readonly NavItem[],
    has: (permission: string) => boolean,
): EnterpriseNavigationItem[] => items.flatMap((item): EnterpriseNavigationItem[] => {
    const children = item.children ? filterNavigation(item.children, has) : []
    const allowed = has(item.permission)
    if (item.children) {
        return children.length > 0 ? [{key: item.key, label: item.label, children}] : []
    }
    return allowed ? [{
        key: item.key,
        label: item.label,
        path: item.path,
        activePathPrefixes: item.activePathPrefixes,
    }] : []
})
