'use client';

import {
    Card,
    Typography,
    Input,
    Button,
    message,
    Space,
    Form as AntForm
} from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/application/redux/hooks';
import { login } from '@/application/redux/slices/authSlice';
import { useLocale, useTranslations } from 'next-intl';
import { loginSchema } from '@/schema/auth.schema';
import { LoginPayload } from '@/domain/auth';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.auth);
    const router = useRouter();

    const locale = useLocale() || 'vi';
    const t = useTranslations();

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<LoginPayload>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (values: LoginPayload) => {
        try {
            const result = await dispatch(login(values)).unwrap();
            message.success(t('login_success'));
            localStorage.setItem('token', result);
            router.replace(`/${locale}/home`);
        } catch (err: any) {
            message.error(err.message || t('login_failure'));
        }
    };

    return (
        <div
            className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/bg-login.jpg')"
            }}
        >
            <Card className="w-full sm:w-[400px] shadow-2xl rounded-xl bg-white bg-opacity-90 backdrop-blur-md">
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                    <div className="text-center">
                        <Typography.Title level={3}>{t('login_title')}</Typography.Title>
                        <Typography.Text type="secondary">
                            {t('login_description')}
                        </Typography.Text>
                    </div>

                    <AntForm layout="vertical" onFinish={handleSubmit(onSubmit)}>
                        <AntForm.Item
                            label={t('username')}
                            validateStatus={errors.username ? 'error' : ''}
                            help={errors.username && t(errors.username.message!)}
                        >
                            <Controller
                                name="username"
                                control={control}
                                render={({ field }) => (
                                    <Input size="large" placeholder="admin" {...field} />
                                )}
                            />
                        </AntForm.Item>

                        <AntForm.Item
                            label={t('password')}
                            validateStatus={errors.password ? 'error' : ''}
                            help={errors.password && t(errors.password.message!)}
                        >
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <Input.Password size="large" placeholder="123456" {...field} />
                                )}
                            />
                        </AntForm.Item>

                        <AntForm.Item className="mb-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                                loading={loading}
                            >
                                {t('login_button')}
                            </Button>
                        </AntForm.Item>
                    </AntForm>
                </Space>
            </Card>
        </div>
    );
}
