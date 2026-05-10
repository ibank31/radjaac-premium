import Navbar from "../../components/navigation/Navbar"

import {
  Wind,
  Home,
  Zap,
  Building2,
  Wrench,
  Headphones,
  MessageCircle,
  Check,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  ChevronRight
} from "lucide-react"

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV = [
  { label: "Beranda", href: "#" },
  { label: "Katalog AC", href: "#katalog" },
  { label: "Brand Unggulan", href: "#brand" },
  { label: "Instalasi Profesional", href: "#instalasi" },
  { label: "Solusi AC", href: "#solusi" },
  { label: "Tentang Kami", href: "#tentang" },
]

const CATEGORIES = [
  { Icon: Home, label: "AC Rumah", desc: "Nyaman untuk hunian" },
  { Icon: Zap, label: "AC Inverter", desc: "Hemat listrik hingga 60%" },
  { Icon: Wind, label: "Low Watt", desc: "Ideal untuk kos & kontrakan" },
  { Icon: Building2, label: "AC Kantor", desc: "Solusi ruang komersial" },
]

const BRANDS = [
  { name: "Daikin", tagline: "Premium & Senyap", dot: "#0066b3" },
  { name: "Gree", tagline: "Value Terbaik", dot: "#00a651" },
  { name: "Panasonic", tagline: "Udara Lebih Sehat", dot: "#003087" },
  { name: "Samsung", tagline: "Smart Modern Living", dot: "#1428a0" },
]

const PRODUCTS = [
  { brand: "Daikin", model: "FTKC25NVM4", pk: "1 PK", type: "Inverter", tag: "Best Seller", tagType: "blue", price: "Rp 3.900.000", bg: "linear-gradient(145deg,#07112a,#0d1e40)" },
  { brand: "Gree", model: "GWC-09MOO4", pk: "3/4 PK", type: "Standard", tag: "Hemat Listrik", tagType: "green", price: "Rp 2.900.000", bg: "linear-gradient(145deg,#071818,#0c2518)" },
  { brand: "Panasonic", model: "CS-PN9WKJ", pk: "1 PK", type: "Inverter", tag: "Favorit Rumah", tagType: "amber", price: "Rp 3.600.000", bg: "linear-gradient(145deg,#070d28,#0a1435)" },
  { brand: "Samsung", model: "AR12TXHQASIN", pk: "1.5 PK", type: "WindFree™", tag: "Smart Modern", tagType: "blue", price: "Rp 4.500.000", bg: "linear-gradient(145deg,#060e28,#0c1640)" },
  { brand: "Daikin", model: "FTKQ25SVM4", pk: "1 PK", type: "Smile Series", tag: "Hemat Listrik", tagType: "green", price: "Rp 4.200.000", bg: "linear-gradient(145deg,#07112a,#0d1e40)" },
  { brand: "Gree", model: "GWC-12MOO3", pk: "1.5 PK", type: "Inverter", tag: "Value Terbaik", tagType: "amber", price: "Rp 3.500.000", bg: "linear-gradient(145deg,#071818,#0c2518)" },
]

const WHY = [
  { Icon: Star, title: "Multi Brand", desc: "Daikin, Gree, Panasonic, Samsung & pilihan lengkap lainnya" },
  { Icon: Wrench, title: "Instalasi Rapi", desc: "Teknisi berpengalaman, pengerjaan bersih & presisi" },
  { Icon: MessageCircle, title: "Konsultasi Gratis", desc: "Kami bantu temukan AC yang paling tepat untuk Anda" },
  { Icon: Headphones, title: "After Sales Support", desc: "Garansi penuh dan layanan purna jual terpercaya" },
]

const WA_LINK = "https://wa.me/6281234567890"

// ─── SVG: AC UNIT VISUAL ─────────────────────────────────────────────────────

