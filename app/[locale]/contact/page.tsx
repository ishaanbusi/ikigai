"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSub] = useState(false);
  const [submitted, setDone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjects = t.raw("form.subjects") as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSub(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSub(false);
    setDone(true);
  };

  const faqs = [
    {
      q: "How do I enroll in a program?",
      a: "Fill out the contact form or email info@ikigaiedu.com. Our team responds within 24 hours with enrollment details and a personal welcome call.",
    },
    {
      q: "Are programs available online?",
      a: "Yes. Most flagship programs are available both online and offline. Tech courses are exclusively online with live sessions and recorded materials.",
    },
    {
      q: "Do you offer corporate training?",
      a: "Absolutely. We design custom programs for organisations of all sizes — from startups to Fortune 500 companies. Get in touch to discuss your team's needs.",
    },
    {
      q: "What is the refund policy?",
      a: "Full refund within 7 days of enrollment if you are not satisfied. After that, partial refunds may be available on a case-by-case basis.",
    },
    {
      q: "Can I speak to a mentor before enrolling?",
      a: 'Yes. We offer a free 30-minute discovery call with a senior mentor. Just select "Career Counselling" as your subject in the form.',
    },
  ];

  const infoItems = [
    {
      icon: Mail,
      label: "Email",
      value: t("info.email"),
      href: `mailto:${t("info.email")}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: t("info.phone"),
      href: `tel:${t("info.phone").replace(/\s/g, "")}`,
    },
    { icon: MapPin, label: "Address", value: t("info.address"), href: "#" },
    { icon: Clock, label: "Hours", value: t("info.hours"), href: null },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* ── HERO — Mumbai skyline ── */}
      <section
        style={{
          position: "relative",
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src={IMAGES.mumbaiCity}
          alt="Mumbai"
          fill
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(8,15,9,0.97) 0%, rgba(8,15,9,0.85) 55%, rgba(8,15,9,0.45) 100%)",
          }}
        />
        <div className="bg-mesh" style={{ position: "absolute", inset: 0 }} />
        <div
          className="container"
          style={{
            position: "relative",
            padding: "clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,3rem)",
          }}
        >
          <nav className="breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--cream-dim)" }}>Contact</span>
          </nav>
          <div className="eyebrow">{t("tag")}</div>
          <h1
            className="display-xl"
            style={{ maxWidth: "16ch", marginBottom: "1.5rem" }}
          >
            {t("headline")}
          </h1>
          <p className="body-lg" style={{ maxWidth: "46ch" }}>
            {t("sub")}
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ROW ── */}
      <div
        style={{
          background: "var(--bg-1)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="container"
          style={{ padding: "clamp(2rem,4vw,3rem) clamp(1.25rem,4vw,3rem)" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "1rem",
            }}
          >
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(61,143,82,0.12)",
                    border: "1px solid rgba(61,143,82,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} style={{ color: "var(--green-hi)" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "var(--muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 3,
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--cream-dim)",
                        textDecoration: "none",
                        lineHeight: 1.5,
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--cream-dim)",
                        lineHeight: 1.5,
                      }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN SECTION — form + sidebar ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,440px),1fr))",
              gap: "clamp(3rem,6vw,6rem)",
            }}
          >
            {/* ── FORM ── */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.9rem",
                  fontWeight: 500,
                  color: "var(--cream)",
                  marginBottom: "0.5rem",
                }}
              >
                Send a message
              </h2>
              <p className="body-sm" style={{ marginBottom: "2rem" }}>
                We respond within 24 hours · No spam, ever.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: "3rem 2rem",
                    textAlign: "center",
                    background: "rgba(61,143,82,0.07)",
                    border: "1px solid rgba(61,143,82,0.2)",
                    borderRadius: 20,
                  }}
                >
                  <CheckCircle
                    size={52}
                    style={{
                      color: "var(--green-hi)",
                      margin: "0 auto 1.25rem",
                      display: "block",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      color: "var(--cream)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Message sent!
                  </h3>
                  <p className="body-md" style={{ marginBottom: "1.75rem" }}>
                    {t("form.success")}
                  </p>
                  <button
                    onClick={() => {
                      setDone(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="btn btn-outline btn-sm"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    {[
                      {
                        field: "name",
                        label: t("form.name"),
                        type: "text",
                        ph: "Priya Sharma",
                        req: true,
                      },
                      {
                        field: "phone",
                        label: t("form.phone"),
                        type: "tel",
                        ph: "+91 98765 43210",
                        req: false,
                      },
                    ].map(({ field, label, type, ph, req }) => (
                      <div key={field}>
                        <label
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.78rem",
                            fontWeight: 500,
                            color: "var(--cream-dim)",
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          {label}
                          {req && (
                            <span
                              style={{ color: "var(--orange)", marginLeft: 2 }}
                            >
                              *
                            </span>
                          )}
                        </label>
                        <input
                          type={type}
                          required={req}
                          placeholder={ph}
                          value={(form as any)[field]}
                          onChange={(e) =>
                            setForm({ ...form, [field]: e.target.value })
                          }
                          style={{ width: "100%", padding: "11px 14px" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "var(--cream-dim)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {t("form.email")}
                      <span style={{ color: "var(--orange)", marginLeft: 2 }}>
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      style={{ width: "100%", padding: "11px 14px" }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "var(--cream-dim)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {t("form.subject")}
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select a subject…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "var(--cream-dim)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {t("form.message")}
                      <span style={{ color: "var(--orange)", marginLeft: 2 }}>
                        *
                      </span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us how we can help…"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        resize: "vertical",
                        lineHeight: 1.65,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={submitting}
                    style={{
                      justifyContent: "center",
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {submitting ? (
                      "Sending…"
                    ) : (
                      <>
                        {t("form.send")} <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {/* Office photo */}
              <div
                style={{
                  position: "relative",
                  height: 240,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={IMAGES.office}
                  alt="IkigaiE office"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 40%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(8,15,9,0.7) 0%, rgba(8,15,9,0.1) 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                      color: "var(--cream)",
                    }}
                  >
                    &quot;Where purpose meets practice.&quot;
                  </p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: "var(--muted)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {t("social")}
                </h3>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { label: "𝕏", color: "var(--cream-dim)" },
                    { label: "in", color: "#0077b5" },
                    { label: "yt", color: "#e74c3c" },
                    { label: "ig", color: "#e85d20" },
                  ].map(({ label, color }) => (
                    <a
                      key={label}
                      href="#"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "var(--bg-2)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = color;
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border-md)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--surface)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--muted)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--bg-2)";
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder with Mumbai photo */}
              <div
                style={{
                  position: "relative",
                  height: 200,
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src={IMAGES.mumbaiCity}
                  alt="Mumbai office location"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 70%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(8,15,9,0.45)",
                  }}
                />
                {/* Pin */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "var(--orange)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 8px",
                        boxShadow: "0 0 20px rgba(212,82,26,0.6)",
                      }}
                    >
                      <MapPin size={18} color="#fff" />
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        color: "#fff",
                        fontWeight: 500,
                        textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      Workshops across India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="section-sm"
        style={{
          background: "var(--bg-1)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,400px),1fr))",
              gap: "clamp(3rem,6vw,5rem)",
              alignItems: "start",
            }}
          >
            {/* Left — FAQ image */}
            <div
              style={{
                position: "relative",
                height: 460,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <Image
                src={IMAGES.career}
                alt="Mentoring session"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,15,9,0.85) 0%, rgba(8,15,9,0.3) 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  right: "2rem",
                }}
              >
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                  Got questions?
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    color: "var(--cream)",
                    lineHeight: 1.35,
                  }}
                >
                  Our team is here to guide you every step of the way.
                </p>
              </div>
            </div>

            {/* Right — FAQ accordion */}
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <div className="eyebrow">FAQ</div>
                <h2 className="display-md">Common questions</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {faqs.map((faq, i) => (
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
                        padding: "1.2rem 1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem",
                          fontWeight: 500,
                          color: "var(--cream)",
                          lineHeight: 1.3,
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          color:
                            openFaq === i ? "var(--orange)" : "var(--muted)",
                          flexShrink: 0,
                          transition: "color 0.2s",
                        }}
                      >
                        {openFaq === i ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 1.5rem 1.5rem" }}>
                        <div
                          style={{
                            height: 1,
                            background: "var(--border)",
                            marginBottom: "1rem",
                          }}
                        />
                        <p className="body-md" style={{ lineHeight: 1.75 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
