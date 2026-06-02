'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Monitor, Users, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function ProgramsClient({ locale }: { locale: string }) {
  const t = useTranslations('programs');

  const flagshipItems = [
    { key: 'personality', color: 'var(--orange)', glyph: '✦', img: IMAGES.personality },
    { key: 'speaking',    color: 'var(--green)',  glyph: '◆', img: IMAGES.speaking    },
    { key: 'career',      color: 'var(--blue)',   glyph: '◉', img: IMAGES.career      },
    { key: 'leadership',  color: 'var(--gold)',   glyph: '★', img: IMAGES.leadership  },
    { key: 'softSkills',  color: '#9b68c4',       glyph: '⬡', img: IMAGES.softSkills  },
    { key: 'workshop',    color: '#e05a6e',       glyph: '▲', img: IMAGES.workshop    },
  ] as const;

  const categories = [
    {
      label: t('categories.software'), icon: '💻', color: 'var(--blue)', tNs: 'software_items',
      img: IMAGES.coding,
      items: [{ key: 'fullstack', icon: '⬡' }, { key: 'java', icon: '◉' }, { key: 'blockchain', icon: '✦' }],
    },
    {
      label: t('categories.technology'), icon: '🔬', color: 'var(--green)', tNs: 'tech_items',
      img: IMAGES.ai,
      items: [
        { key: 'ai', icon: '✦' }, { key: 'ml', icon: '◆' }, { key: 'python', icon: '◉' },
        { key: 'excel', icon: '★' }, { key: 'datascience', icon: '▲' }, { key: 'cyber', icon: '⬡' },
        { key: 'cloud', icon: '◎' },
      ],
    },
    {
      label: t('categories.microsoft'), icon: '🔵', color: '#0078d4', tNs: 'microsoft_items',
      img: IMAGES.cloud,
      items: [{ key: 'azure', icon: '◆' }],
    },
    {
      label: t('categories.business'), icon: '📊', color: 'var(--gold)', tNs: 'business_items',
      img: IMAGES.data,
      items: [
        { key: 'marketing', icon: '✦' }, { key: 'analytics', icon: '◆' },
        { key: 'leadership_mgmt', icon: '★' }, { key: 'sixsigma', icon: '◉' },
      ],
    },
    {
      label: t('categories.language'), icon: '🌍', color: '#9b68c4', tNs: 'language_items',
      img: IMAGES.speaking,
      items: [
        { key: 'english', icon: '◆' }, { key: 'softSkillsComm', icon: '✦' },
        { key: 'foreign', icon: '◉' }, { key: 'ielts', icon: '▲' },
      ],
    },
  ] as const;

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src={IMAGES.heroStudents} alt="Programs" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,9,0.97) 0%, rgba(8,15,9,0.85) 55%, rgba(8,15,9,0.5) 100%)' }} />
        <div className="bg-mesh" style={{ position: 'absolute', inset: 0 }} />
        <div className="container" style={{ position: 'relative', padding: 'clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,3rem)' }}>
          <nav className="breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'var(--cream-dim)' }}>{t('headline')}</span>
          </nav>
          <div className="eyebrow">{t('tag')}</div>
          <h1 className="display-xl" style={{ maxWidth: '16ch', marginBottom: '1.5rem' }}>{t('headline')}</h1>
          <p className="body-lg" style={{ maxWidth: '50ch' }}>{t('sub')}</p>
        </div>
      </section>

      {/* ── FLAGSHIP ── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow">{t('flagship.tag')}</div>
            <h2 className="display-md">{t('flagship.headline')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,360px),1fr))', gap: '1.25rem' }}>
            {flagshipItems.map(({ key, color, glyph, img }) => {
              const item = t.raw(`flagship_items.${key}`) as any;
              return (
                <div key={key} className="prog-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  {/* Image header */}
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(8,15,9,0.05) 0%, rgba(8,15,9,0.75) 100%)` }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${color},transparent)` }} />
                    {/* Glyph badge */}
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: 42, height: 42, borderRadius: 10, background: `${color}28`, backdropFilter: 'blur(8px)', border: `1px solid ${color}45`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color }}>
                      {glyph}
                    </div>
                    {/* Title on image bottom */}
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', color: '#fff', lineHeight: 1.2 }}>{item.title}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p className="body-sm" style={{ lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{item.desc}</p>
                    {/* Meta tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {[
                        { icon: Clock,   text: item.weeks  },
                        { icon: Monitor, text: item.medium },
                        { icon: Users,   text: item.format },
                        ...(item.locations ? [{ icon: MapPin, text: item.locations }] : []),
                      ].filter(m => m.text).map(({ icon: Icon, text }) => (
                        <span key={text} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', padding: '4px 9px', borderRadius: 99 }}>
                          <Icon size={10} /> {text}
                        </span>
                      ))}
                    </div>
                    <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link href={`/${locale}/contact`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color, fontWeight: 600, textDecoration: 'none' }}>
                        {t('learnMore')}
                      </Link>
                      <Link href={`/${locale}/contact`} className="btn btn-primary btn-sm">Enroll</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="rule-gradient" />

      {/* ── TECH COURSES — with category banners ── */}
      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow">{t('courses.tag')}</div>
            <h2 className="display-md">{t('courses.headline')}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {categories.map(({ label, icon, color, items, tNs, img }) => (
              <div key={tNs}>
                {/* Category banner with image */}
                <div style={{ position: 'relative', height: 120, borderRadius: 16, overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <Image src={img} alt={label} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(8,15,9,0.92) 0%, rgba(8,15,9,0.6) 60%, rgba(8,15,9,0.3) 100%)` }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', paddingLeft: '2rem', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}25`, backdropFilter: 'blur(8px)', border: `1px solid ${color}45`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', color: '#fff' }}>{label}</h3>
                  </div>
                </div>

                {/* Course cards grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap: '1rem' }}>
                  {items.map(({ key, icon: glyph }) => {
                    const item = t.raw(`${tNs}.${key}`) as any;
                    return (
                      <div key={key} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color, fontWeight: 700, flexShrink: 0 }}>{glyph}</span>
                          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.05rem', color: 'var(--cream)', lineHeight: 1.25 }}>{item.title}</h4>
                        </div>
                        <p className="body-sm" style={{ lineHeight: 1.65, flex: 1 }}>{item.desc}</p>
                        <Link href={`/${locale}/contact`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                          {t('learnMore')}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ position: 'relative', padding: 'clamp(4rem,8vw,6rem) 0', overflow: 'hidden' }}>
        <Image src={IMAGES.teamCollab} alt="Team" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.92)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: '1rem' }}>{t('notSure.headline')}</h2>
              <p className="body-lg">{t('notSure.sub')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                {t('notSure.cta')} <ArrowRight size={18} />
              </Link>
              <Link href={`/${locale}/contact`} className="btn btn-outline btn-lg">Talk to a mentor</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
