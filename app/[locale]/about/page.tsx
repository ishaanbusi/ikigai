import { getLocale } from 'next-intl/server';
import AboutClient from '@/components/AboutClient';

export default async function AboutPage() {
  const locale = await getLocale();
  return <AboutClient locale={locale} />;
}
