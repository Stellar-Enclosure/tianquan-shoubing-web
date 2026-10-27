import {Button, Card, message, Popconfirm, Space, Table, Tag, Tooltip, Typography} from 'antd'
import {ReloadOutlined} from '@ant-design/icons'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {PageState} from '@stellar-enclosure/stellar-enclosure-web-shared'
import {httpClient} from '../../auth/AuthContext'
import {useResourcePermission} from '../../permissions/useResourcePermission'
import type {DeviceSessionVO} from '../../api/types'

const formatTime = (value: string) => new Date(value).toLocaleString()

export const DeviceSessionPage = () => {
    const {has} = useResourcePermission()
    const queryClient = useQueryClient()
    const [messageApi, contextHolder] = message.useMessage()
    const sessions = useQuery({
        queryKey: ['tianquan-shoubing', 'device-sessions'],
        queryFn: () => httpClient.request<DeviceSessionVO[]>('/api/v1/tianquan-shoubing/me/sessions'),
        retry: false,
    })
    const revoke = useMutation({
        mutationFn: (sessionId: string) => httpClient.request<void>(
            `/api/v1/tianquan-shoubing/me/sessions/${encodeURIComponent(sessionId)}/revoke`, {method: 'POST'}),
        onSuccess: async () => {
            messageApi.success('该会话已踢出')
            await queryClient.invalidateQueries({queryKey: ['tianquan-shoubing', 'device-sessions']})
        },
        onError: error => messageApi.error(error instanceof Error ? error.message : '踢出失败，请重试'),
    })
    return <>
        {contextHolder}
        <Card title="登录设备" extra={<Space>
            <Tag>{sessions.data?.length ?? 0} / 5</Tag>
            <Button icon={<ReloadOutlined/>} onClick={() => {void sessions.refetch()}}>刷新</Button>
        </Space>}>
            <Typography.Paragraph type="secondary">
                当前租户账号最多保留五个登录会话，新会话会踢出最早的会话。浏览器和 App 分别管理，同一会话访问多个资源只占一个名额。
                所有端共享账号当前激活的一组角色；切换角色会同时影响其他端。
            </Typography.Paragraph>
            <PageState loading={sessions.isPending} error={sessions.error} empty={sessions.data?.length === 0}
                       emptyDescription="暂无登录设备" onRetry={() => {void sessions.refetch()}}>
                <Table<DeviceSessionVO> rowKey="sessionId" dataSource={sessions.data ?? []} pagination={false}
                    scroll={{x: 900}} columns={[
                        {title: '客户端', dataIndex: 'clientName'},
                        {title: '终端', dataIndex: 'channel', render: value => <Tag>{value === 'BROWSER' ? '浏览器' : 'App'}</Tag>},
                        {title: '平台', dataIndex: 'platform', render: (value, record) => <Tooltip title={record.userAgent}>{value === 'UNKNOWN' ? '未知' : value}</Tooltip>},
                        {title: '来源地址', dataIndex: 'ipAddress', render: value => value ?? '未知'},
                        {title: '登录时间', dataIndex: 'authenticatedAt', render: formatTime},
                        {title: '有效期至', dataIndex: 'expiresAt', render: formatTime},
                        {title: '操作', key: 'actions', render: (_, record) => has('tianquan-shoubing.button.sessions.revoke') &&
                            <Popconfirm title="踢出这个会话？" description="该客户端的授权将失效，其他客户端保持登录。"
                                        okText="踢出" cancelText="取消" onConfirm={() => revoke.mutateAsync(record.sessionId)}>
                                <Button danger size="small" loading={revoke.isPending && revoke.variables === record.sessionId}>踢出</Button>
                            </Popconfirm>},
                    ]}/>
            </PageState>
        </Card>
    </>
}
