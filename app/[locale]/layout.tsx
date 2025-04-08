import '../globals.scss';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Providers from '../providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CMS Dashboard',
    description: 'CMS Dashboard - Dashboard dynamic NextJs.'
};

export default async function RootLayout({
                                             children,
                                             params: { locale },
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const translate = await getMessages();

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={translate}>
            <Providers>{children}</Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
