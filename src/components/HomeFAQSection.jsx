const faqs = [
  {
    question: "Berapa biaya service AC di Purwokerto?",
    answer: "Biaya service menyesuaikan jenis kerusakan dan kebutuhan sparepart. Estimasi diberikan sebelum pengerjaan dimulai.",
  },
  {
    question: "Apakah melayani area Banyumas?",
    answer: "Kami melayani Purwokerto dan berbagai area Banyumas seperti Sokaraja, Ajibarang, Patikraja, Kembaran, dan sekitarnya.",
  },
  {
    question: "Apakah bisa panggilan di hari yang sama?",
    answer: "Selama slot teknisi tersedia, kami dapat melayani panggilan di hari yang sama untuk area tertentu.",
  },
  {
    question: "Berapa lama pengerjaan service AC?",
    answer: "Rata-rata pengerjaan sekitar 30–90 menit tergantung kondisi unit dan jenis layanan.",
  },
  {
    question: "Apakah tersedia layanan instalasi dan cuci AC?",
    answer: "Ya. Kami melayani service AC, cuci AC, instalasi AC, bongkar pasang, dan maintenance AC.",
  },
]

export default function HomeFAQSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">Pertanyaan yang Sering Ditanyakan</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FAQ Layanan AC
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Jawaban singkat untuk pertanyaan umum tentang layanan AC di Purwokerto dan Banyumas.
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