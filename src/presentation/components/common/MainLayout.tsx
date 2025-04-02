'use client';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <Header />
                <Layout.Content style={{ padding: 24 }}>{children}</Layout.Content>
                <Footer />
            </Layout>
        </Layout>
    );
}
