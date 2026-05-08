const pricing = [
  {
    title: "Cuci AC Split",
    price: "Mulai Rp75.000",
    desc: "Termasuk cuci indoor, ganti filter, dan pengecekan saluran pembuangan.",
  },
  {
    title: "Cuci AC + Outdoor",
    price: "Mulai Rp110.000",
    desc: "Pembersihan lengkap indoor dan outdoor untuk unit AC split, agar performa kembali optimal.",
  },
  {
    title: "Cuci AC Kantor / Komersial",
    price: "Estimasi Custom",
    desc: "Paket layanan multi-unit untuk kantor, toko, cafe, dan tempat usaha dengan harga terjangkau.",
  },
]

export default function CuciACPricingSection() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">Estimasi Harga</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Harga Cuci AC Transparan
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Paket harga cuci AC yang jelas untuk rumah dan usaha di Purwokerto
            dan Banyumas. Estimasi awal diberikan sebelum teknisi mulai kerja.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((item, index) => (
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