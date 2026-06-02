import { getLocale } from 'next-intl/server';
import HomeClient from '@/components/HomeClient';

export default async function HomePage() {
  const locale = await getLocale();
  return <HomeClient locale={locale} />;
}
