export default function AboutTrustSection() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        
        <div>
          <p className="text-cyan-300 font-medium mb-3">
            Tentang Radja AC
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Service AC Lokal
            yang Fokus pada
            Kepuasan Pelanggan
          </h2>

          <p className="text-slate-400 leading-relaxed mb-5">
            Radja AC hadir untuk membantu kebutuhan service AC rumah,
            kantor, dan tempat usaha di Purwokerto dan sekitarnya.
            Kami fokus pada pengerjaan yang rapi, respon cepat,
            dan komunikasi yang jelas kepada pelanggan.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Mulai dari AC tidak dingin, bocor, hingga perawatan rutin,
            kami berusaha memberikan solusi yang aman,
            transparan, dan nyaman untuk pelanggan lokal.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-cyan-300 mb-2">
              500+
            </h3>

            <p className="text-slate-300">
              Unit AC telah ditangani di area Purwokerto & Banyumas
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-cyan-300 mb-2">
              Fast Response
            </h3>

            <p className="text-slate-300">
              Respon WhatsApp cepat untuk kebutuhan service mendesak
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-cyan-300 mb-2">
              Area Lokal
            </h3>

            <p className="text-slate-300">
              Fokus melayani Purwokerto, Sokaraja, Banyumas,
              Ajibarang, dan sekitarnya
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}