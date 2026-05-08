const pricingItems = [
  {
    title: "Cuci AC",
    price: "Mulai Rp75.000",
    desc: "Pembersihan indoor dan pengecekan dasar unit AC.",
  },
  {
    title: "Service AC Ringan",
    price: "Mulai Rp100.000",
    desc: "Pengecekan AC tidak dingin, bocor, atau performa menurun.",
  },
  {
    title: "Isi Freon",
    price: "Menyesuaikan PK",
    desc: "Estimasi harga tergantung jenis freon dan kapasitas AC.",
  },
]

export default function PricingPreviewSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Estimasi Harga
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparan Sejak Awal
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Berikut estimasi harga layanan umum Radja AC.
            Harga final menyesuaikan kondisi unit dan kebutuhan perbaikan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-2xl font-bold text-cyan-300 mb-4">
                {item.price}
              </p>

              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}