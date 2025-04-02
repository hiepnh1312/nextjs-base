'use client';
import { Layout } from 'antd';
export default function Footer() {
    return (
        <Layout.Footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} NextJS Clean Arch
        </Layout.Footer>
    );
}
