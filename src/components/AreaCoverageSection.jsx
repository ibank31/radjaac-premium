const areas = [
  "Purwokerto",
  "Sokaraja",
  "Banyumas",
  "Ajibarang",
  "Purbalingga",
  "Patikraja",
  "Karanglewas",
  "Kembaran",
]

export default function AreaCoverageSection() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Area Layanan
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Melayani Purwokerto
            dan Sekitarnya
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Radja AC melayani service, cuci, dan instalasi AC
            untuk rumah, kantor, toko, dan tempat usaha
            di berbagai area Banyumas dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-center text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:text-white hover:-translate-y-1"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}