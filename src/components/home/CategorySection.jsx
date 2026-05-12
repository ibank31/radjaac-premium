import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORY_ITEMS } from "../../data/home/categoryItems";

export default function CategorySection() {
  return (
    <section className="pb-12 pt-4 sm:pt-6">
      <div className="mb-6">
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
          KATEGORI PRODUK
        </p>

        <h2 className="text-[28px] sm:text-4xl font-black leading-tight mb-3 whitespace-nowrap">
          Temukan AC yang Tepat
        </h2>

        <p className="text-white/60 max-w-md text-sm sm:text-base leading-7">
          Pilih berdasarkan kebutuhan ruangan dan anggaran Anda.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {CATEGORY_ITEMS.map((item) => {
          const IconComponent = item.Icon;

          return (
            <Link
              key={item.title}
              to={item.href}
              className="rounded-[24px] border border-cyan-500/10 bg-[#071326] hover:bg-[#0A1930] transition-all duration-300 p-4 sm:p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-4 sm:mb-5">
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>

              <p className="text-white/55 text-xs sm:text-sm leading-6">{item.desc}</p>

              <div className="mt-4 text-cyan-300 flex justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}