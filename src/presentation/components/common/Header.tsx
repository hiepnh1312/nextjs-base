'use client';
import { Layout, Row, Col } from 'antd';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const t = useTranslations();
    return (
        <Layout.Header style={{ background: '#001529', padding: '0 16px' }}>
            <Row justify="space-between">
                <Col style={{ color: '#fff' }}>{t('home')}</Col>
                <Col><LanguageSwitcher /></Col>
            </Row>
        </Layout.Header>
    );
}
