'use client';

import { Avatar, Dropdown, MenuProps, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.replace('/vi/login');
    };

    const items: MenuProps['items'] = [
        {
            key: 'logout',
            label: <span onClick={handleLogout}>Đăng xuất</span>,
        },
    ];

    return (
        <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Hệ thống quản lý</h1>
            <Dropdown menu={{ items }} trigger={['click']}>
                <Space className="cursor-pointer">
                    <Avatar size="large" icon={<UserOutlined />} />
                    <span className="hidden sm:inline-block font-medium">Người dùng</span>
                </Space>
            </Dropdown>
        </header>
    );
}
