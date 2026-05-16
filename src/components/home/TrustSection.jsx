import { BadgeCheck, ShieldCheck } from "lucide-react"

const CERTIFICATES = [
  {
    brand: "Daikin",
    image: "/assets/brands/daikin/sertificate-daikin.webp",
  },
  {
    brand: "Midea",
    image: "/assets/brands/midea/sertificate-midea.webp",
  },
  {
    brand: "Hisense",
    image: "/assets/brands/hisense/sertifikat-hisense.webp",
  },
  {
    brand: "Sansui",
    image: "/assets/brands/sansui/sertificate-sansui.webp",
  },
]

export default function TrustSection() {
  return (
    <section className="pb-8 pt-1">
      <div className="mx-auto mb-4 max-w-3xl text-center">
        <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-cyan-300">
          BUKTI KEPERCAYAAN
        </p>

        <h2 className="text-2xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
          Sertifikat Dealer Resmi
        </h2>
      </div>

      <div className="rounded-[26px] border border-cyan-300/15 bg-white/[0.035] p-4 shadow-[0_0_50px_rgba(34,211,238,0.08)] sm:p-6">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-[22px] border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_32px_rgba(34,211,238,0.12)]">
            <ShieldCheck className="h-7 w-7" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
          {CERTIFICATES.map((item) => (
            <figure key={item.brand} className="text-center">
              <div className="rounded-[16px] border border-white/10 bg-slate-950/55 p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <img
                  src={item.image}
                  alt={`Sertifikat dealer resmi ${item.brand}`}
                  loading="lazy"
                  decoding="async"
                  className="h-[96px] w-full rounded-[12px] object-contain object-center sm:h-[112px]"
                />
              </div>
              <figcaption className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-white sm:text-base">
                <BadgeCheck className="h-4 w-4 shrink-0 text-cyan-300 sm:h-4.5 sm:w-4.5" />
                {item.brand}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
