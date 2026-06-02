'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import IkigaiDiagram from '@/components/IkigaiDiagram';
import { IMAGES } from '@/lib/images';
import { ArrowRight, ArrowUpRight, Star, Heart, Users, Award, Zap, Sparkles, BookOpen, Quote } from 'lucide-react';

export default function HomeClient({ locale }: { locale: string }) {
  const hero  = useTranslations('home.hero');
  const edu   = useTranslations('home.education');
  const prog  = useTranslations('home.programs');
  const iki   = useTranslations('home.ikigai');
  const fw    = useTranslations('home.framework');
  const vals  = useTranslations('home.values');
  const test  = useTranslations('home.testimonials');
  const app   = useTranslations('home.app');
  const cta   = useTranslations('home.cta');

  const stats = [
    { num: hero('stats.students'),     label: hero('stats.studentsLabel') },
    { num: hero('stats.programs'),     label: hero('stats.programsLabel') },
    { num: hero('stats.partners'),     label: hero('stats.partnersLabel') },
    { num: hero('stats.satisfaction'), label: hero('stats.satisfactionLabel') },
  ];

  const programs = [
    { key: 'personality', glyph: '✦', color: 'var(--orange)', bg: 'rgba(212,82,26,0.10)', img: IMAGES.personality },
    { key: 'speaking',    glyph: '◆', color: 'var(--green)',  bg: 'rgba(61,143,82,0.10)',  img: IMAGES.speaking   },
    { key: 'career',      glyph: '◉', color: 'var(--blue)',   bg: 'rgba(54,112,168,0.10)', img: IMAGES.career     },
    { key: 'leadership',  glyph: '★', color: 'var(--gold)',   bg: 'rgba(201,168,76,0.10)', img: IMAGES.leadership },
    { key: 'softSkills',  glyph: '⬡', color: '#9b68c4',       bg: 'rgba(155,104,196,0.10)',img: IMAGES.softSkills },
    { key: 'workshop',    glyph: '▲', color: '#e05a6e',       bg: 'rgba(224,90,110,0.10)', img: IMAGES.workshop   },
  ] as const;

  const fwItems = [
    { key: 'love',    color: 'var(--orange)', icon: Heart  },
    { key: 'goodAt',  color: 'var(--green)',  icon: Star   },
    { key: 'need',    color: 'var(--blue)',   icon: Users  },
    { key: 'paidFor', color: 'var(--gold)',   icon: Award  },
  ] as const;

  const valueItems = [
    { key: 'confidence', icon: Zap,   color: 'var(--orange)', img: IMAGES.confidence },
    { key: 'clarity',    icon: Star,  color: 'var(--green)',  img: IMAGES.clarity    },
    { key: 'meaning',    icon: Heart, color: 'var(--blue)',   img: IMAGES.meaning    },
  ] as const;

  const testimonials = test.raw('items') as Array<{ quote: string; name: string; role: string }>;
  const avatars = [IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3];
  const tickerItems = ['Personality Development','Public Speaking','Career Counselling','Leadership','Soft Skills','Tech Courses','Data Science','Digital Marketing'];

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ══════════════════════════════════════════
          HERO — full-bleed image with overlay
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '96vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src={IMAGES.heroStudents} alt="Students collaborating" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority quality={90} />
          {/* Dark overlay gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,9,0.97) 0%, rgba(8,15,9,0.88) 50%, rgba(8,15,9,0.5) 100%)' }} />
          <div className="bg-mesh" style={{ position: 'absolute', inset: 0 }} />
        </div>

        <div className="container" style={{ position: 'relative', paddingTop: '3rem', paddingBottom: '5rem' }}>
          <div className="grid-2">
            {/* Left: copy */}
            <div>
              <div className="hero-badge anim-up d1">
                <span className="hero-badge-dot" />
                <span>{hero('tag')}</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.025em', lineHeight: 0.92 }}>
                <span className="anim-up d2" style={{ display: 'block', fontSize: 'clamp(3.8rem,8.5vw,7rem)', fontWeight: 600, color: 'var(--cream)', opacity: 0 }}>
                  {hero('headline1')}
                </span>
                <span className="anim-up d3" style={{ display: 'block', fontSize: 'clamp(3.8rem,8.5vw,7rem)', fontWeight: 700, fontStyle: 'italic', color: 'var(--orange)', opacity: 0 }}>
                  {hero('headline2')}
                </span>
                <span className="anim-up d4" style={{ display: 'block', fontSize: 'clamp(3.8rem,8.5vw,7rem)', fontWeight: 600, color: 'var(--cream-dim)', opacity: 0 }}>
                  {hero('headline3')}
                </span>
              </h1>
              <p className="anim-up d5" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', color: 'var(--cream-dim)', lineHeight: 1.75, maxWidth: '44ch', marginTop: '2rem', marginBottom: '2.5rem', opacity: 0 }}>
                {hero('sub')}
              </p>
              <div className="anim-up d6" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', opacity: 0 }}>
                <Link href={`/${locale}/programs`} className="btn btn-primary btn-lg">{hero('cta')} <ArrowRight size={18} /></Link>
                <Link href={`/${locale}/about`} className="btn btn-outline btn-lg">Our Story</Link>
              </div>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginTop: '3.5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {stats.map((s, i) => (
                  <div key={i} className={`anim-up d${i+2}`} style={{ opacity: 0 }}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating ikigai diagram on frosted card */}
            <div className="anim-in d3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 32, padding: '2.5rem', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
                <IkigaiDiagram
                  labels={{ passion: iki('passion'), mission: iki('mission'), vocation: iki('vocation'), profession: iki('profession') }}
                  size={380}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to top, var(--bg), transparent)', pointerEvents: 'none' }} />
      </section>

      {/* ── TICKER ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.1rem 0', background: 'var(--bg-1)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '3.5rem', alignItems: 'center', whiteSpace: 'nowrap', animation: 'ticker 28s linear infinite' }}>
          {[...Array(4)].map((_, rep) => tickerItems.map((item, i) => (
            <span key={`${rep}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.07em', textTransform: 'uppercase', flexShrink: 0 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />
              {item}
            </span>
          )))}
        </div>
        <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-25%)}}`}</style>
      </div>


      {/* ══════════════════════════════════════════
          EDUCATION — split with right side image collage
      ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">{edu('tag')}</div>
              <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>
                Education that<br />
                <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>actually</em> matters
              </h2>
              <p className="body-lg" style={{ maxWidth: '44ch', marginBottom: '2.5rem' }}>{edu('sub')}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href={`/${locale}/programs`} className="btn btn-primary">{edu('applyNow')}</Link>
                <Link href={`/${locale}/about`} className="btn btn-outline">{edu('learnMore')}</Link>
              </div>
            </div>

            {/* Image grid 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '200px 200px', gap: '0.75rem' }}>
              {[IMAGES.heroStudents, IMAGES.speaking, IMAGES.career, IMAGES.teamCollab].map((src, i) => (
                <div key={i} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', ...(i === 0 ? { gridRow: 'span 2', borderRadius: 20 } : {}) }}>
                  <Image src={src} alt="" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.25)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          PROGRAMS — cards with thumbnail images
      ══════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">{prog('tag')}</div>
              <h2 className="display-lg">{prog('headline')}</h2>
            </div>
            <Link href={`/${locale}/programs`} className="btn btn-ghost hide-mobile">
              {prog('viewAll')} <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {programs.map(({ key, glyph, color, img }) => (
              <div key={key} className="prog-card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Image thumbnail */}
                <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                  <Image src={img} alt={prog(`items.${key}.title` as any)} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(8,15,9,0.1) 0%, rgba(8,15,9,0.8) 100%)` }} />
                  {/* Glyph badge on image */}
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: 40, height: 40, borderRadius: 10, background: `${color}25`, backdropFilter: 'blur(8px)', border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color }}>
                    {glyph}
                  </div>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${color},transparent)` }} />
                </div>
                {/* Text body */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--cream)', marginBottom: 8 }}>
                    {prog(`items.${key}.title` as any)}
                  </h3>
                  <p className="body-sm" style={{ lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {prog(`items.${key}.desc` as any)}
                  </p>
                  <Link href={`/${locale}/programs`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                    Explore <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href={`/${locale}/programs`} className="btn btn-outline">
              {prog('viewAll')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          IKIGAI — split with zen garden photo
      ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-1)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid-2">
            {/* Image side */}
            <div style={{ position: 'relative', minHeight: 500, borderRadius: 24, overflow: 'hidden' }}>
              <Image src={IMAGES.zenGarden} alt="Zen garden" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,15,9,0.6) 0%, rgba(8,15,9,0.3) 100%)' }} />
              {/* Overlay diagram */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IkigaiDiagram
                  labels={{ passion: iki('passion'), mission: iki('mission'), vocation: iki('vocation'), profession: iki('profession') }}
                  size={320}
                />
              </div>
            </div>

            <div>
              <div className="eyebrow">{iki('tag')}</div>
              <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>
                The Japanese art of<br />
                <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Ikigai</em>
              </h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>{iki('sub')}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { l: iki('passion'),    c: 'var(--orange)' },
                  { l: iki('mission'),    c: 'var(--green)'  },
                  { l: iki('profession'), c: 'var(--gold)'   },
                  { l: iki('vocation'),   c: 'var(--blue)'   },
                ].map(({ l, c }) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--cream-dim)' }}>{l}</span>
                  </div>
                ))}
              </div>
              <Link href={`/${locale}/philosophy`} className="btn btn-ghost">
                Explore our philosophy <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          FRAMEWORK — 4 cards
      ══════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{fw('tag')}</div>
            <h2 className="display-md">The <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Ikigai</em> Framework</h2>
            <p className="body-md" style={{ marginTop: '1rem' }}>{fw('sub')}</p>
          </div>
          <div className="grid-4">
            {fwItems.map(({ key, color, icon: Icon }, idx) => (
              <div key={key} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 300, color: 'var(--border-md)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  {String(idx+1).padStart(2,'0')}
                </div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: `1px solid ${color}25` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--cream)', marginBottom: 8, lineHeight: 1.25 }}>
                  {fw(`${key}.title` as any)}
                </h3>
                <p className="body-sm">{fw(`${key}.desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          VALUES — full-width cards with bg photos
      ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{vals('tag')}</div>
            <h2 className="display-md">
              A world where everyone<br />
              <em style={{ color: 'var(--green-hi)', fontStyle: 'italic' }}>lives with purpose</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' }}>
            {valueItems.map(({ key, icon: Icon, color, img }) => (
              <div key={key} style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 320 }}>
                <Image src={img} alt={vals(`${key}.title` as any)} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(8,15,9,0.95) 0%, rgba(8,15,9,0.6) 50%, rgba(8,15,9,0.3) 100%)` }} />
                <div style={{ position: 'absolute', inset: 0, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}25`, border: `1px solid ${color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                    {vals(`${key}.title` as any)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--cream-dim)', lineHeight: 1.65 }}>
                    {vals(`${key}.desc` as any)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          TESTIMONIALS — cards with real avatars
      ══════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">{test('tag')}</div>
              <h2 className="display-md">Voices of <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>transformation</em></h2>
            </div>
          </div>
          <div className="grid-3">
            {testimonials.map((item, i) => {
              const colors = ['var(--orange)', 'var(--green)', 'var(--gold)'];
              return (
                <div key={i} className="testimonial-card">
                  <Quote size={32} style={{ color: colors[i], opacity: 0.2, marginBottom: '1.25rem' }} />
                  <div style={{ display: 'flex', gap: 3, marginBottom: '1.25rem' }}>
                    {[...Array(5)].map((_,j) => <Star key={j} size={13} fill="var(--gold)" color="var(--gold)" />)}
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--cream-dim)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    "{item.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                    {/* Avatar image */}
                    <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2px solid ${colors[i]}50`, position: 'relative' }}>
                      <Image src={avatars[i]} alt={item.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--cream)' }}>{item.name}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 }}>{item.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          APP DOWNLOAD — with Mumbai photo background
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: 'clamp(4rem,8vw,7rem) 0', overflow: 'hidden' }}>
        <Image src={IMAGES.office} alt="Office" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,15,9,0.97) 0%, rgba(8,15,9,0.92) 60%, rgba(8,15,9,0.6) 100%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="grid-2">
            <div>
              <div className="eyebrow">{app('tag')}</div>
              <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>
                Your <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>ikigaiE</em><br />journey, in your pocket
              </h2>
              <p className="body-lg" style={{ marginBottom: '2rem', maxWidth: '40ch' }}>{app('sub')}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[{ label: app('appStore'), sub: 'Download on the', icon: '🍎' }, { label: app('playStore'), sub: 'Get it on', icon: '▶' }].map(btn => (
                  <a key={btn.label} href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 20px', borderRadius: 12, textDecoration: 'none' }}>
                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{btn.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{btn.sub}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.92rem', color: 'var(--cream)', marginTop: 1 }}>{btn.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          FINAL CTA — sakura / nature background
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: 'clamp(5rem,10vw,9rem) 0', overflow: 'hidden' }}>
        <Image src={IMAGES.heroOverlay} alt="Journey" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.88)' }} />
        <div className="bg-mesh" style={{ position: 'absolute', inset: 0 }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 660 }}>
            <div className="eyebrow">{cta('tag')}</div>
            <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>
              Ready to find your<br />
              <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>{cta('headlineAccent')}</em>
            </h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginBottom: '2.5rem' }}>{cta('sub')}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href={`/${locale}/programs`} className="btn btn-primary btn-lg">
                {cta('start')} <ArrowRight size={18} />
              </Link>
              <a href={`mailto:${cta('email')}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--cream-dim)', textDecoration: 'none', padding: '16px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                or email <span style={{ color: 'var(--green-hi)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{cta('email')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
