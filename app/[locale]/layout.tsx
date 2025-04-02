import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { ReactNode } from 'react';
import Providers from '../providers';

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body>
        <Providers locale={locale}>{children}</Providers>
        </body>
        </html>
    );
}
