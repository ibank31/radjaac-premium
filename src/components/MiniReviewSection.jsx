const reviews = [
  {
    name: "Andi",
    area: "Purwokerto Timur",
    review:
      "AC kamar jadi dingin lagi. Teknisi datang cepat dan pengerjaannya rapi.",
  },
  {
    name: "Rina",
    area: "Sokaraja",
    review:
      "Awalnya AC bocor terus. Setelah diservice jadi normal lagi dan dijelaskan kerusakannya.",
  },
  {
    name: "Pak Dedi",
    area: "Banyumas",
    review:
      "Respon WhatsApp cepat dan teknisinya sopan. Harga juga masih masuk akal.",
  },
]

export default function MiniReviewSection() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Review Pelanggan
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya Pelanggan
            di Purwokerto & Banyumas
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Beberapa pengalaman pelanggan setelah menggunakan jasa
            service AC Radja AC.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                ★ ★ ★ ★ ★
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                “{item.review}”
              </p>

              <div className="border-t border-slate-800 pt-4">
                <p className="text-white font-semibold">
                  {item.name}
                </p>

                <p className="text-sm text-slate-400">
                  {item.area}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}