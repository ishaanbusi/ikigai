import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PROGRAMS, getAllSlugs } from '@/lib/programData';
import ProgramDetailClient from '@/components/ProgramDetailClient';

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const program = PROGRAMS[slug];
  if (!program) notFound();
  return <ProgramDetailClient program={program} locale={locale} />;
}
