const MURI_IMAGE = "/assets/brands/gree/rekor-muri-gree.webp"

const certificates = [
  {
    brand: "Daikin",
    image: "/assets/brands/daikin/sertificate-daikin.webp",
    alt: "Sertifikat resmi Daikin untuk RADJA AC",
  },
  {
    brand: "Midea",
    image: "/assets/brands/midea/sertificate-midea.webp",
    alt: "Sertifikat resmi Midea untuk CV Prima Sedaya",
  },
  {
    brand: "Hisense",
    image: "/assets/brands/hisense/sertifikat-hisense.webp",
    alt: "Sertifikat resmi Hisense untuk CV Prima Sedaya",
  },
  {
    brand: "Sansui",
    image: "/assets/brands/sansui/sertificate-sansui.webp",
    alt: "Sertifikat resmi Sansui untuk CV Prima Sedaya",
  },
]

export default function AboutCredentials() {
  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Bukti Kepercayaan
        </p>
        <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          Bukti Kepercayaan &amp; Pencapaian
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          Kepercayaan pelanggan tidak hanya dibangun dari layanan, tapi juga dari kemitraan resmi dan pencapaian yang bisa dibuktikan.
        </p>
      </div>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-[34px] border border-cyan-300/20 bg-slate-950/70 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
        <div className="p-3 sm:p-5 lg:p-6">
          <div className="mx-auto max-w-[560px] overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-2">
            <img
              src={MURI_IMAGE}
              alt="Rekor MURI bersama Gree"
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>
        </div>

        <div className="border-t border-white/10 bg-slate-950/55 px-5 py-6 text-center sm:px-8">
          <h3 className="mb-3 text-2xl font-black tracking-[-0.02em] text-white">
            Rekor MURI bersama Gree
          </h3>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            RADJA AC menjadi bagian dari pencapaian Rekor MURI bersama Gree melalui performa penjualan dan dukungan brand partner.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="mb-5 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-cyan-300/30 sm:w-12" />
          <h3 className="text-lg font-black tracking-[-0.02em] text-white sm:text-2xl">
            Sertifikasi Dealer Resmi
          </h3>
          <span className="h-px w-10 bg-cyan-300/30 sm:w-12" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {certificates.map((item) => (
            <article
              key={item.brand}
              className="rounded-[22px] border border-white/10 bg-white/[0.035] p-2 text-center shadow-[0_18px_40px_rgba(2,8,23,0.2)] sm:rounded-[28px] sm:p-3"
            >
              <div className="overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/60 sm:rounded-[22px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-[108px] w-full object-cover sm:h-[190px]"
                />
              </div>
              <h4 className="mt-3 pb-1 text-base font-black tracking-[-0.02em] text-white sm:mt-4 sm:text-xl">
                {item.brand}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
