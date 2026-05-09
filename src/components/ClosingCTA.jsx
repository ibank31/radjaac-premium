import WhatsappIcon from "./ui/WhatsappIcon";

export default function ClosingCTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 md:p-14 border border-white/10 shadow-[0_0_60px_rgba(0,180,255,0.18)]">
          {/* content */}
          <div className="relative z-10 text-center">
            {/* mini badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-white/80 mb-6 backdrop-blur-md">
              Konsultasi Gratis • Fast Response
            </div>

            {/* title */}
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
              Butuh AC Untuk
              <br />
              Rumah atau Bisnis?
            </h2>

            {/* desc */}
            <p className="max-w-2xl mx-auto text-white/90 text-base md:text-xl leading-relaxed mb-10">
              Konsultasikan kebutuhan AC Anda bersama tim RADJA AC Purwokerto.
              Melayani penjualan, instalasi, service, maintenance,
              hingga proyek pendingin ruangan skala komersial.
            </p>

            {/* button */}
            <a
              href="https://wa.me/62882008246099"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg px-8 py-5 rounded-full transition duration-300 hover:scale-105 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsappIcon className="w-7 h-7 text-white" />
              </div>

              <div className="text-left">
                <div className="text-sm text-white/80 font-medium">
                  Konsultasi via
                </div>

                <div className="text-xl font-black text-white">
                  WhatsApp
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
