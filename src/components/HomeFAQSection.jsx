const faqs = [
  {
    question: "Brand AC apa saja yang tersedia di RADJA AC?",
    answer: "Kami menyediakan berbagai brand AC premium seperti Daikin, Gree, Sharp, Panasonic, LG, Midea, Samsung, TCL, Toshiba, Mitsubishi, Aqua, Polytron, Changhong, Hisense, Ariston, dan Sansui.",
  },
  {
    question: "AC berapa PK yang cocok untuk ruangan saya?",
    answer: "Rekomendasi PK AC tergantung luas ruangan dan jumlah penghuni. AC 1 PK untuk ruang 12-15m², 1.5 PK untuk 16-20m², 2 PK untuk 21-25m². Konsultasikan dengan tim kami untuk rekomendasi yang tepat.",
  },
  {
    question: "Apa keunggulan AC inverter?",
    answer: "AC inverter lebih hemat energi karena dapat mengatur kecepatan kompresor sesuai kebutuhan, sehingga suhu ruangan stabil dan tagihan listrik lebih rendah hingga 30-50%.",
  },
  {
    question: "Apakah ada konsultasi sebelum membeli AC?",
    answer: "Ya, kami menyediakan konsultasi gratis untuk membantu Anda memilih AC yang sesuai dengan kebutuhan ruangan, budget, dan efisiensi energi.",
  },
  {
    question: "Apakah RADJA AC melayani instalasi AC?",
    answer: "Ya, kami menyediakan layanan instalasi profesional oleh teknisi bersertifikat untuk memastikan AC berfungsi optimal dan aman.",
  },
]

export default function HomeFAQSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">Pertanyaan tentang Produk AC</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FAQ Pembelian AC
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Jawaban untuk pertanyaan umum tentang brand AC, rekomendasi, dan layanan di RADJA AC Purwokerto.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.question}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}