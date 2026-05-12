import { Award, BadgeCheck, ShieldCheck } from "lucide-react"

const MAIN_TRUST = {
  title: "Rekor MURI bersama Gree",
  description: "RADJA AC menjadi bagian dari pencapaian Rekor MURI bersama Gree melalui performa penjualan dan dukungan brand partner.",
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
    <section className="pb-16 pt-2">
      <div className="mx-auto mb-7 max-w-3xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          BUKTI KEPERCAYAAN
        </p>

        <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
          Sertifikasi & Pencapaian RADJA AC
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Didukung sertifikat dealer resmi multi-brand dan pencapaian Rekor MURI bersama Gree sebagai bukti kepercayaan pelanggan.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/15 bg-white/[0.035] p-4 shadow-[0_0_70px_rgba(34,211,238,0.10)] sm:p-6">
        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <article className="overflow-hidden rounded-[28px] border border-amber-300/20 bg-slate-950/70 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
            <div className="relative overflow-hidden rounded-[22px] bg-slate-900">
              <img
                src={MAIN_TRUST.image}
                alt={MAIN_TRUST.title}
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover object-center sm:h-[430px] lg:h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 pt-16">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-100">
                  <Award className="h-4 w-4" />
                  Pencapaian Brand Partner
                </div>
                <h3 className="mb-2 text-2xl font-black text-white">{MAIN_TRUST.title}</h3>
                <p className="text-sm leading-6 text-white/70">{MAIN_TRUST.description}</p>
              </div>
            </div>
          </article>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/45 p-4 sm:p-5">
            <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Sertifikat Dealer Resmi</h3>
                <p className="text-sm leading-6 text-white/55">Beberapa sertifikasi brand yang memperkuat trust RADJA AC.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CERTIFICATES.map((item) => (
                <figure key={item.brand} className="text-center">
                  <div className="overflow-hidden rounded-[18px] border border-white/10 bg-slate-900/40 shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                    <img
                      src={item.image}
                      alt={`Sertifikat dealer resmi ${item.brand}`}
                      loading="lazy"
                      decoding="async"
                      className="h-[110px] w-full object-cover object-center sm:h-[135px] lg:h-[150px]"
                    />
                  </div>
                  <figcaption className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-bold text-white">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-cyan-300" />
                    {item.brand}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-center sm:justify-start">
              {["Dealer Resmi", "Rekor MURI", "AC Original Multi-Brand"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/65"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
