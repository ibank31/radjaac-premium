import { WHY_CHOOSE_ITEMS } from "../../data/home/whyChooseItems";

export default function WhyChooseSection() {
  return (
    <section className="pb-20">
      <div className="text-center mb-12">
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
          KENAPA BANYAK ORANG
        </p>

        <h2 className="text-3xl sm:text-4xl font-black leading-tight">
          Kenapa Banyak Orang Konsultasi Dulu Sebelum Beli AC?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
          Karena salah pilih AC itu bisa bikin ruangan lama dingin, listrik terasa berat, atau pemasangan jadi ribet. RADJA AC bantu cek dari awal supaya pilihan unit lebih masuk akal.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {WHY_CHOOSE_ITEMS.map((item) => {
          const IconComponent = item.Icon;

          return (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-[#0A1930] transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-6">
                <IconComponent className="w-7 h-7 text-cyan-300" />
              </div>

              <h3 className="text-lg font-bold leading-snug mb-3">{item.title}</h3>

              <p className="text-white/55 text-sm leading-7">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}