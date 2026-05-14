import { Award, BadgeCheck, ShieldCheck, Store, Wrench } from "lucide-react"

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
    icon: ShieldCheck,
  },
  {
    title: "AC original bergaransi",
    icon: BadgeCheck,
  },
  {
    title: "Showroom & stok produk",
    icon: Store,
  },
  {
    title: "Bisa bantu instalasi",
    icon: Wrench,
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
          Beli AC lebih tenang dari toko yang jelas & brand resmi
        </h2>
      </div>

      <div className="rounded-[26px] border border-cyan-300/15 bg-white/[0.035] p-3 shadow-[0_0_50px_rgba(34,211,238,0.08)] sm:p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {TRUST_POINTS.map(({ title, icon: Icon }) => (
            <article key={title} className="flex min-h-[92px] flex-col items-center justify-center rounded-[20px] border border-white/10 bg-slate-950/45 px-3 py-3 text-center">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-black leading-snug text-white">{title}</h3>
            </article>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CERTIFICATES.map((item) => (
            <figure key={item.brand} className="text-center">
              <div className="overflow-hidden rounded-[14px] border border-white/10 bg-slate-900/40 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <img
                  src={item.image}
                  alt={`Sertifikat dealer resmi ${item.brand}`}
                  loading="lazy"
                  decoding="async"
                  className="h-[86px] w-full object-cover object-center sm:h-[96px]"
                />
              </div>
              <figcaption className="mt-1.5 inline-flex items-center justify-center gap-1 text-xs font-bold text-white sm:text-sm">
                <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-cyan-300 sm:h-4 sm:w-4" />
                {item.brand}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-[18px] border border-amber-300/15 bg-amber-300/5 px-3 py-2 text-left">
          <Award className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
          <p className="text-xs leading-5 text-white/62 sm:text-sm">
            Termasuk dokumentasi pencapaian bersama brand seperti Gree/MURI sebagai bukti pendukung.
          </p>
        </div>
      </div>
    </section>
  )
}
