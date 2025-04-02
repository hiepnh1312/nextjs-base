'use client';

import { Card, Form, Input, Button, message } from 'antd';
import { useAppDispatch, useAppSelector } from '@/application/redux/hooks';
import { login } from '@/application/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.auth);
    const router = useRouter();
    const t = useTranslations();

    const handleLogin = (values: any) => {
        dispatch(login(values))
            .unwrap()
            .then(() => {
                message.success(t('success_login'));
                router.push('/');
            })
            .catch(() => {
                message.error(t('invalid_login'));
            });
    };

    return (
        <Card title={t('login')} style={{ width: 400, margin: '100px auto' }}>
            <Form onFinish={handleLogin} layout="vertical">
                <Form.Item name="username" label={t('username')} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label={t('password')} rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    {t('login')}
                </Button>
            </Form>
        </Card>
    );
}
