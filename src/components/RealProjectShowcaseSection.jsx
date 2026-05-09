import { Link } from "react-router-dom"
import SectionHeading from "./ui/SectionHeading"

const realProjects = [
  {
    name: "Instalasi Daikin Rumah Purwokerto Selatan",
    area: "Purwokerto Selatan",
    brand: "Daikin",
    room: "Ruang Keluarga",
    description: "Pemasangan AC Daikin inverter untuk rumah keluarga, dengan instalasi rapi dan finishing kabel tersembunyi.",
    status: "Selesai",
    badges: ["Rumah", "Inverter"],
  },
  {
    name: "Pemasangan AC Gree Kantor Banyumas",
    area: "Banyumas",
    brand: "Gree",
    room: "Kantor",
    description: "Unit Gree low watt dipasang untuk ruang kantor yang butuh pendinginan nyaman tanpa lonjakan tagihan listrik.",
    status: "Selesai",
    badges: ["Kantor", "Low Watt"],
  },
  {
    name: "Instalasi Low Watt Sokaraja",
    area: "Sokaraja",
    brand: "LG",
    room: "Kamar Tidur",
    description: "Instalasi AC low watt di rumah Sokaraja dengan rekomendasi kapasitas PK sesuai ukuran ruangan.",
    status: "Selesai",
    badges: ["Rumah", "Low Watt"],
  },
  {
    name: "AC Inverter Ruang Meeting Purwokerto",
    area: "Purwokerto Timur",
    brand: "Panasonic",
    room: "Ruang Meeting",
    description: "Pemasangan AC inverter untuk ruang meeting agar udara tetap sejuk selama rapat dan presentasi bisnis.",
    status: "Selesai",
    badges: ["Inverter", "Kantor"],
  },
]

export default function RealProjectShowcaseSection() {
  return (
    <section id="project-showcase" className="py-16 bg-slate-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-3xl mb-10">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-4">
            Project instalasi AC nyata
          </div>
          <SectionHeading className="text-4xl md:text-5xl font-black tracking-[-0.03em]">
            Real Project Showcase
          </SectionHeading>
          <p className="text-white/70 text-lg leading-relaxed">
            Contoh pekerjaan instalasi AC nyata di Purwokerto, Banyumas, Sokaraja, dan Baturraden yang menunjukkan kualitas teknisi lokal kami.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-2">
          {realProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_22px_45px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80 font-semibold mb-2">
                    {project.brand}
                  </p>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {project.name}
                  </h3>
                </div>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300 border border-white/10">
                  {project.status}
                </span>
              </div>

              <p className="text-white/70 leading-relaxed mb-5 text-sm">
                {project.description}
              </p>

              <div className="space-y-2 text-sm text-slate-400 mb-5">
                <div>
                  <span className="font-semibold text-white">Area:</span> {project.area}
                </div>
                <div>
                  <span className="font-semibold text-white">Ruangan:</span> {project.room}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/kontak"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Konsultasi AC Purwokerto & Banyumas
          </Link>
        </div>
      </div>
    </section>
  )
}
