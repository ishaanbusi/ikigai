import { getLocale } from 'next-intl/server';
import PhilosophyClient from '@/components/PhilosophyClient';

export default async function PhilosophyPage() {
  const locale = await getLocale();
  return <PhilosophyClient locale={locale} />;
}
