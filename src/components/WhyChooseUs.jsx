export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            WHY CHOOSE US
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-7">
            Teknisi Profesional
            <br />
            Dengan Standar Premium
          </h2>

          <p className="text-white/65 text-lg leading-relaxed">
            Kami mengutamakan kualitas pengerjaan,
            kerapihan instalasi, serta pelayanan cepat
            untuk memastikan kenyamanan pelanggan.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            "Pengerjaan Rapi",
            "Fast Response",
            "Teknisi Bersertifikat",
            "Garansi Pekerjaan",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-[28px] p-6"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
