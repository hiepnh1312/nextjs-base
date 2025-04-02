'use client';

import { ReactNode } from 'react';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
    useAuthGuard(); // ✅ sẽ tự động check token cho toàn bộ nhóm route
    return <>{children}</>;
}
