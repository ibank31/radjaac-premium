import { useState } from "react"
import { Helmet } from "react-helmet-async"
import {
  Settings,
  Layers, Shield, Cable, ClipboardCheck, BadgeCheck,
  MessageCircle,
  CheckCircle2, ArrowRight, Check,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import { SITE_DATA } from "../constants/siteData"

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const WA_LINK = SITE_DATA.whatsappUrl

const STEPS = [
  {
    n: "01", color: "#3b82f6",
    title: "Survey & Konsultasi",
    desc: "Tim kami melakukan survey lokasi dan konsultasi kebutuhan AC sesuai luas ruangan, kebutuhan daya, dan budget Anda.",
    tags: ["Survey lokasi gratis", "Rekomendasi unit tepat", "Estimasi transparan"],
  },
  {
    n: "02", color: "#818cf8",
    title: "Penentuan Posisi AC",
    desc: "Teknisi menentukan titik instalasi optimal untuk sirkulasi udara maksimal dan tampilan yang rapi.",
    tags: ["Marking posisi indoor & outdoor", "Pengecekan jalur pipa", "Perencanaan jalur kabel"],
  },
  {
    n: "03", color: "#22c55e",
    title: "Instalasi Indoor & Outdoor",
    desc: "Pemasangan unit indoor dan outdoor dilakukan dengan bracket kokoh, pipa rapi, dan kabel dalam conduit aman.",
    tags: ["Bracket standar kokoh", "Pipa PVC + insulasi rapi", "Kabel conduit tertata"],
  },
  {
    n: "04", color: "#f59e0b",
    title: "Vacuum & Testing",
    desc: "Sistem divakum untuk membuang udara dan kelembapan sebelum freon diisi — standar instalasi profesional.",
    tags: ["Vacuum pump 30 menit", "Pressure test sistem", "Pengecekan kebocoran"],
  },
  {
    n: "05", color: "#06b6d4",
    title: "Finishing & Edukasi",
    desc: "Finishing area kerja bersih, kemudian teknisi menjelaskan cara penggunaan AC yang optimal kepada pengguna.",
    tags: ["Area kerja dibersihkan", "Edukasi remote & mode", "Dokumentasi instalasi"],
  },
]

const STANDARDS = [
  { icon: "Layers",         title: "Pipa Insulasi Rapi",        desc: "Pipa freon dilindungi insulasi foam dan dirapikan dengan ducting — bukan dibiarkan terbuka." },
  { icon: "Shield",         title: "Bracket Kokoh Bergaransi",  desc: "Bracket outdoor dipasang ke dinding beton dengan dynabolt — kuat, aman, tidak goyang." },
  { icon: "Settings",       title: "Vacuum Sebelum Penggunaan", desc: "Wajib vacuum sebelum freon diisi untuk memastikan sistem bebas udara dan kelembapan." },
  { icon: "Cable",          title: "Jalur Kabel Aman",          desc: "Kabel listrik ditata dalam conduit pipa, bukan dilem biasa — aman dari risiko korsleting." },
  { icon: "ClipboardCheck", title: "Testing Sebelum Selesai",   desc: "AC diuji coba penuh sebelum teknisi meninggalkan lokasi — tidak ada pekerjaan setengah jadi." },
  { icon: "BadgeCheck",     title: "Garansi Pemasangan",        desc: "Setiap instalasi bergaransi resmi. Masalah akibat pemasangan kami tangani tanpa biaya tambahan." },
]

const STANDARD_ICON_MAP = {
  Layers, Shield, Settings, Cable, ClipboardCheck, BadgeCheck,
}

/* ══════════════════════════════════════════
   SVG VISUAL
══════════════════════════════════════════ */

function InstallVisual() {
  return (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[300px] drop-shadow-[0_0_36px_rgba(59,130,246,0.13)]">
      <ellipse cx="150" cy="110" rx="118" ry="80" fill="rgba(59,130,246,.04)" />
      <rect x="20" y="18" width="240" height="76" rx="13" fill="#0c1b38" stroke="rgba(96,165,250,.22)" strokeWidth="1.4"/>
      <rect x="20" y="18" width="240" height="20" rx="13" fill="rgba(96,165,250,.04)"/>
      {[76,83,90].map(y => <line key={y} x1="38" y1={y} x2="262" y2={y} stroke="rgba(96,165,250,.1)" strokeWidth="1.4" strokeLinecap="round"/>)}
      <rect x="82" y="28" width="96" height="36" rx="7" fill="#050f22" stroke="rgba(59,130,246,.18)" strokeWidth="1"/>
      <rect x="90" y="33" width="28" height="10" rx="3" fill="rgba(59,130,246,.14)"/>
      <text x="104" y="41" fill="#60a5fa" fontSize="6" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">COOL</text>
      <text x="106" y="55" fill="#60a5fa" fontSize="18" fontWeight="700" fontFamily="monospace">22°</text>
      <circle cx="196" cy="46" r="5" fill="#22c55e"/>
      <circle cx="196" cy="46" r="9" fill="rgba(34,197,94,.18)"/>
      <path d="M252 56 L276 56 L276 168" stroke="rgba(96,165,250,.2)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M252 62 L270 62 L270 168" stroke="rgba(59,130,246,.1)" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 4"/>
      <rect x="278" y="100" width="10" height="36" rx="4" fill="rgba(59,130,246,.1)" stroke="rgba(59,130,246,.18)" strokeWidth="1"/>
      <rect x="22" y="148" width="104" height="62" rx="9" fill="#0a1628" stroke="rgba(96,165,250,.18)" strokeWidth="1.4"/>
      <rect x="30" y="156" width="44" height="46" rx="5" fill="#070f1e" stroke="rgba(96,165,250,.1)" strokeWidth="1"/>
      {[162,169,176,183,190,197].map(y => <line key={y} x1="34" y1={y} x2="70" y2={y} stroke="rgba(96,165,250,.14)" strokeWidth="1.1" strokeLinecap="round"/>)}
      <circle cx="100" cy="179" r="20" fill="#060e20" stroke="rgba(96,165,250,.14)" strokeWidth="1"/>
      <circle cx="100" cy="179" r="12" fill="#080f28" stroke="rgba(59,130,246,.18)" strokeWidth="1"/>
      {[0,45,90,135,180,225,270,315].map(a => {
        const r = a * Math.PI / 180
        return <line key={a} x1={100+9*Math.cos(r)} y1={179+9*Math.sin(r)} x2={100+17*Math.cos(r)} y2={179+17*Math.sin(r)} stroke="rgba(96,165,250,.18)" strokeWidth="1.4"/>
      })}
      <rect x="17" y="140" width="114" height="8" rx="4" fill="#0d1e40" stroke="rgba(96,165,250,.24)" strokeWidth="1"/>
      <rect x="32" y="140" width="7" height="14" rx="2" fill="rgba(59,130,246,.18)"/>
      <rect x="105" y="140" width="7" height="14" rx="2" fill="rgba(59,130,246,.18)"/>
      <circle cx="52" cy="132" r="13" fill="rgba(34,197,94,.13)" stroke="rgba(34,197,94,.28)" strokeWidth="1.4"/>
      <text x="52" y="137" fill="#4ade80" fontSize="11" textAnchor="middle">✓</text>
      <circle cx="208" cy="172" r="25" fill="#050f22" stroke="rgba(96,165,250,.16)" strokeWidth="1.4"/>
      <circle cx="208" cy="172" r="17" fill="#060d20" stroke="rgba(59,130,246,.1)" strokeWidth="1"/>
      <text x="208" y="167" fill="#60a5fa" fontSize="6" textAnchor="middle" fontWeight="700">VACUUM</text>
      <text x="208" y="178" fill="#4ade80" fontSize="10" textAnchor="middle" fontWeight="800">−0.1</text>
      <text x="208" y="187" fill="#60a5fa" fontSize="5" textAnchor="middle">MPa</text>
      {[-18,-6,6,18].map((x,i) => (
        <path key={i} d={`M${150+x} 97 Q${153+x} 108 ${150+x} 120`}
          stroke="rgba(96,165,250,.07)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      ))}
    </svg>
  )
}

/* ══════════════════════════════════════════
   COMPONENT: Badge
══════════════════════════════════════════ */

function Badge({ children, color = "cyan" }) {
  const colorMap = {
    blue: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    green: "border-green-400/20 bg-green-400/10 text-green-300",
    cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  }
  return (
    <div className={`inline-flex items-center gap-2 border px-5 py-2 rounded-full text-sm mb-6 ${colorMap[color] || colorMap.cyan}`}>
      <div className="w-2 h-2 rounded-full bg-current" />
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════
   COMPONENT: SectionHeader
══════════════════════════════════════════ */

function SectionHeader({ badge, title, sub, center = false, color = "cyan" }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && <Badge color={color}>{badge}</Badge>}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {sub && (
        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════
   COMPONENT: HoverCard
══════════════════════════════════════════ */

function HoverCard({ children, featured = false, className = "" }) {
  return (
    <div className={`rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
      featured
        ? "border-cyan-400/50 bg-slate-900/60 hover:shadow-cyan-500/10"
        : "border-slate-800 bg-slate-900/40 hover:border-cyan-400/50 hover:shadow-cyan-500/10"
    } ${className}`}>
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════
   SECTION: Hero
══════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />
      <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-[-120px] bottom-0 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            INSTALASI PROFESIONAL
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-tight md:leading-[0.95] tracking-[-0.03em] mb-6 max-w-2xl">
            Instalasi AC Profesional
            <span className="text-cyan-300"> Rapi, Presisi & Bergaransi</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed md:leading-8 max-w-xl mb-8">
            Pengerjaan instalasi AC oleh tim teknisi berpengalaman dengan standar pemasangan rapi, vacuum resmi, dan garansi pemasangan untuk setiap pekerjaan.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-7 py-4 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.18)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Konsultasi Instalasi
            </a>

            <a
              href="#paket"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
            >
              Lihat Paket Harga <ArrowRight size={15} className="ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/10 text-center">
            {[["500+", "Unit Terpasang"], ["5 Tahun", "Pengalaman"], ["100%", "Bergaransi"]].map(([num, label]) => (
              <div key={label}>
                <span className="block text-xl sm:text-2xl font-black text-white leading-none">{num}</span>
                <span className="block text-[10px] sm:text-xs text-white/50 mt-1.5 font-bold uppercase tracking-[0.06em]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-[32px] opacity-50" />
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-xl shadow-cyan-500/10 p-6">
            <InstallVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   SECTION: Process Timeline
══════════════════════════════════════════ */

function ProcessSection() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section className="py-20">
        <div className="text-center mb-12">
          <Badge>PROSES INSTALASI</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bagaimana Proses Instalasi Kami
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Setiap langkah dikerjakan dengan SOP yang jelas — dari survey awal hingga edukasi penggunaan.
          </p>
        </div>

        <div className="space-y-6">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex gap-4 md:gap-8">
              {/* Icon column */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${s.color}16`,
                    border: `1.5px solid ${s.color}36`,
                    color: s.color,
                  }}
                >
                  {s.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: `linear-gradient(180deg,${s.color}60,transparent)` }} />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 mb-2">
                <HoverCard className="relative overflow-hidden p-6">
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${s.color}80,transparent)` }} />
                  <span className="text-xs font-bold uppercase tracking-[0.1em]" style={{ color: s.color }}>Langkah {s.n}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.09] rounded-lg px-3 py-1 text-xs text-slate-400">
                        <Check size={10} style={{ color: s.color }} />
                        {t}
                      </span>
                    ))}
                  </div>
                </HoverCard>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

/* ══════════════════════════════════════════
   SECTION: Standards
══════════════════════════════════════════ */

function StandardsSection() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-radial from-blue-500/6 to-transparent" />
        </div>
        <div className="relative">
          <SectionHeader
            badge="STANDAR INSTALASI"
            title="Standar Kerja Radja AC"
            sub="Bukan teknisi biasa. Setiap instalasi kami mengikuti standar yang ketat — karena pekerjaan rapi bukan pilihan, melainkan kewajiban."
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {STANDARDS.map(s => {
              const IconComp = STANDARD_ICON_MAP[s.icon]
              return (
                <HoverCard key={s.title}>
                  <div className="p-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4">
                      {IconComp && <IconComp size={18} />}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </HoverCard>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════════════════════════════════
   SECTION: CTA Closing
══════════════════════════════════════════ */

function CtaSection() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 to-transparent" />
        </div>
        <div className="relative text-center">
          <Badge color="green">BERGARANSI RESMI</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Butuh Instalasi AC yang <br />Rapi & Profesional?
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Konsultasikan kebutuhan instalasi rumah atau bisnis Anda bersama tim Radja AC. Gratis, tanpa tekanan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} /> Chat WhatsApp
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Konsultasi Sekarang <ArrowRight size={15} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Survey Gratis", "Harga Transparan", "Garansi Pemasangan"].map(l => (
              <span key={l} className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                <CheckCircle2 size={13} className="text-green-400" /> {l}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */

export default function InstalasiProfesional() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Instalasi AC Profesional Purwokerto & Banyumas | Radja AC"
        description="Layanan instalasi AC profesional oleh tim teknisi berpengalaman. Proses rapi, vacuum resmi, dan bergaransi untuk rumah dan bisnis di Purwokerto & Banyumas."
        canonicalPath="/instalasi-profesional"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Instalasi AC Profesional",
            provider: { "@type": "LocalBusiness", name: "Radja AC" },
            areaServed: ["Purwokerto", "Banyumas", "Sokaraja", "Cilacap", "Ajibarang", "Purbalingga"],
          })}
        </script>
      </Helmet>

      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <Hero />
        <ProcessSection />
        <StandardsSection />
        <CtaSection />
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}