'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function UpdatesPage() {
  const t      = useTranslations('updates');
  const locale = useLocale();
  const [active, setActive] = useState('all');

  const categories = ['all', 'news', 'insights', 'stories', 'events'] as const;
  const posts = t.raw('posts') as Array<{ category: string; date: string; title: string; excerpt: string }>;
  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active);

  const catColors: Record<string, string> = {
    news:     'var(--blue)',
    insights: 'var(--green)',
    stories:  'var(--orange)',
    events:   'var(--gold)',
  };
  const catBg: Record<string, string> = {
    news:     'rgba(54,112,168,0.12)',
    insights: 'rgba(61,143,82,0.12)',
    stories:  'rgba(212,82,26,0.12)',
    events:   'rgba(201,168,76,0.12)',
  };

  // Map each post to a relevant image
  const postImages = [
    IMAGES.blog1, IMAGES.blog2, IMAGES.blog3,
    IMAGES.blog4, IMAGES.blog5, IMAGES.blog6,
  ];

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src={IMAGES.blog2} alt="Updates" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,15,9,0.97) 0%, rgba(8,15,9,0.85) 55%, rgba(8,15,9,0.5) 100%)' }} />
        <div className="bg-mesh" style={{ position: 'absolute', inset: 0 }} />
        <div className="container" style={{ position: 'relative', padding: 'clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,3rem)' }}>
          <nav className="breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'var(--cream-dim)' }}>{t('headline')}</span>
          </nav>
          <div className="eyebrow">{t('tag')}</div>
          <h1 className="display-xl" style={{ maxWidth: '14ch', marginBottom: '1.5rem' }}>{t('headline')}</h1>
          <p className="body-lg" style={{ maxWidth: '48ch' }}>{t('sub')}</p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{ position: 'sticky', top: 72, zIndex: 100, background: 'rgba(8,15,9,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map(cat => {
            const isActive = active === cat;
            const c = cat !== 'all' ? catColors[cat] : 'var(--green)';
            return (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  padding: '7px 16px', borderRadius: 99, cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.82rem',
                  border: `1px solid ${isActive ? c : 'var(--border-md)'}`,
                  background: isActive ? `${c}20` : 'transparent',
                  color: isActive ? c : 'var(--cream-dim)',
                  textTransform: 'capitalize', transition: 'all 0.2s',
                }}>
                {t(`categories.${cat}` as any)}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── FEATURED POST ── */}
      {filtered[0] && (() => {
        const post = filtered[0];
        const c = catColors[post.category] || 'var(--green)';
        const bg = catBg[post.category] || 'rgba(61,143,82,0.12)';
        return (
          <section style={{ padding: 'clamp(3rem,6vw,5rem) 0', borderBottom: '1px solid var(--border)', background: 'var(--bg-1)' }}>
            <div className="container">
              <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}>
                {/* Image panel */}
                <div style={{ position: 'relative', minHeight: 320 }}>
                  <Image src={postImages[0]} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}20, rgba(8,15,9,0.4))` }} />
                  {/* Featured label */}
                  <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                    <span className="pill-tag" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                      ★ Featured
                    </span>
                  </div>
                </div>

                {/* Content panel */}
                <div style={{ padding: 'clamp(2rem,4vw,3rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                    <span className="pill-tag" style={{ color: c, borderColor: `${c}40`, background: bg }}>
                      {post.category}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--muted)' }}>
                      <Calendar size={11} /> {post.date}
                    </span>
                  </div>
                  {/* Accent bar */}
                  <div style={{ height: 2, width: 40, background: c, borderRadius: 99, marginBottom: '1.25rem' }} />
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 500, color: 'var(--cream)', lineHeight: 1.2, marginBottom: '1rem' }}>
                    {post.title}
                  </h2>
                  <p className="body-lg" style={{ marginBottom: '2rem' }}>{post.excerpt}</p>
                  <a href="#" className="btn btn-primary">
                    {t('readMore').replace(' →', '')} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── POST GRID ── */}
      <section className="section">
        <div className="container">
          {filtered.length > 1 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: '1.25rem' }}>
              {filtered.slice(1).map((post, i) => {
                const c  = catColors[post.category]  || 'var(--green)';
                const bg = catBg[post.category] || 'rgba(61,143,82,0.12)';
                const imgSrc = postImages[(i + 1) % postImages.length];
                return (
                  <article key={i} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {/* Thumbnail */}
                    <div style={{ position: 'relative', height: 200, flexShrink: 0 }}>
                      <Image src={imgSrc} alt={post.title} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,15,9,0.05) 40%, rgba(8,15,9,0.75) 100%)' }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${c},transparent)` }} />
                      {/* Category badge on image */}
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                        <span className="pill-tag" style={{ color: c, borderColor: `${c}50`, background: 'rgba(8,15,9,0.7)', backdropFilter: 'blur(8px)' }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                        <Calendar size={10} /> {post.date}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--cream)', lineHeight: 1.3, marginBottom: '0.75rem', flex: 1 }}>
                        {post.title}
                      </h3>
                      <p className="body-sm" style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>{post.excerpt}</p>
                      <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.1rem', borderTop: '1px solid var(--border)', textDecoration: 'none' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: c, fontWeight: 600 }}>Read article</span>
                        <ArrowUpRight size={14} style={{ color: c }} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--ghost)', marginBottom: '1rem' }}>∅</div>
              <p className="body-md">No posts in this category yet.</p>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── NEWSLETTER — with office bg ── */}
      <section style={{ position: 'relative', padding: 'clamp(4rem,8vw,6rem) 0', overflow: 'hidden' }}>
        <Image src={IMAGES.blog5} alt="Newsletter" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.93)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Stay in the loop</div>
              <h2 className="display-sm" style={{ marginBottom: '0.75rem' }}>Weekly insights in your inbox</h2>
              <p className="body-md">Join 1,000+ learners receiving weekly wisdom on purpose, career, and growth.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="your@email.com"
                style={{ flex: 1, padding: '12px 16px', minWidth: 0, fontSize: '0.9rem', borderRadius: 8 }} />
              <button className="btn btn-primary" style={{ flexShrink: 0, padding: '12px 16px' }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
