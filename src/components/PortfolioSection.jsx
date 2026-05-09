import { PORTFOLIO_IMAGES } from "../utils/imageUtils"

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-slate-950/70">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Portfolio Instalasi AC Lokal
        </h2>

        <p className="text-white/60 max-w-3xl mx-auto">
          Proyek instalasi AC nyata di Purwokerto & Banyumas, menampilkan pekerjaan rumah, kantor, dan service lokal oleh tim teknisi Radja AC.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {PORTFOLIO_IMAGES.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.2)]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[260px] object-cover"
              loading="lazy"
              decoding="async"
              width={400}
              height={260}
            />
            {item.caption && (
              <p className="px-5 py-4 text-sm text-slate-400 bg-slate-950/80">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
