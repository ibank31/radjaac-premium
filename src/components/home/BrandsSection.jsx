import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight } from "lucide-react"
import { BRAND_ITEMS } from "../../data/home/brandItems"

const OTHER_BRAND_ROWS = [
  ["Panasonic", "Mitsubishi", "Changhong"],
  ["Samsung", "Polytron", "Toshiba"],
  ["Sharp", "Ariston", "Aqua"],
  ["TCL", "LG"],
]

const getLogoClassName = (brandName) => {
  const baseClass = "object-contain opacity-95 group-hover:opacity-100 transition"

  const logoSizes = {
    Daikin: "max-h-[34px] max-w-[150px] sm:max-h-[38px] sm:max-w-[165px]",
    Gree: "max-h-[34px] max-w-[150px] sm:max-h-[38px] sm:max-w-[165px]",
    Midea: "max-h-[40px] max-w-[150px] sm:max-h-[44px] sm:max-w-[165px]",
    Hisense: "max-h-[38px] max-w-[150px] sm:max-h-[42px] sm:max-w-[165px]",
    Sansui: "max-h-[34px] max-w-[150px] sm:max-h-[38px] sm:max-w-[165px]",
  }

  return `${baseClass} ${logoSizes[brandName] || "max-h-[38px] max-w-[150px] sm:max-h-[42px] sm:max-w-[165px]"}`
}

export default function BrandsSection() {
  return (
    <section className="pb-16" id="brand-lainnya">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
            BRAND TERSEDIA
          </p>

          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Brand AC Pilihan RADJA AC
          </h2>
        </div>

        <a
          href="#brand-lainnya"
          className="hidden sm:inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold hover:text-cyan-200 transition"
        >
          Lihat Brand Lainnya
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-7 mb-7">
        RADJA AC menyediakan AC original berbagai brand resmi. Brand unggulan
        berikut sudah tersedia sebagai halaman khusus untuk memudahkan Anda
        membandingkan pilihan.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {BRAND_ITEMS.map((brand) => (
          <Link
            key={brand.name}
            to={brand.href}
            className={`group rounded-[24px] border border-white/10 bg-white/[0.03] hover:bg-[#0A1930] transition-all duration-300 p-4 sm:p-5 flex flex-col items-center text-center ${
              brand.name === "Sansui" ? "col-span-2 mx-auto w-[calc(50%-0.5rem)] md:col-span-1 md:w-auto" : ""
            }`}
            aria-label={`Lihat brand ${brand.name}`}
          >
            <div className="h-[72px] sm:h-[78px] flex items-center justify-center mb-3 w-full">
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className={getLogoClassName(brand.name)}
              />
            </div>

            <p className="text-white/50 text-xs sm:text-sm leading-5 mb-4 min-h-[40px] flex items-center justify-center">
              {brand.tagline}
            </p>

            <div className="flex items-center justify-center gap-2 text-cyan-300 text-xs sm:text-sm font-semibold">
              Lihat Brand
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.24em] text-xs mb-2">
              BRAND LAINNYA
            </p>
            <h3 className="text-xl font-black text-white">Tersedia juga brand populer lainnya</h3>
          </div>
          <p className="text-sm text-white/55 sm:text-right">
            Cek stok dan rekomendasi via WhatsApp.
          </p>
        </div>

        <div className="space-y-2.5">
          {OTHER_BRAND_ROWS.map((row) => (
            <div key={row.join("-")} className="flex flex-wrap justify-center gap-2">
              {row.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-white/10 bg-slate-950/40 px-3.5 py-1.5 text-sm text-white/70"
                >
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
