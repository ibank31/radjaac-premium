export default function PrimaryCTASection({
  pretitle = "Ready to Book",
  title = "Butuh bantuan AC cepat?",
  description = "Hubungi tim kami untuk konsultasi, estimasi transparan, dan kunjungan teknisi cepat.",
  buttonLabel = "Chat WhatsApp Sekarang",
  buttonHref = "https://wa.me/62882008246099",
  subText = "Fast response • Area Purwokerto & Banyumas • Garansi pengerjaan",
}) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-500/10 p-10 shadow-[0_0_80px_rgba(14,116,144,0.16)]">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-cyan-200 mb-6">
            {pretitle}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            {title}
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {description}
          </p>

          <a
            href={buttonHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-4 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
            </span>
            {buttonLabel}
          </a>

          <p className="mt-5 text-sm text-slate-400">
            {subText}
          </p>
        </div>
      </div>
    </section>
  )
}
