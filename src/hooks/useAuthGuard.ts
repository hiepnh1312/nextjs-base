'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAuthGuard = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const language = 'en'
        if (!token) {
            router.replace(`/${language}/login`);
        }
    }, []);
};
