export default function LocationSection() {
  return (
    <section className="px-6 py-20 bg-slate-950/80">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
          Lokasi Bisnis Lokal
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Hadir di Purwokerto dengan layanan AC siap kunjung
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          RADJA AC melayani wilayah Purwokerto, Banyumas, Sokaraja, Ajibarang, dan sekitarnya. Kunjungi lokasi toko atau dapatkan layanan panggilan teknisi langsung ke alamat Anda.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-3">Alamat</p>
            <p className="text-white font-semibold">Purwokerto, Banyumas</p>
            <p className="text-slate-400 text-sm mt-2">Dekat pusat kota, mudah dijangkau untuk konsultasi dan service cepat.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-3">Buka</p>
            <p className="text-white font-semibold">Senin - Minggu</p>
            <p className="text-slate-400 text-sm mt-2">08:00 - 20:00 WIB</p>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/nTa8EJHZSiQMaofDA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka lokasi Radja AC di Google Maps"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-white/5 px-7 py-4 text-sm font-semibold text-cyan-200 transition hover:bg-white/10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Buka di Google Maps
        </a>
      </div>
    </section>
  )
}
