const faqs = [
  {
    question: "Berapa bulan sekali AC perlu dicuci?",
    answer:
      "Idealnya setiap 3–4 bulan sekali tergantung penggunaan dan kondisi lingkungan.",
  },
  {
    question: "Apakah AC yang jarang dipakai tetap perlu dicuci?",
    answer:
      "Tetap perlu. Debu dan kelembaban bisa menumpuk di bagian indoor maupun filter AC.",
  },
  {
    question: "Berapa lama proses cuci AC?",
    answer:
      "Rata-rata sekitar 30–60 menit tergantung kondisi unit dan tingkat kekotoran.",
  },
  {
    question: "Apakah bisa panggilan ke rumah?",
    answer:
      "Ya, Radja AC melayani cuci AC panggilan untuk rumah, kantor, toko, dan tempat usaha.",
  },
]

export default function CuciACFAQSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Beberapa pertanyaan umum mengenai layanan cuci AC
            di Purwokerto dan Banyumas.
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

              <p className="text-slate-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}