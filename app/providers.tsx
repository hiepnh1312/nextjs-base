'use client';

import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Provider } from 'react-redux';
import { store } from '@/application/redux/store';

import vi from '@/i18n/messages/vi.json';
import en from '@/i18n/messages/en.json';

const messagesMap = {
    vi,
    en
};

export default function Providers({
                                      children,
                                      locale
                                  }: {
    children: ReactNode;
    locale: string;
}) {
    const messages = messagesMap[locale as 'vi' | 'en'] || messagesMap.vi;

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Provider store={store}>{children}</Provider>
        </NextIntlClientProvider>
    );
}
