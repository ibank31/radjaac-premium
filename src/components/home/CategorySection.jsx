import { ArrowRight } from "lucide-react";
import { CATEGORY_ITEMS } from "../../data/home/categoryItems";

export default function CategorySection() {
  return (
    <section className="pb-14">
      <div className="mb-8">
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
          KATEGORI PRODUK
        </p>

        <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
          Temukan AC
          <span className="block">yang Tepat</span>
        </h2>

        <p className="text-white/60 max-w-md leading-7">
          Pilih berdasarkan kebutuhan ruangan dan anggaran Anda.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {CATEGORY_ITEMS.map((item) => {
          const IconComponent = item.Icon;

          return (
            <div
              key={item.title}
              className="rounded-[28px] border border-cyan-500/10 bg-[#071326] hover:bg-[#0A1930] transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-6">
                <IconComponent className="w-6 h-6 text-cyan-300" />
              </div>

              <h3 className="text-lg font-bold mb-2">{item.title}</h3>

              <p className="text-white/55 text-sm leading-6">{item.desc}</p>

              <div className="mt-5 text-cyan-300 flex justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}