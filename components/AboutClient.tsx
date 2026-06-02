'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, ArrowRight } from 'lucide-react';
import IkigaiDiagram from '@/components/IkigaiDiagram';
import { IMAGES } from '@/lib/images';

export default function AboutClient({ locale }: { locale: string }) {
  const t   = useTranslations('about');
  const iki = useTranslations('home.ikigai');

  const teamMembers = t.raw('team.members') as Array<{ name: string; role: string; bio: string }>;
  const memberColors = ['var(--orange)', 'var(--green)', 'var(--blue)', 'var(--gold)'];
  const memberAvatars = [IMAGES.avatar2, IMAGES.avatar1, IMAGES.avatar3, IMAGES.avatar2];

  const timeline = [
    { year: '2019', label: 'Founded in Mumbai', color: 'var(--orange)' },
    { year: '2020', label: 'First 50 students graduate', color: 'var(--gold)' },
    { year: '2021', label: 'Online platform launches', color: 'var(--green)' },
    { year: '2022', label: 'Corporate partnerships begin', color: 'var(--blue)' },
    { year: '2023', label: '200+ students, 10 new programs', color: '#9b68c4' },
    { year: '2026', label: '500+ lives transformed', color: 'var(--green-hi)' },
  ];

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src={IMAGES.aboutHero} alt="Team workshop" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,9,0.97) 0%, rgba(8,15,9,0.85) 55%, rgba(8,15,9,0.5) 100%)' }} />
        <div className="bg-mesh" style={{ position: 'absolute', inset: 0 }} />

        <div className="container" style={{ position: 'relative', padding: 'clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,3rem)' }}>
          <nav className="breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'var(--cream-dim)' }}>About</span>
          </nav>
          <div className="eyebrow">{t('tag')}</div>
          <h1 className="display-xl" style={{ maxWidth: '16ch', marginBottom: '1.5rem' }}>{t('headline')}</h1>
          <p className="body-lg" style={{ maxWidth: '46ch' }}>{t('sub')}</p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: '1.5rem' }}>
            {[
              { key: 'mission', icon: Target, color: 'var(--orange)', num: '01' },
              { key: 'vision',  icon: Eye,    color: 'var(--green)',  num: '02' },
            ].map(({ key, icon: Icon, color, num }) => (
              <div key={key} className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', right: '1.5rem', top: '1rem', fontFamily: 'var(--font-display)', fontSize: '6rem', fontWeight: 700, color: 'rgba(255,255,255,0.025)', lineHeight: 1, userSelect: 'none' }}>{num}</span>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}15`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>{t(`${key}.title` as any)}</h3>
                <p className="body-lg">{t(`${key}.desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule-gradient" />

      {/* ── OUR STORY — image + timeline ── */}
      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '5rem', alignItems: 'start' }}>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '3rem' }}>
              <div className="timeline-line" />
              {timeline.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.85rem', width: 20, height: 20, borderRadius: '50%', background: `${item.color}20`, border: `2px solid ${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color }} />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', color: item.color, textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{item.year}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--cream-dim)' }}>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="eyebrow">{t('story.tag')}</div>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>{t('story.headline')}</h2>
              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>{t('story.sub')}</p>
              <p className="body-md" style={{ marginBottom: '1rem' }}>{t('story.p1')}</p>
              <p className="body-md" style={{ marginBottom: '1rem' }}>{t('story.p2')}</p>
              <p className="body-md" style={{ color: 'var(--green-hi)', fontStyle: 'italic', marginBottom: '2rem' }}>{t('story.p3')}</p>
              {/* Story image */}
              <div style={{ position: 'relative', height: 220, borderRadius: 16, overflow: 'hidden' }}>
                <Image src={IMAGES.teamCollab} alt="Our team" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.3)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="container" style={{ padding: 'clamp(2rem,4vw,3rem) clamp(1.25rem,4vw,3rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '500+', label: 'Lives Transformed' },
              { num: '200+', label: 'Sessions Conducted' },
              { num: '50+',  label: 'Corporate Partners'  },
              { num: '98%',  label: 'Satisfaction Rate'   },
              { num: '7+',   label: 'Years of Excellence' },
            ].map((s, i) => (
              <div key={i}>
                <div className="stat-num" style={{ color: i % 2 === 0 ? 'var(--orange)' : 'var(--cream)' }}>{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FULL-WIDTH TEAM PHOTO ── */}
      <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
        <Image src={IMAGES.office} alt="IkigaiE office" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, rgba(8,15,9,0.5) 50%, rgba(8,15,9,0.2) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0 }}>
          <div className="container">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,3vw,2rem)', fontStyle: 'italic', color: 'var(--cream)', opacity: 0.9 }}>
              "Building India's most purposeful community."
            </p>
          </div>
        </div>
      </div>

      {/* ── TEAM ── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow">{t('team.tag')}</div>
            <h2 className="display-md">{t('team.headline')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap: '1.25rem' }}>
            {teamMembers.map((member, i) => {
              const color = memberColors[i % memberColors.length];
              return (
                <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  {/* Avatar image header */}
                  <div style={{ position: 'relative', height: 140, background: `${color}10` }}>
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${color}20, rgba(8,15,9,0.4))` }} />
                    <div style={{ position: 'absolute', bottom: '-28px', left: '1.5rem', width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', border: `3px solid var(--bg-2)`, boxShadow: `0 4px 16px rgba(0,0,0,0.4)` }}>
                      <Image src={memberAvatars[i % memberAvatars.length]} alt={member.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    {/* Decorative glyph */}
                    <div style={{ position: 'absolute', right: '1.5rem', top: '1rem', fontFamily: 'var(--font-display)', fontSize: '4rem', color: `${color}20`, fontWeight: 700, lineHeight: 1 }}>
                      {['✦','◆','◉','★'][i % 4]}
                    </div>
                  </div>
                  <div style={{ padding: '2rem 1.5rem 1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.05rem', color: 'var(--cream)', marginBottom: 3 }}>{member.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, color, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>{member.role}</p>
                    <div style={{ height: 1, background: 'var(--border)', marginBottom: '1rem' }} />
                    <p className="body-sm" style={{ lineHeight: 1.7 }}>{member.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section-sm" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>Ready to begin your journey?</h2>
              <p className="body-lg">Explore our programs or speak with a mentor directly.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href={`/${locale}/programs`} className="btn btn-primary btn-lg">Explore Programs <ArrowRight size={18} /></Link>
              <Link href={`/${locale}/contact`} className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
