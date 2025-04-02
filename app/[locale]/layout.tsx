import '../globals.scss';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { ReactNode } from 'react';
import Providers from '../providers';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "CMS Dashboard",
    description: "CMS Dashboard - Dashboard dynamic NextJs.",
    openGraph: {
        title: "CMS Dashboard",
        description: "CMS Dashboard - Dashboard dynamic NextJs.",
    },
    twitter: {
        card: "summary_large_image",
        title: "CMS Dashboard",
        description: "CMS Dashboard - Dashboard dynamic NextJs.",
    },
};

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