const AcVisual = () => (
  <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", maxWidth: 340, filter: "drop-shadow(0 0 40px rgba(59,130,246,0.18))" }}>
    {/* Glow backdrop */}
    <ellipse cx="160" cy="100" rx="130" ry="70" fill="rgba(59,130,246,0.06)" />
    {/* Unit body */}
    <rect x="15" y="35" width="290" height="110" rx="18" fill="#0c1b38" stroke="rgba(96,165,250,0.22)" strokeWidth="1.5"/>
    {/* Top sheen */}
    <rect x="15" y="35" width="290" height="28" rx="18" fill="rgba(96,165,250,0.04)"/>
    <rect x="15" y="51" width="290" height="12" fill="rgba(96,165,250,0.02)"/>
    {/* Bottom vent area */}
    <rect x="15" y="118" width="290" height="27" rx="0" fill="rgba(0,0,0,0.25)"/>
    <path d="M15 132 H305 V145 Q305 145 287 145 H33 Q15 145 15 145 Z" fill="rgba(0,0,0,0.15)" />
    {/* Vent slats */}
    {[122, 129, 136].map(y => (
      <line key={y} x1="35" y1={y} x2="285" y2={y} stroke="rgba(96,165,250,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
    ))}
    {/* Left grill */}
    <rect x="28" y="52" width="50" height="56" rx="8" fill="#07112a" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
    {[58,64,70,76,82,88,94].map(y => (
      <line key={y} x1="32" y1={y} x2="74" y2={y} stroke="rgba(96,165,250,0.18)" strokeWidth="1.2" strokeLinecap="round"/>
    ))}
    {/* Display panel */}
    <rect x="95" y="52" width="140" height="56" rx="10" fill="#050f22" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
    {/* Temperature readout */}
    <text x="120" y="90" fill="#60a5fa" fontSize="28" fontWeight="700" fontFamily="monospace" letterSpacing="-1">25°</text>
    <text x="162" y="90" fill="#3b82f6" fontSize="16" fontFamily="monospace">C</text>
    {/* Mode label */}
    <rect x="102" y="57" width="38" height="14" rx="4" fill="rgba(59,130,246,0.15)"/>
    <text x="121" y="67.5" fill="#60a5fa" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">COOL</text>
    {/* Timer indicator */}
    <rect x="148" y="57" width="38" height="14" rx="4" fill="rgba(34,197,94,0.12)"/>
    <text x="167" y="67.5" fill="#4ade80" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">AUTO</text>
    {/* Right controls */}
    <rect x="250" y="52" width="50" height="56" rx="8" fill="#07112a" stroke="rgba(96,165,250,0.12)" strokeWidth="1"/>
    <circle cx="275" cy="68" r="7" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
    <text x="275" y="72" fill="#60a5fa" fontSize="9" textAnchor="middle">▲</text>
    <circle cx="275" cy="93" r="7" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
    <text x="275" y="97" fill="#7a8fa8" fontSize="9" textAnchor="middle">▼</text>
    {/* Power LED */}
    <circle cx="268" cy="115" r="4" fill="#22c55e"/>
    <circle cx="268" cy="115" r="7" fill="rgba(34,197,94,0.2)"/>
    {/* Signal rings */}
    <circle cx="160" cy="170" r="10" stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none"/>
    <circle cx="160" cy="170" r="18" stroke="rgba(59,130,246,0.08)" strokeWidth="1" fill="none"/>
    <circle cx="160" cy="170" r="26" stroke="rgba(59,130,246,0.04)" strokeWidth="1" fill="none"/>
    {/* Airflow lines */}
    {[-24,-8,8,24].map((x,i) => (
      <path key={i} d={`M${160+x} 148 Q${160+x+4} 158 ${160+x} 168`}
        stroke="rgba(96,165,250,0.12)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    ))}
  </svg>
)

// ─── PRODUCT CARD AC THUMBNAIL ────────────────────────────────────────────────

const AcThumb = ({ bg }) => (
  <svg viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: "70%", maxWidth: 200, opacity: 0.9 }}>
    <rect x="10" y="18" width="200" height="78" rx="12" fill="#0c1b38" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
    <rect x="10" y="18" width="200" height="18" rx="12" fill="rgba(96,165,250,0.04)"/>
    <rect x="10" y="80" width="200" height="16" rx="0" fill="rgba(0,0,0,0.2)"/>
    {[83,89,95].map(y => (
      <line key={y} x1="24" y1={y} x2="196" y2={y} stroke="rgba(96,165,250,0.1)" strokeWidth="1" strokeLinecap="round"/>
    ))}
    <rect x="20" y="28" width="36" height="42" rx="6" fill="#050f22" stroke="rgba(96,165,250,0.1)" strokeWidth="1"/>
    {[34,40,46,52,58].map(y=>(
      <line key={y} x1="24" y1={y} x2="52" y2={y} stroke="rgba(96,165,250,0.15)" strokeWidth="1" strokeLinecap="round"/>
    ))}
    <rect x="68" y="28" width="110" height="42" rx="8" fill="#050f22" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
    <text x="100" y="57" fill="#60a5fa" fontSize="20" fontWeight="700" fontFamily="monospace">24°</text>
    <rect x="75" y="33" width="28" height="10" rx="3" fill="rgba(59,130,246,0.15)"/>
    <text x="89" y="41" fill="#60a5fa" fontSize="6" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">COOL</text>
    <circle cx="185" cy="56" r="3.5" fill="#22c55e"/>
    <circle cx="185" cy="56" r="6" fill="rgba(34,197,94,0.2)"/>
  </svg>
)

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function RadjaAC() {

  return (
    <>
      <style>{CSS}</style>
      <Navbar />

      <div className="root">
        {/* ══════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════ */}
        <section className="hero">
          <div className="hero__bg"/>
          <div className="hero__grid"/>
          <div className="container hero__layout">
            {/* Left */}
            <div className="hero__left">
              <div className="badge">
                <span className="badge__dot"/>
                Dealer AC Resmi — Purwokerto &amp; Banyumas
              </div>
              <h1 className="hero__h1">
                Dealer AC <em>Multi Brand</em><br/>untuk Rumah &amp; Bisnis
              </h1>
              <p className="hero__sub">
                Tersedia AC Daikin, Gree, Panasonic, Samsung dan brand unggulan lainnya 
                — dengan instalasi profesional dan garansi resmi distributor.
              </p>
              <div className="hero__ctas">
                <a href="#katalog" className="btn btn--primary"><Wind size={17}/> Lihat Katalog</a>
                <a href={WA_LINK} className="btn btn--wa"><MessageCircle size={17}/> Konsultasi WhatsApp</a>
              </div>
              <div className="trust-row">
                {["Multi Brand","Bergaransi Resmi","Instalasi Profesional","Konsultasi Gratis"].map(t => (
                  <span key={t} className="trust-pill"><Check size={12}/>{t}</span>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="hero__right">
              <div className="hero__card">
                <div className="hero__card-glow"/>
                <img
                  src="/showroom-radjaac.jpeg"
                  alt="Showroom Radja AC Purwokerto"
                  className="hero__image"
                />
                <div className="hero__stats">
                  <div className="stat"><span className="stat__num">500+</span><span className="stat__lbl">Pelanggan</span></div>
                  <div className="stat__div"/>
                  <div className="stat"><span className="stat__num">4</span><span className="stat__lbl">Brand Resmi</span></div>
                  <div className="stat__div"/>
                  <div className="stat"><span className="stat__num">5★</span><span className="stat__lbl">Rating</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. QUICK CATEGORY
        ══════════════════════════════════════════ */}
        <section className="section" id="katalog">
          <div className="container">
            <div className="sec-label">Kategori Produk</div>
            <h2 className="sec-title">Temukan AC yang Tepat</h2>
            <p className="sec-sub">Pilih berdasarkan kebutuhan ruangan dan anggaran Anda.</p>
            <div className="cat-grid">
              {CATEGORIES.map(c => (
                <a key={c.label} href="#" className="cat-card">
                  <div className="cat-card__icon"><c.Icon size={22}/></div>
                  <div className="cat-card__label">{c.label}</div>
                  <div className="cat-card__desc">{c.desc}</div>
                  <ArrowRight size={14} className="cat-card__arrow"/>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"/>

        {/* ══════════════════════════════════════════
            3. BRAND UNGGULAN
        ══════════════════════════════════════════ */}
        <section className="section" id="brand">
          <div className="container">
            <div className="sec-header">
              <div>
                <div className="sec-label">Brand Tersedia</div>
                <h2 className="sec-title" style={{marginBottom:0}}>Brand Unggulan Pilihan</h2>
              </div>
              <a href="#" className="link-cta">Lihat Semua Brand <ArrowRight size={15}/></a>
            </div>
            <p className="sec-sub">Kami menyediakan brand AC terpercaya dengan garansi resmi dari distributor.</p>
            <div className="brand-grid">
              {BRANDS.map(b => (
                <a key={b.name} href="#" className="brand-card">
                  <div className="brand-card__dot" style={{background: b.dot}}/>
                  <div className="brand-card__name">{b.name}</div>
                  <div className="brand-card__tag">{b.tagline}</div>
                  <div className="brand-card__cta">Lihat Produk <ChevronRight size={13}/></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"/>

        {/* ══════════════════════════════════════════
            4. PRODUK POPULER
        ══════════════════════════════════════════ */}
        <section className="section" id="solusi">
          <div className="container">
            <div className="sec-header">
              <div>
                <div className="sec-label">Produk Populer</div>
                <h2 className="sec-title" style={{marginBottom:0}}>Pilihan Terlaris</h2>
              </div>
              <a href="#" className="link-cta">Lihat Semua Produk <ArrowRight size={15}/></a>
            </div>
            <p className="sec-sub">AC yang paling banyak dipilih pelanggan di Purwokerto &amp; sekitarnya.</p>
            <div className="prod-grid">
              {PRODUCTS.map((p, i) => (
                <div key={i} className="prod-card">
                  <div className="prod-card__img" style={{background: p.bg}}>
                    <div className={`prod-tag prod-tag--${p.tagType}`}>{p.tag}</div>
                    <AcThumb bg={p.bg}/>
                  </div>
                  <div className="prod-card__body">
                    <div className="prod-card__brand">{p.brand}</div>
                    <div className="prod-card__name">{p.model}</div>
                    <div className="prod-card__meta">{p.pk} · {p.type}</div>
                    <div className="prod-card__price">{p.price}<span> / unit</span></div>
                    <button className="btn-detail">Lihat Detail →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5. KENAPA RADJA AC
        ══════════════════════════════════════════ */}
        <section className="section why-section" id="instalasi">
          <div className="container">
            <div style={{textAlign:"center",marginBottom:48}}>
              <div className="sec-label">Keunggulan Kami</div>
              <h2 className="sec-title">Kenapa Pilih Radja AC?</h2>
            </div>
            <div className="why-grid">
              {WHY.map(w => (
                <div key={w.title} className="why-card">
                  <div className="why-card__icon"><w.Icon size={24}/></div>
                  <div className="why-card__title">{w.title}</div>
                  <div className="why-card__desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            6. CTA PENUTUP
        ══════════════════════════════════════════ */}
        <section className="cta-section">
          <div className="cta-section__glow"/>
          <div className="container" style={{textAlign:"center",position:"relative",zIndex:1}}>
            <div className="sec-label" style={{justifyContent:"center",display:"flex",marginBottom:12}}>Siap Mulai?</div>
            <h2 className="cta-section__title">Bingung Pilih AC?</h2>
            <p className="cta-section__sub">
              Konsultasikan kebutuhan AC rumah atau bisnis Anda bersama tim Radja AC.<br/>
              Gratis konsultasi, tanpa tekanan.
            </p>
            <div className="cta-section__btns">
              <a href={WA_LINK} className="btn btn--wa btn--lg"><MessageCircle size={19}/> Chat WhatsApp</a>
              <a href="#katalog" className="btn btn--ghost btn--lg"><Wind size={19}/> Lihat Katalog</a>
            </div>
            <div className="cta-section__info">
              <span><MapPin size={13}/> Purwokerto, Banyumas</span>
              <span><Clock size={13}/> Buka Setiap Hari 08.00 – 20.00</span>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer" id="tentang">
          <div className="container footer__inner">
            <div className="footer__left">
              <a href="#" className="logo"><div className="logo__mark logo__mark--sm"><img src="/logo-radjaac.webp" alt="Radja AC" className="logo__mark-img"/></div><span className="logo__name">Radja<span> AC</span></span></a>
              <p className="footer__copy">Dealer AC Multi Brand terpercaya di Purwokerto &amp; Banyumas.</p>
            </div>
            <div className="footer__links">
              {NAV.slice(1).map(n => <a key={n.label} href={n.href}>{n.label}</a>)}
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2025 Radja AC · Purwokerto, Banyumas · All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  )
}

// ─── CSS ──────────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap');

:root {
  --bg: #060b14;
  --bg2: #09101f;
  --card: #0c1525;
  --card2: #101e38;
  --blue: #3b82f6;
  --blue-l: #60a5fa;
  --blue-d: #2563eb;
  --green: #22c55e;
  --green-d: #16a34a;
  --amber: #f59e0b;
  --txt: #e8f0ff;
  --txt2: #8896ae;
  --txt3: #4e5f78;
  --border: rgba(255,255,255,0.07);
  --border2: rgba(59,130,246,0.2);
  --glow: rgba(59,130,246,0.15);
  --r: 16px;
  --r2: 20px;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Manrope',sans-serif;background:var(--bg);color:var(--txt);-webkit-font-smoothing:antialiased}

.root{min-height:100vh}
.container{max-width:1200px;margin:0 auto;padding:0 24px}

/* ── NAV ── */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 24px;transition:all .35s}
.nav--scrolled{background:rgba(6,11,20,.92);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid var(--border);box-shadow:0 4px 40px rgba(0,0,0,.4)}
.nav__inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
.nav__links{display:flex;align-items:center;gap:4px;list-style:none;flex:1;justify-content:center}
.nav__links a{color:var(--txt2);text-decoration:none;font-size:.82rem;font-weight:600;padding:7px 11px;border-radius:10px;transition:all .2s;letter-spacing:.01em}
.nav__links a:hover,.nav__links a.active{color:var(--txt);background:rgba(255,255,255,.06)}
.nav__links a.active{color:var(--blue-l)}
.nav__wa{}
.hamburger{display:none;background:none;border:1px solid var(--border);color:var(--txt);padding:8px;border-radius:10px;cursor:pointer}

/* ── LOGO ── */
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}
.logo__mark{width:34px;height:34px;background:linear-gradient(135deg,var(--blue),var(--blue-d));border-radius:10px;display:flex;align-items:center;justify-content:center}
.logo__mark--sm{width:28px;height:28px;border-radius:8px}
.logo__name{font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;color:var(--txt);letter-spacing:-.02em}
.logo__name span{color:var(--blue-l)}

/* ── BTNS ── */
.btn{display:inline-flex;align-items:center;gap:8px;border:none;border-radius:14px;font-family:'Manrope',sans-serif;font-weight:700;font-size:.92rem;cursor:pointer;text-decoration:none;transition:all .25s;padding:13px 24px;white-space:nowrap}
.btn--primary{background:linear-gradient(135deg,var(--blue),var(--blue-d));color:#fff;box-shadow:0 4px 24px rgba(59,130,246,.3)}
.btn--primary:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(59,130,246,.45)}
.btn--wa{background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;box-shadow:0 4px 24px rgba(34,197,94,.25)}
.btn--wa:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(34,197,94,.4)}
.btn--ghost{background:rgba(255,255,255,.06);color:var(--txt);border:1px solid var(--border)}
.btn--ghost:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.14);transform:translateY(-2px)}
.btn--sm{padding:9px 18px;font-size:.82rem;border-radius:12px}
.btn--lg{padding:16px 32px;font-size:1rem;border-radius:16px}

/* ── MOBILE MENU ── */
.mob{position:fixed;inset:0;background:var(--bg);z-index:200;padding:24px;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .32s cubic-bezier(.4,0,.2,1)}
.mob--open{transform:translateX(0)}
.mob__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px}
.mob__close{background:none;border:1px solid var(--border);color:var(--txt);padding:8px;border-radius:10px;cursor:pointer}
.mob__links{list-style:none;display:flex;flex-direction:column;gap:2px;flex:1}
.mob__links a{display:flex;justify-content:space-between;align-items:center;color:var(--txt);text-decoration:none;font-size:1rem;font-weight:600;padding:16px;border-radius:12px;border-bottom:1px solid rgba(255,255,255,.04);transition:all .2s}
.mob__links a:hover{background:rgba(255,255,255,.05);padding-left:20px}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding:100px 0 72px}
.hero__bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 65% 45%,rgba(59,130,246,.11) 0%,transparent 65%),radial-gradient(ellipse 40% 40% at 85% 75%,rgba(99,102,241,.07) 0%,transparent 60%),linear-gradient(180deg,#060b14 0%,#080e1c 100%)}
.hero__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(59,130,246,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.04) 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)}
.hero__layout{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;position:relative;z-index:1}
.hero__left{display:flex;flex-direction:column;gap:0}

.badge{display:inline-flex;align-items:center;gap:8px;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.22);color:var(--blue-l);padding:8px 16px;border-radius:100px;font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:22px;width:fit-content}
.badge__dot{width:6px;height:6px;background:var(--blue);border-radius:50%;flex-shrink:0;animation:blink 2.2s infinite}
@keyframes blink{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(59,130,246,.6)}50%{opacity:.5;box-shadow:0 0 0 5px rgba(59,130,246,0)}}

.hero__h1{font-family:'Syne',sans-serif;font-size:clamp(2.2rem,4.5vw,3.6rem);font-weight:800;line-height:1.08;letter-spacing:-.035em;color:#f0f6ff;margin-bottom:18px}
.hero__h1 em{font-style:normal;background:linear-gradient(120deg,var(--blue),#818cf8 80%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero__sub{font-size:.97rem;color:var(--txt2);line-height:1.72;margin-bottom:32px;max-width:460px}
.hero__ctas{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}

.trust-row{display:flex;flex-wrap:wrap;gap:8px}
.trust-pill{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.04);border:1px solid var(--border);padding:7px 14px;border-radius:100px;font-size:.76rem;font-weight:600;color:#a0b0c8}
.trust-pill svg{color:var(--green);flex-shrink:0}

.hero__right{display:flex;justify-content:center;align-items:center}
.hero__card{background:rgba(12,21,37,.7);border:1px solid rgba(59,130,246,.15);border-radius:28px;padding:36px 32px 28px;position:relative;backdrop-filter:blur(10px);box-shadow:0 24px 80px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.06)}
.hero__card-glow{position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse 60% 40% at 50% 20%,rgba(59,130,246,.08) 0%,transparent 70%);border-radius:28px;pointer-events:none}
.hero__image{width:100%;height:100%;min-height:320px;border-radius:22px;object-fit:cover;display:block;position:relative;z-index:1}

.logo__mark-img{width:100%;height:100%;object-fit:contain}

.hero__stats{display:flex;align-items:center;justify-content:center;gap:24px;margin-top:20px;padding-top:20px;border-top:1px solid var(--border)}
.stat{text-align:center}
.stat__num{display:block;font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;color:var(--txt);line-height:1}
.stat__lbl{display:block;font-size:.7rem;color:var(--txt3);margin-top:3px;font-weight:600;text-transform:uppercase;letter-spacing:.05em}
.stat__div{width:1px;height:36px;background:var(--border)}

/* ── SECTIONS ── */
.section{padding:88px 0}
.sec-label{font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--blue);margin-bottom:10px}
.sec-title{font-family:'Syne',sans-serif;font-size:clamp(1.6rem,2.8vw,2.2rem);font-weight:800;color:#f0f6ff;line-height:1.18;letter-spacing:-.025em;margin-bottom:12px}
.sec-sub{color:var(--txt2);font-size:.93rem;line-height:1.65;margin-bottom:44px;max-width:560px}
.sec-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:12px;gap:16px}

.divider{height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);margin:0 24px}

.link-cta{display:inline-flex;align-items:center;gap:6px;color:var(--blue-l);text-decoration:none;font-weight:700;font-size:.86rem;flex-shrink:0;transition:gap .2s}
.link-cta:hover{gap:10px}

/* ── CAT GRID ── */
.cat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.cat-card{background:var(--card);border:1px solid var(--border);border-radius:var(--r2);padding:26px 20px 22px;cursor:pointer;transition:all .3s;text-align:center;text-decoration:none;display:flex;flex-direction:column;align-items:center;position:relative;overflow:hidden}
.cat-card::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(59,130,246,.06),transparent);opacity:0;transition:opacity .3s}
.cat-card:hover{border-color:rgba(59,130,246,.3);transform:translateY(-5px);box-shadow:0 16px 48px rgba(0,0,0,.4)}
.cat-card:hover::before{opacity:1}
.cat-card__icon{width:50px;height:50px;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.18);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;color:var(--blue-l);transition:all .3s}
.cat-card:hover .cat-card__icon{background:rgba(59,130,246,.18);transform:scale(1.05)}
.cat-card__label{font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;color:var(--txt);margin-bottom:5px}
.cat-card__desc{font-size:.76rem;color:var(--txt2);line-height:1.4}
.cat-card__arrow{color:var(--txt3);margin-top:12px;transition:all .3s}
.cat-card:hover .cat-card__arrow{color:var(--blue-l);transform:translateX(4px)}

