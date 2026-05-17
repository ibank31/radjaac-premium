import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

const portfolioItems = [
  {
    title: "Masukkan foto cuci AC rumah",
    label: "Cuci AC Rumah",
  },
  {
    title: "Masukkan foto instalasi AC split",
    label: "Instalasi AC Split",
  },
  {
    title: "Masukkan foto service outdoor AC",
    label: "Service Outdoor AC",
  },
  {
    title: "Masukkan foto teknisi saat pengerjaan",
    label: "Teknisi Saat Kerja",
  },
  {
    title: "Tambahkan foto before-after evaporator",
    label: "Before-After Evaporator",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Portfolio | Radja AC Purwokerto"
        description="Lihat portofolio layanan AC Radja AC. Tambahkan foto cuci AC rumah, instalasi AC split, service outdoor, teknisi bekerja, dan before-after evaporator."
        canonicalPath="/portfolio"
        robots="noindex,follow"
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <section className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 md:p-12 shadow-[0_24px_80px_rgba(8,20,47,0.55)] mb-12">
          <p className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 font-medium mb-4">
            Portfolio Radja AC
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-[-0.04em] mb-6 text-white">
            Contoh visual project layanan AC dalam gaya premium dan profesional.
          </h1>
          <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
            Galeri dokumentasi RADJA AC menampilkan pekerjaan instalasi, perawatan, service outdoor, dan hasil before-after sebagai gambaran kualitas layanan di lapangan.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.label} className="group rounded-[30px] border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/20">
              <div className="h-72 rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center text-center p-6 text-slate-400">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Placeholder Foto</p>
                  <h2 className="text-xl font-semibold text-white mb-2">{item.label}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.title}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Masukkan gambar berkualitas untuk memperkuat kredibilitas proyek dan menampilkan hasil layanan profesional Radja AC.
                </p>
                <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-cyan-200">Ganti placeholder dengan foto sesungguhnya</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
