'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const langs = [
    { code: 'en', native: 'English', short: 'EN' },
    { code: 'hi', native: 'हिंदी', short: 'HI' },
    { code: 'mr', native: 'मराठी', short: 'MR' },
  ];

  const links = [
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/programs`, label: t('programs') },
    { href: `/${locale}/philosophy`, label: t('philosophy') },
    { href: `/${locale}/updates`, label: t('updates') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const switchLocale = (code: string) => {
    const stripped = pathname.replace(/^\/[a-z]{2}/, '');
    window.location.href = `/${code}${stripped || '/'}`;
    setLangOpen(false);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const currentLang = langs.find(l => l.code === locale);

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 8000,
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          background: scrolled ? 'rgba(8,15,9,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, var(--orange) 0%, var(--green) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(212,82,26,0.3)',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#fff', fontStyle: 'italic' }}>i</span>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--cream)', letterSpacing: '-0.01em' }}>
                ikigai<span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>E</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {links.map(link => (
              <Link key={link.href} href={link.href} style={{
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: isActive(link.href) ? 600 : 400,
                padding: '8px 16px',
                borderRadius: 8,
                color: isActive(link.href) ? 'var(--cream)' : 'var(--cream-dim)',
                background: isActive(link.href) ? 'rgba(255,255,255,0.06)' : 'transparent',
                transition: 'all 0.2s',
                position: 'relative',
              }}>
                {link.label}
                {isActive(link.href) && (
                  <span style={{ position: 'absolute', bottom: 3, left: '50%', transform: 'translateX(-50%)', width: 16, height: 2, background: 'var(--orange)', borderRadius: 99 }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

            {/* Lang switcher */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--cream-dim)', padding: '8px 13px', borderRadius: 8,
                  fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 500,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <Globe size={13} style={{ color: 'var(--green-hi)' }} />
                <span>{currentLang?.native}</span>
                <ChevronDown size={11} style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: '0.2s', opacity: 0.6 }} />
              </button>

              {langOpen && (
                <>
                  <div onClick={() => setLangOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 1 }} />
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    background: 'var(--bg-2)', border: '1px solid var(--border-md)',
                    borderRadius: 12, padding: 6, minWidth: 160,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)', zIndex: 100,
                  }}>
                    {langs.map(lang => (
                      <button key={lang.code} onClick={() => switchLocale(lang.code)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', padding: '9px 12px', borderRadius: 8,
                        background: locale === lang.code ? 'rgba(61,143,82,0.15)' : 'transparent',
                        color: locale === lang.code ? 'var(--green-hi)' : 'var(--cream-dim)',
                        border: 'none', cursor: 'pointer',
                        fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                        textAlign: 'left', transition: 'all 0.15s',
                      }}>
                        <span>{lang.native}</span>
                        <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{lang.short}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link href={`/${locale}/contact`} className="btn btn-primary btn-sm">
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', padding: 8, borderRadius: 8 }}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9500,
          background: 'var(--bg)', display: 'flex', flexDirection: 'column',
        }}>
          {/* Top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.2rem', color: 'var(--cream)' }}>
              ikigai<span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>E</span>
            </span>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--cream-dim)', cursor: 'pointer', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {links.map((link, i) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  color: isActive(link.href) ? 'var(--cream)' : 'var(--muted)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                  {isActive(link.href) && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)' }} />}
                </Link>
              ))}
            </div>

            {/* Lang row */}
            <div style={{ display: 'flex', gap: 8, marginTop: '2rem', flexWrap: 'wrap' }}>
              {langs.map(lang => (
                <button key={lang.code} onClick={() => { switchLocale(lang.code); setMobileOpen(false); }} style={{
                  padding: '9px 18px', borderRadius: 99,
                  background: locale === lang.code ? 'rgba(61,143,82,0.2)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${locale === lang.code ? 'var(--green)' : 'var(--border)'}`,
                  color: locale === lang.code ? 'var(--green-hi)' : 'var(--cream-dim)',
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem', cursor: 'pointer',
                }}>
                  {lang.native}
                </button>
              ))}
            </div>

            <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}>
              {t('getStarted')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
