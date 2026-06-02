'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  const navKeys = ['about', 'programs', 'philosophy', 'updates', 'contact'] as const;

  const programs = [
    'Personality Development', 'Public Speaking', 'Career Counselling',
    'Leadership & Team Building', 'Soft Skills Training', 'Tech Courses',
  ];

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '3rem' }}>

            {/* Brand col */}
            <div style={{ gridColumn: 'span 1' }}>
              <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg, var(--orange), var(--green))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', fontStyle: 'italic' }}>i</span>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.15rem', color: 'var(--cream)' }}>
                  ikigai<span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>E</span>
                </span>
              </Link>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '26ch' }}>
                {t('tagline')}
              </p>
              {/* Social icons */}
              <div style={{ display: 'flex', gap: 8 }}>
                {['𝕏', 'in', 'yt', 'ig'].map((s, i) => (
                  <a key={i} href="#" style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
                    color: 'var(--muted)', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-md)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                {t('quickLinks')}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {navKeys.map(key => (
                  <Link key={key} href={`/${locale}/${key}`} style={{ textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6 }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream-dim)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>
                    {nav(key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                {t('programs')}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {programs.map(prog => (
                  <Link key={prog} href={`/${locale}/programs`} style={{ textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream-dim)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>
                    {prog}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                {t('connect')}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Mail, text: 'hello@ikigaie.com', href: 'mailto:hello@ikigaie.com' },
                  { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
                  { icon: MapPin, text: 'BKC, Mumbai 400051', href: '#' },
                ].map(({ icon: Icon, text, href }) => (
                  <a key={text} href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
                    <Icon size={14} style={{ color: 'var(--green)', marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.5 }}>{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container" style={{ padding: '1.5rem clamp(1.25rem, 4vw, 3rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--ghost)' }}>{t('copyright')}</p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['privacy', 'terms', 'cookies'].map(key => (
            <a key={key} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--ghost)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--ghost)'}>
              {t(`legal.${key}` as any)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
