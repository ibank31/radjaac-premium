const projects = [
  {
    title: "Cuci AC Rumah",
    location: "Purwokerto Timur",
  },
  {
    title: "Service AC Bocor",
    location: "Sokaraja",
  },
  {
    title: "Perawatan AC Kantor",
    location: "Banyumas",
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Dokumentasi Pekerjaan
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hasil Pengerjaan Radja AC
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Beberapa contoh dokumentasi service dan perawatan AC
            pelanggan di area Purwokerto dan Banyumas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <p className="text-slate-500 text-sm">
                  Foto project akan ditampilkan di sini
                </p>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}