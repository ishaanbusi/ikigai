"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Monitor,
  Users,
  BarChart2,
  Globe,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
} from "lucide-react";
import type { ProgramData } from "@/lib/programData";

function useBreakpoint() {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const check = () => setW(window.innerWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return {
    isMobile: w < 768,
    isTablet: w >= 768 && w < 1024,
    isDesktop: w >= 1024,
  };
}

export default function ProgramDetailClient({
  program: p,
  locale,
}: {
  program: ProgramData;
  locale: string;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(0);
  const { isMobile, isDesktop } = useBreakpoint();

  return (
    <div style={{ paddingTop: 72 }}>
      {/* ══════════ HERO ══════════ */}
      <section
        style={{
          position: "relative",
          minHeight: isMobile ? "calc(100svh - 72px)" : "calc(100vh - 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image
          src={p.heroImg}
          alt={p.title}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />

        {/* Richer gradient: dark at bottom + subtle vignette top */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(8,15,9,1) 0%, rgba(8,15,9,0.82) 35%, rgba(8,15,9,0.45) 65%, rgba(8,15,9,0.25) 100%)",
          }}
        />
        <div
          className="bg-mesh"
          style={{ position: "absolute", inset: 0, opacity: 0.4 }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            paddingBottom: isMobile ? "2.5rem" : "5rem",
            paddingTop: isMobile ? "2rem" : "3rem",
          }}
        >
          {/* Breadcrumb */}
          {!isMobile && (
            <nav className="breadcrumb" style={{ marginBottom: "2rem" }}>
              <Link href={`/${locale}`}>Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link href={`/${locale}/programs`}>Programs</Link>
              <span className="breadcrumb-sep">›</span>
              <span style={{ color: "var(--cream-dim)" }}>{p.title}</span>
            </nav>
          )}

          {/* Category + badge pills */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              className="pill-tag"
              style={{
                color: p.color,
                borderColor: `${p.color}50`,
                background: `${p.color}15`,
              }}
            >
              {p.category}
            </span>
            {p.badge && (
              <span
                className="pill-tag"
                style={{
                  color: "var(--gold)",
                  borderColor: "rgba(201,168,76,0.4)",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                ★ {p.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile
                ? "clamp(2.25rem,9vw,3rem)"
                : "clamp(3rem,5.5vw,5.5rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
              maxWidth: "16ch",
              letterSpacing: "-0.01em",
            }}
          >
            {p.title}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: isMobile ? "1rem" : "clamp(1.05rem,1.6vw,1.25rem)",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "58ch",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            {p.tagline}
          </p>

          {/* Meta pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { icon: Clock, text: p.duration },
              { icon: Monitor, text: p.format },
              { icon: BarChart2, text: p.level },
              { icon: Globe, text: p.language },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-body)",
                  fontSize: isMobile ? "0.78rem" : "0.85rem",
                  color: "rgba(255,255,255,0.82)",
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: isMobile ? "6px 12px" : "8px 16px",
                  borderRadius: 99,
                }}
              >
                <Icon size={12} style={{ color: p.color }} /> {text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              alignItems: isMobile ? "stretch" : "center",
            }}
          >
            <Link
              href={`/${locale}/contact`}
              className="btn btn-primary btn-lg"
              style={{
                minHeight: 52,
                justifyContent: "center",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Enroll Now <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="btn btn-outline btn-lg"
              style={{
                minHeight: 52,
                justifyContent: "center",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(3rem,6vw,5.5rem)",
          paddingBottom: "clamp(3rem,6vw,5.5rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isDesktop
                ? "minmax(0,1fr) 340px"
                : "minmax(0,1fr) 300px",
            gap: isMobile ? "2.5rem" : "4.5rem",
            alignItems: "start",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* OVERVIEW */}
            <section style={{ marginBottom: "4rem" }}>
              <div className="eyebrow">Overview</div>
              <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>
                About this program
              </h2>
              {p.overview.map((para, i) => (
                <p
                  key={i}
                  className="body-lg"
                  style={{ marginBottom: "1.1rem" }}
                >
                  {para}
                </p>
              ))}
            </section>

            {/* GALLERY */}
            {p.galleryImgs.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
                  gridTemplateRows: isMobile ? "auto" : "140px 140px",
                  gap: "0.75rem",
                  marginBottom: "4rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: isMobile ? 240 : "auto",
                    borderRadius: 16,
                    overflow: "hidden",
                    gridRow: isMobile ? "auto" : "span 2",
                  }}
                >
                  <Image
                    src={p.galleryImgs[0]}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(8,15,9,0.18)",
                    }}
                  />
                </div>
                {p.galleryImgs.slice(1).map((img, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      height: isMobile ? 170 : "auto",
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(8,15,9,0.18)",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* OUTCOMES */}
            <section style={{ marginBottom: "4rem" }}>
              <div className="eyebrow">What You'll Gain</div>
              <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>
                Learning outcomes
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "repeat(auto-fill,minmax(min(100%,260px),1fr))",
                  gap: "0.75rem",
                }}
              >
                {p.outcomes.map((o, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      transition: "border-color 0.2s",
                    }}
                  >
                    <CheckCircle
                      size={15}
                      style={{ color: p.color, flexShrink: 0, marginTop: 3 }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--cream-dim)",
                        lineHeight: 1.6,
                      }}
                    >
                      {o}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* CURRICULUM */}
            <section style={{ marginBottom: "4rem" }}>
              <div className="eyebrow">Curriculum</div>
              <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>
                What you'll learn
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {p.curriculum.map((mod, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--bg-2)",
                      border: `1px solid ${openModule === i ? p.color + "50" : "var(--border)"}`,
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      style={{
                        width: "100%",
                        padding: "1.1rem 1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: openModule === i ? `${p.color}08` : "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: "1rem",
                        minHeight: 56,
                        transition: "background 0.2s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1rem",
                            fontWeight: 300,
                            color: openModule === i ? p.color : "var(--ghost)",
                            minWidth: 28,
                            transition: "color 0.2s",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: isMobile ? "0.95rem" : "1.05rem",
                            fontWeight: 500,
                            color: "var(--cream)",
                            lineHeight: 1.3,
                          }}
                        >
                          {mod.module}
                        </span>
                      </div>
                      <span
                        style={{
                          color: openModule === i ? p.color : "var(--muted)",
                          flexShrink: 0,
                          transition: "color 0.2s",
                        }}
                      >
                        {openModule === i ? (
                          <ChevronUp size={17} />
                        ) : (
                          <ChevronDown size={17} />
                        )}
                      </span>
                    </button>
                    {openModule === i && (
                      <div style={{ padding: "0 1.5rem 1.4rem" }}>
                        <div
                          style={{
                            height: 1,
                            background: "var(--border)",
                            marginBottom: "1rem",
                          }}
                        />
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.55rem",
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {mod.topics.map((topic, j) => (
                            <li
                              key={j}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                              }}
                            >
                              <span
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: "50%",
                                  background: p.color,
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{
                                  fontFamily: "var(--font-body)",
                                  fontSize: "0.875rem",
                                  color: "var(--cream-dim)",
                                  lineHeight: 1.55,
                                }}
                              >
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* WHO IS THIS FOR */}
            <section style={{ marginBottom: "4rem" }}>
              <div className="eyebrow">Ideal For</div>
              <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>
                Who should enroll
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {p.whoFor.map((who, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "1rem 1.5rem",
                      background: "var(--bg-1)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      borderLeft: `3px solid ${p.color}`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        color: p.color,
                        lineHeight: 1.2,
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "var(--cream-dim)",
                        lineHeight: 1.6,
                      }}
                    >
                      {who}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section style={{ marginBottom: "4rem" }}>
              <div className="eyebrow">FAQ</div>
              <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>
                Frequently asked questions
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {p.faqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--bg-2)",
                      border: `1px solid ${openFaq === i ? "var(--border-md)" : "var(--border)"}`,
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        padding: "1.1rem 1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        background:
                          openFaq === i ? "rgba(255,255,255,0.02)" : "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        minHeight: 56,
                        transition: "background 0.2s",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: isMobile ? "0.95rem" : "1.05rem",
                          fontWeight: 500,
                          color: "var(--cream)",
                          lineHeight: 1.35,
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          color: openFaq === i ? p.color : "var(--muted)",
                          flexShrink: 0,
                          transition: "color 0.2s",
                        }}
                      >
                        {openFaq === i ? (
                          <ChevronUp size={17} />
                        ) : (
                          <ChevronDown size={17} />
                        )}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 1.5rem 1.4rem" }}>
                        <div
                          style={{
                            height: 1,
                            background: "var(--border)",
                            marginBottom: "1rem",
                          }}
                        />
                        <p className="body-md" style={{ lineHeight: 1.8 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIAL */}
            {p.testimonial && (
              <div
                style={{
                  background: "var(--bg-1)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: isMobile ? "1.75rem" : "2.75rem",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "2rem",
                    fontFamily: "var(--font-display)",
                    fontSize: isMobile ? "4rem" : "6rem",
                    color: p.color,
                    opacity: 0.08,
                    lineHeight: 1,
                    fontStyle: "italic",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  "
                </div>
                <div
                  style={{ display: "flex", gap: 3, marginBottom: "1.25rem" }}
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="var(--gold)"
                      color="var(--gold)"
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: isMobile ? "1rem" : "1.15rem",
                    color: "var(--cream-dim)",
                    lineHeight: 1.75,
                    marginBottom: "2rem",
                  }}
                >
                  "{p.testimonial.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: `2px solid ${p.color}50`,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={p.testimonial.avatar}
                      alt={p.testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "var(--cream)",
                      }}
                    >
                      {p.testimonial.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        color: "var(--muted)",
                        marginTop: 3,
                      }}
                    >
                      {p.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT SIDEBAR ── sticky on desktop only ── */}
          <div
            style={{
              position: isMobile ? "static" : "sticky",
              top: isMobile ? "auto" : 96,
              order: isMobile ? -1 : 0,
            }}
          >
            <div
              style={{
                background: "var(--bg-2)",
                border: `1px solid ${p.color}35`,
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: isDesktop ? "0 24px 64px rgba(0,0,0,0.5)" : "none",
              }}
            >
              {/* Accent top bar */}
              <div
                style={{
                  height: 4,
                  background: `linear-gradient(90deg, ${p.color}, ${p.color}55)`,
                }}
              />

              <div style={{ padding: isMobile ? "1.5rem" : "1.75rem" }}>
                {/* Glyph + title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: p.color,
                      flexShrink: 0,
                    }}
                  >
                    {p.glyph}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: "var(--cream)",
                        lineHeight: 1.25,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.68rem",
                        color: p.color,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      {p.category}
                    </div>
                  </div>
                </div>

                {/* Details — 2-col on mobile, list on desktop */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
                    marginBottom: "1.5rem",
                  }}
                >
                  {[
                    { icon: Clock, label: "Duration", val: p.duration },
                    { icon: Monitor, label: "Format", val: p.format },
                    { icon: BarChart2, label: "Level", val: p.level },
                    { icon: Globe, label: "Languages", val: p.language },
                    {
                      icon: Users,
                      label: "Batch size",
                      val: "Max 20 participants",
                    },
                  ].map(({ icon: Icon, label, val }) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "0.7rem 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <Icon
                        size={13}
                        style={{ color: p.color, marginTop: 3, flexShrink: 0 }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.65rem",
                            color: "var(--muted)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            marginBottom: 2,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            color: "var(--cream-dim)",
                          }}
                        >
                          {val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <Link
                  href={`/${locale}/contact`}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginBottom: "0.6rem",
                    minHeight: 48,
                  }}
                >
                  Enroll Now <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="btn btn-outline"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    minHeight: 48,
                  }}
                >
                  Free Discovery Call
                </Link>

                {/* Trust signals */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.55rem",
                  }}
                >
                  {[
                    "Certificate on completion",
                    "7-day money-back guarantee",
                    "Lifetime access to materials",
                  ].map((text) => (
                    <div
                      key={text}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        color: "var(--muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--green-hi)",
                          fontWeight: 700,
                          fontSize: "0.72rem",
                        }}
                      >
                        ✓
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Award badge */}
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem 1.25rem",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Award
                size={20}
                style={{ color: "var(--gold)", flexShrink: 0 }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "var(--cream)",
                  }}
                >
                  IkigaiE Certified Program
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                    marginTop: 2,
                  }}
                >
                  Recognised by 50+ corporate partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ BOTTOM CTA BAND ══════════ */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--bg-1)",
          padding: "clamp(3rem,6vw,5rem) 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit,minmax(300px,1fr))",
              gap: isMobile ? "2rem" : "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow">Ready?</div>
              <h2 className="display-md" style={{ marginBottom: "0.75rem" }}>
                Start your{" "}
                <em style={{ color: p.color, fontStyle: "italic" }}>
                  {p.title}
                </em>{" "}
                journey today
              </h2>
              <p className="body-lg">
                Reserve your spot — batches fill up fast.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexDirection: isMobile ? "column" : "row",
                flexWrap: "wrap",
                justifyContent: isMobile ? "stretch" : "flex-end",
              }}
            >
              <Link
                href={`/${locale}/contact`}
                className="btn btn-primary btn-lg"
                style={{
                  minHeight: 52,
                  justifyContent: "center",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link
                href={`/${locale}/programs`}
                className="btn btn-outline btn-lg"
                style={{
                  minHeight: 52,
                  justifyContent: "center",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <ArrowLeft size={16} /> All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
