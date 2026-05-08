import { Link } from "react-router-dom"

const services = [
  {
    title: "Service AC Purwokerto",
    desc: "Perbaikan AC tidak dingin, bocor, mati total, dan berbagai masalah lainnya.",
    link: "/service-ac-purwokerto",
  },
  {
    title: "Cuci AC Purwokerto",
    desc: "Pembersihan AC rutin untuk menjaga performa dan kualitas udara tetap optimal.",
    link: "/cuci-ac-purwokerto",
  },
  {
    title: "Instalasi AC Banyumas",
    desc: "Pemasangan AC rumah, kantor, cafe, dan tempat usaha dengan pengerjaan rapi.",
    link: "/instalasi-ac-banyumas",
  },
]

export default function InternalLinksSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Layanan Utama
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solusi Lengkap Kebutuhan AC
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Radja AC melayani berbagai kebutuhan service,
            perawatan, dan instalasi AC untuk area Purwokerto
            dan Banyumas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-5">
                {item.desc}
              </p>

              <span className="text-cyan-300 font-medium">
                Lihat Halaman →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}