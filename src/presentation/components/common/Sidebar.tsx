'use client';
import {Layout, Menu, MenuProps} from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {AppstoreOutlined, ContainerOutlined, SettingOutlined} from "@ant-design/icons";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();

    const locale = pathname.split('/')[1];
    const handleClick = ({ key }: { key: string }) => {
        router.push(`/${locale}${key}`);
    };
    const items: MenuProps['items'] = [
        {
            label: 'Trang chủ',
            key: 'home',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Quản lý',
            key: 'manage',
            icon: <SettingOutlined />,
            children: [
                { label: 'Người dùng', key: 'manage-users' },
                { label: 'Vai trò', key: 'manage-roles' },
            ],
        },
        {
            label: 'Nội dung',
            key: 'content',
            icon: <ContainerOutlined />,
            children: [
                { label: 'Bài viết', key: 'content-posts' },
                { label: 'Thư viện', key: 'content-library' },
            ],
        },
    ];
    return (
        <Layout.Sider collapsible theme={'dark'}>
            <div className="h-16 px-4 flex items-center justify-center">
                <span className="text-lg font-semibold text-blue-600">CMS Dashboard</span>
            </div>
                <Menu
                    theme={'dark'}
                    mode="inline"
                    defaultSelectedKeys={['home']}
                    items={items}
                />
        </Layout.Sider>
    );
}
