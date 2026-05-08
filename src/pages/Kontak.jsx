import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

export default function Kontak() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Kontak | Radja AC Purwokerto"
        description="Hubungi Radja AC melalui WhatsApp, lihat jam operasional, area layanan, dan rencanakan kunjungan service AC Anda di Purwokerto dan Banyumas."
        canonicalPath="/kontak"
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <section className="rounded-[28px] sm:rounded-[32px] border border-white/10 bg-slate-950/70 p-5 sm:p-8 md:p-12 shadow-[0_24px_80px_rgba(8,20,47,0.55)] overflow-hidden">
          <p className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 font-medium mb-4">
            Kontak Radja AC
          </p>

          <h1 className="text-4xl md:text-5xl font-black tracking-[-0.04em] mb-6 text-white">
            Siap membantu semua kebutuhan AC Anda dengan dukungan layanan cepat dan profesional.
          </h1>

          <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10">
            Hubungi kami untuk konsultasi WhatsApp, jadwal service, atau permintaan pemasangan AC. Tim Radja AC siap melayani area Purwokerto dan Banyumas dengan layanan bergaransi.
          </p>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 sm:space-y-8">

              {/* WhatsApp Contact */}
              <section className="rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-slate-900/90 p-5 sm:p-8 shadow-[0_0_60px_rgba(14,116,144,0.16)]">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  WhatsApp Contact
                </h2>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Gunakan WhatsApp untuk pertanyaan harga, jadwal kunjungan, dan estimasi pengerjaan. Respon cepat tersedia selama jam operasional.
                </p>

                <a
                  href="https://wa.me/62882008246099"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl sm:rounded-full bg-[#25D366] px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </span>

                  Chat WhatsApp: 0882-0082-46099
                </a>
              </section>

              {/* Jam Operasional */}
              <section className="rounded-[28px] sm:rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Jam Operasional
                </h2>

                <div className="grid gap-4 text-slate-300 text-sm leading-relaxed">
                  {[
                    { label: "Senin - Jumat", value: "08:00 - 18:00" },
                    { label: "Sabtu", value: "08:00 - 15:00" },
                    { label: "Minggu", value: "Libur / Hanya Darurat" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-5"
                    >
                      <p className="text-white font-medium">
                        {item.label}
                      </p>

                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Area Layanan */}
              <section className="rounded-[28px] sm:rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Area Layanan
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200">
                  {[
                    "Purwokerto",
                    "Banyumas",
                    "Sokaraja",
                    "Ajibarang",
                    "Purbalingga",
                    "Cilacap",
                  ].map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Side */}
            <aside className="rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-500/10 p-5 sm:p-8 shadow-[0_30px_80px_rgba(8,20,47,0.65)] flex flex-col justify-between gap-6 sm:gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Tempatkan Google Maps bisnis di section ini
                </h2>

                <p className="text-slate-300 leading-relaxed mb-8">
                  Placeholder untuk peta lokasi Radja AC. Ganti dengan embed Google Maps saat siap menampilkan lokasi kantor atau service area.
                </p>

                <div className="h-72 rounded-[24px] sm:rounded-[28px] border border-white/10 bg-slate-950/70 p-6 flex items-center justify-center text-center text-slate-400">
                  <div>
                    <p className="font-semibold text-white mb-2">
                      Peta Lokasi
                    </p>

                    <p>
                      Tempatkan Google Maps bisnis di section ini
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-slate-950/80 p-5 sm:p-8 shadow-[0_0_60px_rgba(14,116,144,0.18)]">
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-3">
                  Butuh Bantuan Segera?
                </p>

                <h3 className="text-white text-2xl font-bold mb-4">
                  Konsultasi WhatsApp untuk jadwal dan estimasi
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Hubungi kami melalui WhatsApp untuk konfirmasi jadwal layanan AC dan estimasi biaya yang cepat.
                </p>

                <a
                  href="https://wa.me/62882008246099"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl sm:rounded-full bg-[#25D366] px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </span>

                  Chat WhatsApp Sekarang
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