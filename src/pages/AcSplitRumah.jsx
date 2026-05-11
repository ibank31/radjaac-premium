import { useState } from "react"
import { Helmet } from "react-helmet-async"
import {
  Wind, MessageCircle, Check, ArrowRight, ChevronRight,
  Star, SlidersHorizontal, MapPin, Clock
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import { SITE_DATA } from "../constants/siteData"

/* ══════════════════════════════════════════
   CONSTANTS
══════════════════════════════════════════ */

const WA_LINK = SITE_DATA.whatsappUrl

const FILTERS = [
  { id: "all",  label: "Semua" },
  { id: "0.5",  label: "½ PK" },
  { id: "0.75", label: "¾ PK" },
  { id: "1",    label: "1 PK" },
  { id: "1.5",  label: "1½ PK" },
  { id: "2",    label: "2 PK" },
  { id: "inv",  label: "Inverter" },
  { id: "low",  label: "Low Watt" },
]

/* Image mapping by brand */
const BRAND_IMGS = {
  Daikin: "/assets/products/hero-daikin.jpg",
  Gree: "/assets/products/gree-display.jpg",
  Panasonic: "/assets/home/display-ac-wall-series.webp",
  Samsung: "/assets/home/display-ac-smart-control.webp",
}

const PRODUCTS = [
  { brand: "Daikin",    pk: "1 PK",   type: "Inverter",     tag: "Best Seller",   tagType: "blue",  filters: ["1", "inv"],    feat: ["Freon R32", "Self Cleaning", "5 Star Energy"] },
  { brand: "Gree",      pk: "¾ PK",   type: "Non-Inverter", tag: "Hemat Listrik", tagType: "green", filters: ["0.75", "low"], feat: ["Freon R410A", "Auto Restart", "Quiet Mode"] },
  { brand: "Panasonic", pk: "1 PK",   type: "Inverter",     tag: "Favorit Rumah", tagType: "amber", filters: ["1", "inv"],    feat: ["nanoe™ X", "Econavi", "Auto Clean"] },
  { brand: "Samsung",   pk: "1½ PK",  type: "Inverter",     tag: "Smart Modern",  tagType: "blue",  filters: ["1.5", "inv"],  feat: ["Wi-Fi Control", "AI Auto Cooling", "Fast Cooling"] },
  { brand: "Daikin",    pk: "1 PK",   type: "Inverter",     tag: "Hemat Listrik", tagType: "green", filters: ["1", "inv"],    feat: ["Freon R32", "Flash Streamer", "Quiet Operation"] },
  { brand: "Gree",      pk: "1½ PK",  type: "Inverter",     tag: "Value Terbaik", tagType: "amber", filters: ["1.5", "inv"],  feat: ["Cold Plasma", "Auto Clean", "Turbo Cool"] },
  { brand: "Panasonic", pk: "½ PK",   type: "Non-Inverter", tag: "Low Watt",      tagType: "green", filters: ["0.5", "low"],  feat: ["360W Konsumsi", "Anti Bakteri", "Auto Restart"] },
  { brand: "Daikin",    pk: "1½ PK",  type: "Inverter",     tag: "Best Seller",   tagType: "blue",  filters: ["1.5", "inv"],  feat: ["Freon R32", "Self Cleaning", "5 Star Energy"] },
  { brand: "Samsung",   pk: "1 PK",   type: "Inverter",     tag: "Smart Modern",  tagType: "blue",  filters: ["1", "inv"],    feat: ["AI Auto Cooling", "Fast Cooling", "Digital Inverter"] },
]

const PK_GUIDE = [
  { room: "Kamar Tidur Kecil",   size: "< 10 m²",   pk: "½ PK",     color: "#60a5fa" },
  { room: "Kamar Tidur Standar", size: "10–14 m²",   pk: "¾ – 1 PK", color: "#60a5fa" },
  { room: "Ruang Keluarga",      size: "15–20 m²",   pk: "1 – 1½ PK",color: "#f59e0b" },
  { room: "Ruang Besar / Living",size: "20–30 m²",   pk: "2 PK",     color: "#22c55e" },
]

const WHY = [
  { title: "Multi Brand Resmi",     desc: "Daikin, Gree, Panasonic, Samsung — semua stok tersedia" },
  { title: "Instalasi Profesional", desc: "Teknisi berpengalaman, pengerjaan rapi & bergaransi" },
  { title: "Garansi Resmi",         desc: "Garansi unit & spare part langsung dari distributor resmi" },
  { title: "Konsultasi Gratis",     desc: "Kami bantu pilihkan AC yang paling sesuai kebutuhan Anda" },
]

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
      <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════
   COMPONENT: ProductCard
══════════════════════════════════════════ */

function ProductCard({ p }) {
  const imgSrc = BRAND_IMGS[p.brand] || "/assets/home/display-ac-wall-mounted.webp"
  const TAG_STYLES = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    green: "bg-gradient-to-r from-green-500 to-green-600 text-white",
    amber: "bg-gradient-to-r from-amber-500 to-amber-600 text-white",
  }
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:border-cyan-400/25 flex flex-col">
      <div className="h-[180px] relative overflow-hidden flex items-center justify-center bg-slate-950">
        <img
          src={imgSrc}
          alt={`${p.brand} AC Split`}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        {p.tag && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full z-10 ${TAG_STYLES[p.tagType] || TAG_STYLES.blue}`}>
            {p.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-1">{p.brand}</span>
        <h3 className="font-bold text-white text-base mb-1">{p.pk} · {p.type}</h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.feat.map(f => (
            <span key={f} className="inline-flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full text-[11px] text-slate-400 font-medium">
              <Check size={9} className="text-green-400" />
              {f}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/35 font-bold py-2.5 rounded-xl text-xs transition-all duration-200"
          >
            Tanya Harga <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */

export default function AcSplitRumah() {
  const [active, setActive] = useState("all")

  const filtered = active === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.filters.includes(active))

  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="AC Split Rumah Purwokerto & Banyumas | Radja AC"
        description="Katalog AC Split Rumah Daikin, Gree, Panasonic, Samsung. Tersedia ½–2 PK Inverter & Low Watt. Harga bersaing, instalasi profesional."
        canonicalPath="/katalog/ac-split-rumah"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "AC Split Rumah",
            itemListElement: PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "Product", name: `${p.brand} ${p.pk}` },
            })),
          })}
        </script>
      </Helmet>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%,black 0%,transparent 100%)",
          }}
        />
        <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-5 flex-wrap">
                <a href="/" className="hover:text-cyan-300 transition">Beranda</a>
                <ChevronRight size={10} />
                <a href="#" className="hover:text-cyan-300 transition">Katalog AC</a>
                <ChevronRight size={10} />
                <span className="text-cyan-300 font-semibold">AC Split Rumah</span>
              </nav>

              <Badge>KATEGORI · AC SPLIT RUMAH</Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-tight md:leading-[0.95] tracking-[-0.03em] mb-6">
                AC Split <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Terbaik</span>
                <br />
                untuk Hunian Modern
              </h1>

              <p className="text-white/70 text-base md:text-lg leading-relaxed md:leading-8 max-w-xl mb-8">
                Tersedia AC split hemat listrik dari brand terpercaya — Daikin, Gree, Panasonic, Samsung — dengan instalasi profesional dan garansi resmi distributor.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-6">
                <a
                  href="#produk"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-7 py-4 rounded-full shadow-[0_4px_24px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.45)]"
                >
                  <Wind size={16} /> Lihat Produk
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-7 py-4 rounded-full shadow-[0_4px_24px_rgba(34,197,94,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(34,197,94,0.4)]"
                >
                  <MessageCircle size={16} /> Konsultasi Gratis
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Multi Brand Resmi", "Garansi Distributor", "Instalasi Profesional", "Free Konsultasi"].map(t => (
                  <span key={t} className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-slate-300 font-semibold">
                    <Check size={10} className="text-green-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:block hidden">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur">
                <div className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 60% 40% at 50% 20%,rgba(59,130,246,0.07) 0%,transparent 70%)" }}
                />
                <img
                  src="/assets/home/display-ac-wall-mounted.webp"
                  alt="AC Split Rumah"
                  className="w-full max-w-[340px] mx-auto object-contain rounded-lg opacity-90 drop-shadow-[0_0_36px_rgba(59,130,246,0.15)]"
                  style={{ aspectRatio: "340/200" }}
                />
                <div className="flex items-center justify-center gap-6 mt-5 pt-5 border-t border-white/10">
                  <div className="text-center">
                    <span className="block text-xl font-black text-white">{PRODUCTS.length}+</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">Produk Tersedia</span>
                  </div>
                  <div className="w-px h-9 bg-white/10" />
                  <div className="text-center">
                    <span className="block text-xl font-black text-white">4</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">Brand Resmi</span>
                  </div>
                  <div className="w-px h-9 bg-white/10" />
                  <div className="text-center">
                    <span className="block text-xl font-black text-white">5★</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">Rating Toko</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FILTER BAR
      ══════════════════════════════════════════ */}
      <div className="sticky top-[72px] z-50 bg-[#080e1c]/80 backdrop-blur-md border-y border-white/10" id="produk">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-none">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider flex-shrink-0">
              <SlidersHorizontal size={12} /> Filter:
            </span>
            <div className="flex gap-2 flex-shrink-0">
              {FILTERS.map(f => (
                <button
                  key={f.id}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active === f.id
                      ? "bg-cyan-500/15 border border-cyan-400/40 text-cyan-300"
                      : "bg-white/[0.04] border border-white/10 text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-white"
                  }`}
                  onClick={() => setActive(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <Badge>KATALOG PRODUK</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                AC Split Rumah
                {active !== "all" && (
                  <span className="text-cyan-300 text-xl md:text-2xl ml-2">
                    · {FILTERS.find(f => f.id === active)?.label}
                  </span>
                )}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold flex-shrink-0 pb-1">{filtered.length} produk ditemukan</span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => <ProductCard key={i} p={p} />)}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-slate-400">
              <Wind size={32} className="opacity-50" />
              <p className="text-sm">Produk untuk filter ini sedang kami siapkan.</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm shadow-lg transition hover:-translate-y-0.5"
              >
                <MessageCircle size={14} /> Tanya Ketersediaan
              </a>
            </div>
          )}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-6 lg:mx-8" />

      {/* ══════════════════════════════════════════
          PK GUIDE
      ══════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-[140px]">
              <Badge>PANDUAN CEPAT</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Bingung Pilih<br />Berapa PK?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                PK yang tidak sesuai membuat AC bekerja lebih keras, boros listrik, dan ruangan tidak optimal. Berikut panduan cepat berdasarkan luas ruangan.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} /> Konsultasi Gratis
              </a>
            </div>

            <div className="space-y-2.5">
              {PK_GUIDE.map((g, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-slate-900/40 border border-white/10 rounded-2xl p-4 transition-all duration-200 hover:border-blue-500/20 hover:bg-slate-900/60 hover:translate-x-1 cursor-pointer"
                >
                  <div className="text-center min-w-[72px]">
                    <span className="block font-black text-base leading-none" style={{ color: g.color }}>{g.pk}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{g.size}</span>
                  </div>
                  <div className="w-px h-9 bg-white/10" />
                  <span className="flex-1 text-sm font-semibold text-white">{g.room}</span>
                  <button
                    onClick={() => {
                      const pkMap = { "½ PK": "0.5", "¾ – 1 PK": "1", "1 – 1½ PK": "1", "2 PK": "2" }
                      setActive(pkMap[g.pk] || "all")
                    }}
                    className="w-7 h-7 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 flex-shrink-0 transition"
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
              <p className="text-xs text-slate-500 leading-relaxed px-1 pt-1">
                * Panduan umum. Faktor lain: insulasi ruangan, jumlah orang, dan lantai bangunan juga mempengaruhi kebutuhan PK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-6 lg:mx-8" />

      {/* ══════════════════════════════════════════
          WHY RADJA AC
      ══════════════════════════════════════════ */}
      <section className="py-16 border-y border-white/10 bg-[#080e1c]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge>MENGAPA RADJA AC</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Belanja AC Lebih Tenang
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Dealer resmi dengan stok lengkap, instalasi profesional, dan after-sales yang bisa diandalkan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map(w => (
              <div key={w.title} className="text-center p-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 text-blue-300">
                  <Star size={22} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{w.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA CLOSING
      ══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%,rgba(59,130,246,0.09) 0%,transparent 65%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <Badge>SIAP BELANJA?</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Temukan AC Split yang<br />Tepat untuk Rumah Anda
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Konsultasikan kebutuhan AC bersama tim Radja AC.<br />
            Gratis konsultasi, pengiriman & instalasi area Purwokerto–Banyumas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={19} /> Chat WhatsApp
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
            >
              <Wind size={19} /> Lihat Brand Lain
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Purwokerto, Banyumas
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> Buka Setiap Hari 08.00 – 20.00
            </span>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}