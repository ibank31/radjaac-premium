import { Link } from "react-router-dom"

const internalLinks = [
  {
    title: "Service AC Purwokerto",
    desc: "Perbaikan AC tidak dingin, bocor, mati total dengan teknisi profesional dan bergaransi.",
    link: "/service-ac-purwokerto",
    anchorText: "service AC Purwokerto",
  },
  {
    title: "Cuci AC Murah",
    desc: "Layanan cuci AC berkala untuk performa optimal dan udara sehat di rumah Anda.",
    link: "/cuci-ac-purwokerto",
    anchorText: "cuci AC murah",
  },
  {
    title: "Instalasi AC Banyumas",
    desc: "Pemasangan AC baru dengan kualitas terbaik dan pengerjaan rapi oleh ahli.",
    link: "/instalasi-ac-banyumas",
    anchorText: "instalasi AC Banyumas",
  },
  {
    title: "AC Inverter Purwokerto",
    desc: "Solusi AC inverter hemat listrik untuk rumah, kantor, dan bisnis lokal di Purwokerto & Banyumas.",
    link: "/ac-inverter-purwokerto",
    anchorText: "AC inverter Purwokerto",
  },
  {
    title: "Isi Freon AC",
    desc: "Layanan isi freon AC untuk AC dingin kembali maksimal dengan freon berkualitas.",
    link: "/isi-freon-ac",
    anchorText: "isi freon AC",
  },
  {
    title: "Service AC Daikin",
    desc: "Perbaikan dan perawatan AC Daikin dengan sparepart original dan teknisi ahli.",
    link: "/ac-daikin-tidak-dingin",
    anchorText: "service AC Daikin",
  },
  {
    title: "Service AC LG",
    desc: "Layanan lengkap untuk AC LG dengan garansi resmi dan teknisi bersertifikat.",
    link: "/service-ac-lg",
    anchorText: "service AC LG",
  },
  {
    title: "Portfolio Pekerjaan",
    desc: "Lihat hasil pekerjaan kami dalam service dan instalasi AC di berbagai lokasi.",
    link: "/portfolio",
    anchorText: "lihat portfolio AC",
  },
  {
    title: "Kontak & Lokasi",
    desc: "Hubungi kami untuk konsultasi gratis atau kunjungi lokasi toko di Purwokerto.",
    link: "/kontak",
    anchorText: "kontak Radja AC",
  },
  {
    title: "Service AC Sokaraja",
    desc: "Layanan service AC profesional di Sokaraja dengan response time cepat.",
    link: "/service-ac-sokaraja",
    anchorText: "service AC Sokaraja",
  },
]

export default function InternalLinksSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Layanan Lengkap AC
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Temukan Solusi AC yang Anda Butuhkan
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Dari service rutin hingga perbaikan darurat, kami siap membantu
            semua kebutuhan AC Anda di Purwokerto, Banyumas, dan sekitarnya.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {internalLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-5">
                {item.desc}
              </p>

              <span className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">
                Pelajari {item.anchorText} →
              </span>
            </Link>
          ))}
        </div>

        {/* Additional contextual links */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Butuh bantuan segera? <Link to="/kontak" className="text-cyan-300 hover:text-cyan-200 font-medium">Hubungi teknisi kami</Link> atau
            <Link to="/cuci-ac-purwokerto" className="text-cyan-300 hover:text-cyan-200 font-medium ml-1">jadwalkan service AC</Link> sekarang juga.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/tentang-kami" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Tentang Kami
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/portfolio" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Portfolio
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/service-ac-purwokerto" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Service Area
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}