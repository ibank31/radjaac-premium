import { BadgeCheck, ShieldCheck } from "lucide-react"

const MAIN_TRUST = {
  title: "Rekor MURI bersama Gree",
  image: "/assets/brands/gree/rekor-muri-gree.webp",
}

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
    <section className="pb-14 pt-1">
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
          BUKTI KEPERCAYAAN
        </p>

        <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
          Sertifikasi & Pencapaian RADJA AC
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/15 bg-white/[0.035] p-3 shadow-[0_0_60px_rgba(34,211,238,0.09)] sm:p-5">
        <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <article className="overflow-hidden rounded-[26px] border border-amber-300/20 bg-slate-950/70 p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="relative overflow-hidden rounded-[20px] bg-slate-900">
              <img
                src={MAIN_TRUST.image}
                alt={MAIN_TRUST.title}
                loading="lazy"
                decoding="async"
                className="h-[370px] w-full object-cover object-center sm:h-[440px] lg:h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/62 to-transparent p-4 pt-14">
                <h3 className="text-xl font-black text-white sm:text-2xl">{MAIN_TRUST.title}</h3>
              </div>
            </div>
          </article>

          <div className="rounded-[26px] border border-white/10 bg-slate-950/45 p-3.5 sm:p-4">
            <div className="mb-4 flex flex-col items-center justify-center gap-2.5 text-center sm:flex-row sm:justify-start sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-white sm:text-xl">Sertifikat Dealer Resmi</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {CERTIFICATES.map((item) => (
                <figure key={item.brand} className="text-center">
                  <div className="overflow-hidden rounded-[16px] border border-white/10 bg-slate-900/40 shadow-[0_12px_28px_rgba(0,0,0,0.20)]">
                    <img
                      src={item.image}
                      alt={`Sertifikat dealer resmi ${item.brand}`}
                      loading="lazy"
                      decoding="async"
                      className="h-[96px] w-full object-cover object-center sm:h-[125px] lg:h-[136px]"
                    />
                  </div>
                  <figcaption className="mt-2.5 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-white">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-cyan-300" />
                    {item.brand}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
