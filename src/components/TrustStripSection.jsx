import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ShieldCheck, BadgeCheck, Clock3 } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "Dealer AC resmi Purwokerto & Banyumas" },
  { icon: Clock3, label: "Ready stock AC multi-brand" },
  { icon: ShieldCheck, label: "Instalasi profesional & rapi" },
  { icon: CheckCircle2, label: "Konsultasi pilih AC sesuai ruangan" },
  { icon: Sparkles, label: "Garansi pemasangan & after-sales" },
];

export default function TrustStripSection() {
  return (
    <section className="mt-10 mb-16">
      <div className="bg-white/5 border border-white/10 rounded-[32px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:border-cyan-300/30 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-300/15">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm leading-6 text-white/80">{item.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
