import { motion } from "framer-motion";
import { AirVent, Wrench, Settings, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: AirVent,
      title: "Penjualan AC",
      desc: "Distributor berbagai brand AC premium dengan garansi resmi.",
    },
    {
      icon: Wrench,
      title: "Instalasi AC",
      desc: "Pemasangan profesional, rapi, dan aman.",
    },
    {
      icon: Settings,
      title: "Service AC",
      desc: "Perbaikan cepat untuk AC kurang dingin, bocor, dan error.",
    },
    {
      icon: ShieldCheck,
      title: "Maintenance",
      desc: "Perawatan rutin agar AC tetap optimal dan hemat listrik.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-0">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Layanan Kami
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
          Solusi lengkap kebutuhan pendingin ruangan
          untuk rumah hingga proyek komersial.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {services.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/[0.04] border border-white/10 rounded-[30px] p-6 md:p-7 h-full"
            >
              <div className="text-5xl mb-6 text-cyan-400">
                <IconComponent size={48} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {item.title}
              </h3>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
