import { ArrowRight, ChevronRight } from "lucide-react";
import { BRAND_ITEMS } from "../../data/home/brandItems";

export default function BrandsSection() {
  return (
    <section className="pb-16" id="brand">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
            BRAND TERSEDIA
          </p>

          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Brand Unggulan Pilihan
          </h2>
        </div>

        <a
          href="#produk"
          className="hidden sm:inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold hover:text-cyan-200 transition"
        >
          Lihat Semua Brand
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <p className="text-white/60 max-w-2xl leading-7 mb-8">
        Kami menyediakan brand AC terpercaya dengan garansi resmi distributor
        dan pilihan produk sesuai kebutuhan rumah maupun bisnis.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {BRAND_ITEMS.map((brand, index) => (
          <a
            key={index}
            href="#produk"
            className="group rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-[#0A1930] transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="h-[90px] flex items-center justify-center mb-6">
              <img
                src={brand.logo}
                alt="Brand AC"
                className="max-h-[46px] object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

            <p className="text-white/50 text-sm leading-7 mb-6">
              {brand.tagline}
            </p>

            <div className="flex items-center justify-center gap-2 text-cyan-300 text-sm font-semibold">
              Lihat Produk
              <ChevronRight className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}