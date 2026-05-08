const signs = [
  {
    title: "AC Kurang Dingin",
    desc: "Debu dan kotoran pada evaporator membuat performa pendinginan menurun.",
  },
  {
    title: "AC Mengeluarkan Bau Tidak Sedap",
    desc: "Kelembaban dan debu dapat memicu jamur serta bau pada unit indoor.",
  },
  {
    title: "Air Menetes dari Indoor",
    desc: "Saluran pembuangan yang kotor bisa menyebabkan AC bocor dan menetes.",
  },
  {
    title: "Angin AC Lemah",
    desc: "Filter dan blower yang kotor membuat aliran udara tidak maksimal.",
  },
]

export default function SignsAcNeedsCleaningSection() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Tanda AC Perlu Dicuci
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jangan Tunggu AC Rusak Total
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Beberapa tanda berikut sering muncul saat AC sudah mulai
            kotor dan membutuhkan pembersihan rutin.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {signs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

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