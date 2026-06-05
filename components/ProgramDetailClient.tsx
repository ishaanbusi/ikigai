'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Clock, Monitor, Users, BarChart2, Globe, CheckCircle, ChevronDown, ChevronUp, Star, Award } from 'lucide-react';
import type { ProgramData } from '@/lib/programData';

export default function ProgramDetailClient({ program: p, locale }: { program: ProgramData; locale: string }) {
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ══════════ HERO ══════════ */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <Image src={p.heroImg} alt={p.title} fill priority style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,15,9,1) 0%, rgba(8,15,9,0.75) 40%, rgba(8,15,9,0.3) 100%)' }} />
        <div className="bg-mesh" style={{ position: 'absolute', inset: 0 }} />

        <div className="container" style={{ position: 'relative', paddingBottom: '4rem' }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href={`/${locale}/programs`}>Programs</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'var(--cream-dim)' }}>{p.title}</span>
          </nav>

          {/* Category + badge */}
          <div style={{ display: 'flex', gap: 8, marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span className="pill-tag" style={{ color: p.color, borderColor: `${p.color}50`, background: `${p.color}15` }}>
              {p.category}
            </span>
            {p.badge && (
              <span className="pill-tag" style={{ color: 'var(--gold)', borderColor: 'rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.12)' }}>
                ★ {p.badge}
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.0, marginBottom: '1.25rem', maxWidth: '18ch' }}>
            {p.title}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'rgba(255,255,255,0.75)', maxWidth: '52ch', marginBottom: '2rem', lineHeight: 1.65 }}>
            {p.tagline}
          </p>

          {/* Meta pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {[
              { icon: Clock,    text: p.duration },
              { icon: Monitor,  text: p.format },
              { icon: BarChart2,text: p.level },
              { icon: Globe,    text: p.language },
            ].map(({ icon: Icon, text }) => (
              <span key={text} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', padding: '7px 14px', borderRadius: 99 }}>
                <Icon size={13} style={{ color: p.color }} /> {text}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
              Enroll Now <ArrowRight size={18} />
            </Link>
            <Link href={`/${locale}/contact`} className="btn btn-outline btn-lg">
              Free Discovery Call
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════ MAIN CONTENT ══════════ */}
      <div className="container" style={{ paddingTop: 'clamp(3rem,6vw,5rem)', paddingBottom: 'clamp(3rem,6vw,5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: '4rem', alignItems: 'start' }}>

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* OVERVIEW */}
            <div style={{ marginBottom: '4rem' }}>
              <div className="eyebrow">Overview</div>
              <h2 className="display-sm" style={{ marginBottom: '1.5rem' }}>About this program</h2>
              {p.overview.map((para, i) => (
                <p key={i} className="body-lg" style={{ marginBottom: '1.1rem' }}>{para}</p>
              ))}
            </div>

            {/* GALLERY */}
            {p.galleryImgs.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '4rem' }}>
                <div style={{ position: 'relative', height: 260, borderRadius: 16, overflow: 'hidden', gridRow: 'span 2' }}>
                  <Image src={p.galleryImgs[0]} alt="" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.2)' }} />
                </div>
                {p.galleryImgs.slice(1).map((img, i) => (
                  <div key={i} style={{ position: 'relative', height: 120, borderRadius: 12, overflow: 'hidden' }}>
                    <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,9,0.2)' }} />
                  </div>
                ))}
              </div>
            )}

            {/* OUTCOMES */}
            <div style={{ marginBottom: '4rem' }}>
              <div className="eyebrow">What You'll Gain</div>
              <h2 className="display-sm" style={{ marginBottom: '1.5rem' }}>Learning outcomes</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))', gap: '0.75rem' }}>
                {p.outcomes.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '1rem 1.25rem', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 12 }}>
                    <CheckCircle size={16} style={{ color: p.color, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--cream-dim)', lineHeight: 1.55 }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CURRICULUM */}
            <div style={{ marginBottom: '4rem' }}>
              <div className="eyebrow">Curriculum</div>
              <h2 className="display-sm" style={{ marginBottom: '1.5rem' }}>What you'll learn</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {p.curriculum.map((mod, i) => (
                  <div key={i} style={{ background: 'var(--bg-2)', border: `1px solid ${openModule === i ? p.color + '40' : 'var(--border)'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                    <button
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      style={{ width: '100%', padding: '1.1rem 1.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 300, color: openModule === i ? p.color : 'var(--ghost)', minWidth: 28 }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--cream)', lineHeight: 1.2 }}>{mod.module}</span>
                      </div>
                      <span style={{ color: openModule === i ? p.color : 'var(--muted)', flexShrink: 0, transition: 'color 0.2s' }}>
                        {openModule === i ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                      </span>
                    </button>
                    {openModule === i && (
                      <div style={{ padding: '0 1.4rem 1.25rem' }}>
                        <div style={{ height: 1, background: 'var(--border)', marginBottom: '1rem' }} />
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                          {mod.topics.map((topic, j) => (
                            <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--cream-dim)' }}>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* WHO IS THIS FOR */}
            <div style={{ marginBottom: '4rem' }}>
              <div className="eyebrow">Ideal For</div>
              <h2 className="display-sm" style={{ marginBottom: '1.5rem' }}>Who should enroll</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {p.whoFor.map((who, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '1rem 1.5rem', background: 'var(--bg-1)', border: '1px solid var(--border)', borderRadius: 12, borderLeft: `3px solid ${p.color}` }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: p.color, lineHeight: 1, flexShrink: 0 }}>→</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--cream-dim)', lineHeight: 1.55 }}>{who}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div style={{ marginBottom: '4rem' }}>
              <div className="eyebrow">FAQ</div>
              <h2 className="display-sm" style={{ marginBottom: '1.5rem' }}>Frequently asked questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {p.faqs.map((faq, i) => (
                  <div key={i} style={{ background: 'var(--bg-2)', border: `1px solid ${openFaq === i ? 'var(--border-md)' : 'var(--border)'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', padding: '1.1rem 1.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--cream)', lineHeight: 1.3 }}>{faq.q}</span>
                      <span style={{ color: openFaq === i ? p.color : 'var(--muted)', flexShrink: 0, transition: 'color 0.2s' }}>
                        {openFaq === i ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 1.4rem 1.25rem' }}>
                        <div style={{ height: 1, background: 'var(--border)', marginBottom: '1rem' }} />
                        <p className="body-md" style={{ lineHeight: 1.75 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIAL */}
            {p.testimonial && (
              <div style={{ background: 'var(--bg-1)', border: '1px solid var(--border)', borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden', marginBottom: '2rem' }}>
                <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontFamily: 'var(--font-display)', fontSize: '5rem', color: p.color, opacity: 0.1, lineHeight: 1, fontStyle: 'italic', pointerEvents: 'none' }}>"</div>
                <div style={{ display: 'flex', gap: 3, marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_,j) => <Star key={j} size={14} fill="var(--gold)" color="var(--gold)" />)}
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--cream-dim)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  "{p.testimonial.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2px solid ${p.color}50`, position: 'relative' }}>
                    <Image src={p.testimonial.avatar} alt={p.testimonial.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--cream)' }}>{p.testimonial.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 }}>{p.testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT SIDEBAR (sticky) ── */}
          <div style={{ position: 'sticky', top: 96 }}>
            <div style={{ background: 'var(--bg-2)', border: `1px solid ${p.color}30`, borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
              {/* Color header bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}60)` }} />

              <div style={{ padding: '2rem' }}>
                {/* Glyph + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p.color}18`, border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: p.color, flexShrink: 0 }}>
                    {p.glyph}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.1rem', color: 'var(--cream)', lineHeight: 1.2 }}>{p.title}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: p.color, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{p.category}</div>
                  </div>
                </div>

                {/* Details list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  {[
                    { icon: Clock,     label: 'Duration',   val: p.duration },
                    { icon: Monitor,   label: 'Format',     val: p.format },
                    { icon: BarChart2, label: 'Level',      val: p.level },
                    { icon: Globe,     label: 'Languages',  val: p.language },
                    { icon: Users,     label: 'Batch size', val: 'Max 20 participants' },
                  ].map(({ icon: Icon, label, val }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                      <Icon size={14} style={{ color: p.color, marginTop: 2, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--cream-dim)' }}>{val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <Link href={`/${locale}/contact`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  Enroll Now <ArrowRight size={16} />
                </Link>
                <Link href={`/${locale}/contact`} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Free Discovery Call
                </Link>

                {/* Trust signals */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    '✓ Certificate on completion',
                    '✓ 7-day money-back guarantee',
                    '✓ Lifetime access to materials',
                  ].map(text => (
                    <div key={text} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--green-hi)' }}>{text.slice(0,1)}</span>
                      <span>{text.slice(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Award badge */}
            <div style={{ marginTop: '1.25rem', padding: '1.1rem 1.4rem', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Award size={22} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--cream)' }}>IkigaiE Certified Program</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--muted)', marginTop: 2 }}>Recognised by 50+ corporate partners</div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* ══════════ BOTTOM CTA BAND ══════════ */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-1)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Ready?</div>
              <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>Start your <em style={{ color: p.color, fontStyle: 'italic' }}>{p.title}</em> journey today</h2>
              <p className="body-lg">Reserve your spot — batches fill up fast.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link href={`/${locale}/programs`} className="btn btn-outline btn-lg">
                <ArrowLeft size={16} /> All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
