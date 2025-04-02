'use client';

import {
    Card,
    Typography,
    Form,
    Input,
    Button,
    message,
    Space
} from 'antd';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/application/redux/hooks';
import { login } from '@/application/redux/slices/authSlice';
import {useLocale, useTranslations} from 'next-intl';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.auth);
    const router = useRouter();

    // Lấy locale từ next-intl
    const locale = useLocale() || 'vi';  // Dùng `router.locale` hoặc mặc định là 'vi'
    const t = useTranslations(); // Sử dụng `useTranslations` để lấy các chuỗi dịch

    const handleLogin = async (values: { username: string; password: string }) => {
        try {
            const result = await dispatch(login(values)).unwrap();
            message.success(t('login_success')); // Dịch thông báo thành công
            localStorage.setItem('token', result);
            router.replace(`/${locale}/home`); // Dùng locale để điều hướng đến trang home phù hợp
        } catch (err: any) {
            message.error(err.message || t('login_failure')); // Dịch thông báo thất bại
        }
    };

    return (
        <div
            className="min-h-screen  bg-cover bg-center w-[100vw] h-[100vh] flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/bg-login.jpg')",
                backgroundSize: 'cover', // Đảm bảo background đầy đủ màn hình
            }}
        >
            <Card
                className="w-full sm:w-[400px] shadow-2xl rounded-xl bg-white bg-opacity-90 backdrop-blur-md"
            >
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                    <div className="text-center">
                        <Typography.Title level={3}>{t('login_title')}</Typography.Title>
                        <Typography.Text type="secondary">
                            {t('login_description')}
                        </Typography.Text>
                    </div>

                    <Form layout="vertical" onFinish={handleLogin}>
                        <Form.Item
                            name="username"
                            label={t('username')}
                            rules={[{ required: true, message: t('username') }]}
                        >
                            <Input size="large" placeholder="admin" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label={t('password')}
                            rules={[{ required: true, message: t('password') }]}
                        >
                            <Input.Password size="large" placeholder="123456" />
                        </Form.Item>

                        <Form.Item className="mb-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                                loading={loading}
                            >
                                {t('login_button')}
                            </Button>
                        </Form.Item>
                    </Form>
                </Space>
            </Card>
        </div>
    );
}
