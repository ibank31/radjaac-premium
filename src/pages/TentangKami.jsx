import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Tentang Kami | Radja AC Purwokerto"
        description="Kenali Radja AC, layanan service, cuci, dan instalasi AC terbaik di Purwokerto dan Banyumas. Profesional, bergaransi, dan siap melayani kebutuhan AC Anda."
        canonicalPath="/tentang-kami"
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <section className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 md:p-12 shadow-[0_24px_80px_rgba(8,20,47,0.55)]">
          <div className="mb-10 max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 font-medium mb-4">
              Tentang Radja AC
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.04em] mb-6 text-white">
              Melayani semua kebutuhan AC dengan layanan cepat, rapi, dan bergaransi.
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
              Radja AC hadir sebagai partner AC terbaik untuk rumah, kantor, dan usaha di Purwokerto serta Banyumas. Dari service, cuci, hingga instalasi, semua dikerjakan oleh teknisi berpengalaman dengan standar profesional.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Profil Singkat Radja AC</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Radja AC adalah layanan AC lokal yang fokus pada kualitas, ketepatan waktu, dan hasil yang dapat dirasakan. Kami melayani service AC, cuci AC, instalasi AC, dan bongkar pasang dengan pendekatan transparan serta solusi yang jelas.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Teknisi Bersertifikat", desc: "Tim terlatih dengan pengalaman menangani semua merek AC." },
                    { title: "Garansi Layanan", desc: "Setiap pengerjaan didukung garansi demi kepercayaan pelanggan." },
                    { title: "Respon Cepat", desc: "Fast response WhatsApp untuk kebutuhan service dan instalasi mendesak." },
                    { title: "Cakupan Luas", desc: "Melayani Purwokerto dan sekitarnya termasuk Banyumas, Sokaraja, dan Ajibarang." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Area Layanan</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Purwokerto",
                    "Banyumas",
                    "Sokaraja",
                    "Ajibarang",
                    "Purbalingga",
                    "Cilacap",
                  ].map((area) => (
                    <div key={area} className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-slate-200">
                      {area}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="rounded-[28px] border border-cyan-400/10 bg-cyan-500/5 p-8 text-white/90">
              <h2 className="text-2xl font-semibold mb-4">Kenapa memilih Radja AC</h2>
              <ul className="space-y-4">
                {[
                  "Teknisi rapi dan profesional dengan pengalaman AC rumah dan kantor.",
                  "Garansi pengerjaan untuk setiap layanan service, cuci, dan instalasi.",
                  "Proses cepat dan aman, dengan komunikasi transparan dari awal sampai selesai.",
                  "Layanan lokal yang paham kebutuhan AC di Purwokerto & Banyumas.",
                ].map((item) => (
                  <li key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
                    <p className="font-medium">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_0_60px_rgba(14,116,144,0.18)]">
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-3">Hubungi Kami</p>
                <h3 className="text-white text-2xl font-bold mb-4">Konsultasi WhatsApp cepat</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Dapatkan jawaban langsung untuk jadwal, estimasi, dan pengecekan AC Anda.
                </p>
                <a
                  href="https://wa.me/62882008246099"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </span>
                  Chat WhatsApp Radja AC
                </a>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
