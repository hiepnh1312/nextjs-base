'use client';
import { Select } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange = (value: string) => {
        const segments = pathname.split('/');
        segments[1] = value;
        router.push(segments.join('/'));
    };

    return (
        <Select
            value={locale}
            onChange={handleChange}
            options={[{ label: '🇻🇳 VI', value: 'vi' }, { label: '🇺🇸 EN', value: 'en' }]}
        />
    );
}
