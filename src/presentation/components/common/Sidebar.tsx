'use client';
import { Layout, Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();

    const locale = pathname.split('/')[1];
    const handleClick = ({ key }: { key: string }) => {
        router.push(`/${locale}${key}`);
    };

    return (
        <Layout.Sider collapsible>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[pathname.replace(/^\/[a-z]{2}/, '') || '/']}
                onClick={handleClick}
                items={[{ key: '/', label: t('home') }, { key: '/login', label: t('login') }]}
            />
        </Layout.Sider>
    );
}
