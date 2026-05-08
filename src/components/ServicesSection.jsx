import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: "❄️",
      title: "Penjualan AC",
      desc: "Distributor berbagai brand AC premium dengan garansi resmi.",
    },
    {
      icon: "🛠️",
      title: "Instalasi AC",
      desc: "Pemasangan profesional, rapi, dan aman.",
    },
    {
      icon: "⚡",
      title: "Service AC",
      desc: "Perbaikan cepat untuk AC kurang dingin, bocor, dan error.",
    },
    {
      icon: "🔧",
      title: "Maintenance",
      desc: "Perawatan rutin agar AC tetap optimal dan hemat listrik.",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Layanan Kami
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto">
          Solusi lengkap kebutuhan pendingin ruangan
          untuk rumah hingga proyek komersial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/[0.04] border border-white/10 rounded-[30px] p-7"
          >
            <div className="text-5xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-white/60 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
