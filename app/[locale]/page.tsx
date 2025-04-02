'use client';
import { useTranslations } from 'next-intl';
import MainLayout from '@/presentation/components/common/MainLayout';

export default function HomePage() {
    const t = useTranslations();
    return <MainLayout>{t('home')}</MainLayout>;
}
