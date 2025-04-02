import { redirect } from 'next/navigation';

export default function LocaleRootRedirect({ params }: { params: { locale: string } }) {
    redirect(`/${params.locale}/home`);
}