/* ── BRAND GRID ── */
.brand-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.brand-card{background:var(--card);border:1px solid var(--border);border-radius:var(--r2);padding:28px 22px;cursor:pointer;transition:all .3s;text-decoration:none;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;position:relative}
.brand-card:hover{border-color:rgba(255,255,255,.14);transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.4);background:var(--card2)}
.brand-card__dot{width:10px;height:10px;border-radius:50%}
.brand-card__name{font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800;color:var(--txt);letter-spacing:-.04em;line-height:1}
.brand-card__tag{font-size:.78rem;color:var(--txt2);font-weight:500}
.brand-card__cta{display:flex;align-items:center;gap:4px;font-size:.74rem;color:var(--blue-l);font-weight:700;opacity:0;transform:translateY(4px);transition:all .25s;margin-top:2px}
.brand-card:hover .brand-card__cta{opacity:1;transform:translateY(0)}

/* ── PRODUCTS ── */
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.prod-card{background:var(--card);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;transition:all .3s;cursor:pointer}
.prod-card:hover{border-color:rgba(59,130,246,.25);transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,.45)}
.prod-card__img{height:174px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.prod-card__img::after{content:'';position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(transparent,rgba(0,0,0,.4))}
.prod-tag{position:absolute;top:12px;left:12px;font-size:.67rem;font-weight:700;padding:4px 11px;border-radius:100px;letter-spacing:.03em;z-index:1}
.prod-tag--blue{background:linear-gradient(135deg,var(--blue),var(--blue-d));color:#fff}
.prod-tag--green{background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff}
.prod-tag--amber{background:linear-gradient(135deg,var(--amber),#d97706);color:#fff}
.prod-card__body{padding:18px}
.prod-card__brand{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--blue-l);margin-bottom:3px}
.prod-card__name{font-family:'Syne',sans-serif;font-weight:700;font-size:.88rem;color:var(--txt);margin-bottom:3px;letter-spacing:-.01em}
.prod-card__meta{font-size:.74rem;color:var(--txt2);margin-bottom:12px}
.prod-card__price{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;color:var(--blue-l);margin-bottom:12px}
.prod-card__price span{font-size:.68rem;font-weight:500;color:var(--txt3);font-family:'Manrope',sans-serif}
.btn-detail{width:100%;background:rgba(59,130,246,.08);border:1px solid rgba(59,130,246,.18);color:var(--blue-l);padding:9px;border-radius:10px;font-family:'Manrope',sans-serif;font-weight:700;font-size:.8rem;cursor:pointer;transition:all .2s}
.btn-detail:hover{background:rgba(59,130,246,.16);border-color:rgba(59,130,246,.35)}

/* ── WHY ── */
.why-section{background:rgba(9,16,33,.7);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.why-card{text-align:center;padding:4px}
.why-card__icon{width:56px;height:56px;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.18);border-radius:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;color:var(--blue-l)}
.why-card__title{font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;color:var(--txt);margin-bottom:8px}
.why-card__desc{font-size:.8rem;color:var(--txt2);line-height:1.55}

/* ── CTA SECTION ── */
.cta-section{padding:96px 0;position:relative;overflow:hidden}
.cta-section__glow{position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 50% 50%,rgba(59,130,246,.09) 0%,transparent 65%)}
.cta-section__title{font-family:'Syne',sans-serif;font-size:clamp(2rem,4.5vw,3rem);font-weight:800;color:#f0f6ff;letter-spacing:-.035em;margin-bottom:14px}
.cta-section__sub{font-size:.97rem;color:var(--txt2);line-height:1.7;margin-bottom:36px}
.cta-section__btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:28px}
.cta-section__info{display:flex;justify-content:center;gap:24px;flex-wrap:wrap}
.cta-section__info span{display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--txt3);font-weight:500}
.cta-section__info svg{color:var(--txt3)}

/* ── FOOTER ── */
.footer{background:rgba(4,7,14,.95);border-top:1px solid var(--border);padding:44px 0 0}
.footer__inner{display:flex;justify-content:space-between;align-items:flex-start;gap:40px;padding-bottom:32px;flex-wrap:wrap}
.footer__left{display:flex;flex-direction:column;gap:10px}
.footer__copy{font-size:.82rem;color:var(--txt3);line-height:1.6;max-width:280px;margin-top:4px}
.footer__links{display:flex;flex-wrap:wrap;gap:8px 24px;padding-top:4px}
.footer__links a{font-size:.82rem;color:var(--txt3);text-decoration:none;transition:color .2s;font-weight:500}
.footer__links a:hover{color:var(--txt2)}
.footer__bottom{border-top:1px solid var(--border);padding:16px 24px;text-align:center;font-size:.75rem;color:var(--txt3)}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .prod-grid{grid-template-columns:repeat(2,1fr)}
  .hero__layout{grid-template-columns:1fr;text-align:center}
  .hero__left{align-items:center}
  .hero__sub{text-align:center}
  .hero__right{display:none}
  .trust-row{justify-content:center}
  .sec-sub{margin-left:auto;margin-right:auto}
}
@media(max-width:768px){
  .nav__links,.nav__wa{display:none}
  .hamburger{display:flex}
  .cat-grid{grid-template-columns:repeat(2,1fr)}
  .brand-grid{grid-template-columns:repeat(2,1fr)}
  .prod-grid{grid-template-columns:1fr}
  .why-grid{grid-template-columns:repeat(2,1fr)}
  .sec-header{flex-direction:column;align-items:flex-start}
  .footer__inner{flex-direction:column}
}
@media(max-width:480px){
  .hero__ctas{flex-direction:column;width:100%}
  .hero__ctas .btn{justify-content:center}
  .cta-section__btns{flex-direction:column;align-items:center}
}
`