const faqs = [
  {
    question: "Berapa lama cuci AC biasanya selesai?",
    answer:
      "Rata-rata 30–60 menit untuk satu unit AC split, tergantung tingkat kekotoran dan kondisi unit.",
  },
  {
    question: "Apa saja yang termasuk dalam layanan cuci AC?",
    answer:
      "Pembersihan indoor, pengecekan filter, pembersihan outdoor unit, dan verifikasi saluran drainase.",
  },
  {
    question: "Apakah cuci AC dapat mengurangi bau dan jamur?",
    answer:
      "Ya. Membersihkan evaporator dan filter membantu menghilangkan sumber bau dan pertumbuhan jamur.",
  },
  {
    question: "Apakah ada garansi setelah cuci AC?",
    answer:
      "Kami menjamin layanan rapi dan aman. Jika masalah muncul kembali, teknisi siap menindaklanjuti.",
  },
  {
    question: "Apakah harga bisa berubah setelah inspeksi?",
    answer:
      "Estimasi awal diberikan terlebih dahulu. Jika ada kebutuhan tambahan, teknisi akan menjelaskan sebelum melanjutkan.",
  },
]

export default function CuciACFAQSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">FAQ</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Jawaban singkat untuk pertanyaan umum tentang layanan cuci AC kami.
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