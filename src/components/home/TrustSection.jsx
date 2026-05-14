import { Award, BadgeCheck, ShieldCheck, Store, Wrench } from "lucide-react"

const MAIN_TRUST = {
  title: "Sertifikat dealer resmi",
  image: "/assets/brands/daikin/sertificate-daikin.webp",
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

const TRUST_POINTS = [
  {
    title: "Dealer resmi",
    description: "Sertifikat brand tersedia untuk mendukung keaslian produk.",
    icon: ShieldCheck,
  },
  {
    title: "AC original bergaransi",
    description: "Unit bergaransi resmi sesuai ketentuan masing-masing brand.",
    icon: BadgeCheck,
  },
  {
    title: "Showroom & stok produk",
    description: "Pilihan unit bisa dicek dan dikonsultasikan sebelum membeli.",
    icon: Store,
  },
  {
    title: "Bisa bantu instalasi",
    description: "Pembelian unit dapat dilanjutkan dengan pemasangan yang rapi.",
    icon: Wrench,
  },
]

export default function TrustSection() {
  return (
    <section className="pb-12 pt-2">
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
          BUKTI KEPERCAYAAN
        </p>

        <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
          Beli AC lebih tenang dari toko yang jelas & brand resmi
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          RADJA AC menyediakan AC original dari berbagai brand resmi, dengan dukungan sertifikat dealer, stok showroom, dan konsultasi sebelum membeli.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_POINTS.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-black text-white">{title}</h3>
            <p className="text-sm leading-6 text-white/58">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 relative overflow-hidden rounded-[30px] border border-cyan-300/15 bg-white/[0.035] p-3 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:p-5">
        <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <article className="overflow-hidden rounded-[24px] border border-cyan-300/20 bg-slate-950/70 p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
            <div className="relative overflow-hidden rounded-[18px] bg-slate-900">
              <img
                src={MAIN_TRUST.image}
                alt={MAIN_TRUST.title}
                loading="lazy"
                decoding="async"
                className="h-[210px] w-full object-cover object-center sm:h-[260px] lg:h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/62 to-transparent p-4 pt-14">
                <h3 className="text-xl font-black text-white sm:text-2xl">{MAIN_TRUST.title}</h3>
                <p className="mt-1 text-sm text-white/65">Bukti pendukung bahwa RADJA AC melayani penjualan AC brand resmi.</p>
              </div>
            </div>
          </article>

          <div className="rounded-[24px] border border-white/10 bg-slate-950/45 p-3.5 sm:p-4">
            <div className="mb-4 flex flex-col items-center justify-center gap-2.5 text-center sm:flex-row sm:justify-start sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white sm:text-xl">Sertifikat & pencapaian brand</h3>
                <p className="text-sm leading-6 text-white/55">MURI bersama Gree tetap menjadi bukti pendukung, sementara sertifikat dealer menjadi prioritas utama untuk calon pembeli.</p>
              </div>
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
                      className="h-[84px] w-full object-cover object-center sm:h-[112px] lg:h-[124px]"
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
