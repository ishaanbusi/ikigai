import { getLocale } from 'next-intl/server';
import ProgramsClient from '@/components/ProgramsClient';

export default async function ProgramsPage() {
  const locale = await getLocale();
  return <ProgramsClient locale={locale} />;
}
