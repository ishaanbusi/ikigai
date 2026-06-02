'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import IkigaiDiagram from '@/components/IkigaiDiagram';
import { IMAGES } from '@/lib/images';
import { ArrowRight } from 'lucide-react';

export default function PhilosophyClient({ locale }: { locale: string }) {
  const t   = useTranslations('philosophy');
  const iki = useTranslations('home.ikigai');

  const pillars  = t.raw('pillars.items')  as Array<{ title: string; desc: string }>;
  const approach = t.raw('approach.items') as Array<{ step: string; title: string; desc: string }>;

  const pillarColors = ['var(--orange)', 'var(--green)', 'var(--blue)', 'var(--gold)'];
  const pillarGlyphs = ['✦', '◆', '◉', '★'];
  const pillarImages = [IMAGES.personality, IMAGES.speaking, IMAGES.career, IMAGES.leadership];

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO — zen garden full-bleed ── */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src={IMAGES.philosophyHero} alt="Zen garden" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,9,0.96) 0%, rgba(8,15,9,0.80) 55%, rgba(8,15,9,0.45) 100%)' }} />
        {/* Big kanji */}
        <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'serif', fontSize: 'clamp(10rem,20vw,18rem)', color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>生</div>

        <div className="container" style={{ position: 'relative', padding: 'clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,3rem)' }}>
          <nav className="breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'var(--cream-dim)' }}>Philosophy</span>
          </nav>
          <div className="eyebrow">{t('tag')}</div>
          <h1 className="display-xl" style={{ maxWidth: '18ch', marginBottom: '1.5rem' }}>{t('headline')}</h1>
          <p className="body-lg" style={{ maxWidth: '46ch' }}>{t('sub')}</p>
        </div>
      </section>

      {/* ── PILLARS — cards with small image thumbnails ── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow">{t('pillars.tag')}</div>
            <h2 className="display-md">{t('pillars.headline')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))', gap: '1.25rem' }}>
            {pillars.map((item, i) => (
              <div key={i} className="card step-card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Small image strip */}
                <div style={{ position: 'relative', height: 120, overflow: 'hidden' }}>
                  <Image src={pillarImages[i]} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(8,15,9,0.2), rgba(8,15,9,0.7))` }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${pillarColors[i]},transparent)` }} />
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '1.25rem', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: pillarColors[i], fontWeight: 700 }}>
                    {pillarGlyphs[i]}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom,${pillarColors[i]},transparent)` }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{item.title}</h3>
                  <p className="body-md" style={{ lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule-gradient" />

      {/* ── WHY IKIGAI — sakura image + ikigai diagram overlay ── */}
      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Stacked images with ikigai overlay */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', height: 480, borderRadius: 24, overflow: 'hidden' }}>
                <Image src={IMAGES.sakura} alt="Cherry blossoms" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,9,0.55) 0%, rgba(8,15,9,0.2) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IkigaiDiagram
                    labels={{ passion: iki('passion'), mission: iki('mission'), vocation: iki('vocation'), profession: iki('profession') }}
                    size={320}
                  />
                </div>
              </div>
              {/* Floating stat card */}
              <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: 'var(--bg-2)', border: '1px solid var(--border-md)', borderRadius: 16, padding: '1.25rem 1.75rem', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                <div className="stat-num" style={{ color: 'var(--orange)' }}>500+</div>
                <div className="stat-label">Lives transformed</div>
              </div>
            </div>

            <div>
              <div className="eyebrow">{t('ikigai_deep.tag')}</div>
              <h2 className="display-md" style={{ marginBottom: '2rem' }}>{t('ikigai_deep.headline')}</h2>
              {[t('ikigai_deep.p1'), t('ikigai_deep.p2'), t('ikigai_deep.p3')].map((para, i) => (
                <p key={i} className="body-lg" style={{ marginBottom: '1.25rem' }}>{para}</p>
              ))}
              <Link href={`/${locale}/programs`} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Start your journey <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-STEP APPROACH ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{t('approach.tag')}</div>
            <h2 className="display-md">{t('approach.headline')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 0 }}>
            {approach.map((item, i) => (
              <div key={i} style={{ position: 'relative', padding: '2.5rem 2rem', borderLeft: i > 0 ? '1px dashed var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4.5rem', fontWeight: 300, color: pillarColors[i], opacity: 0.22, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>{item.step}</div>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: pillarColors[i], marginBottom: '1.25rem', boxShadow: `0 0 16px ${pillarColors[i]}60` }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="body-sm" style={{ lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE — mountain path background ── */}
      <section style={{ position: 'relative', padding: 'clamp(5rem,10vw,9rem) 0', overflow: 'hidden' }}>
        <Image src={IMAGES.heroOverlay} alt="Mountain path" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.88)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.5, marginBottom: '2rem' }}>
              Only by pursuing what you love, what you are good at, what the world needs, and what you can be paid for — do you find your ikigai.
            </blockquote>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3rem' }}>— Japanese Proverb</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={`/${locale}/programs`} className="btn btn-primary btn-lg">Find Your Ikigai <ArrowRight size={18} /></Link>
              <Link href={`/${locale}/contact`} className="btn btn-outline btn-lg">Talk to a Mentor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
