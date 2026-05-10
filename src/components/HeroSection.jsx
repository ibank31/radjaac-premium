import { motion } from "framer-motion";
import { SITE_DATA } from "../constants/siteData";
import WhatsappIcon from "./ui/WhatsappIcon";

import {
  House,
  Zap,
  Wind,
  Building2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import {
  Star,
  Wrench,
  MessageCircle,
  Headphones,
} from "lucide-react";

const CATEGORY_ITEMS = [
  {
    title: "AC Rumah",
    desc: "Nyaman untuk hunian",
    icon: House,
  },
  {
    title: "AC Inverter",
    desc: "Hemat listrik hingga 60%",
    icon: Zap,
  },
  {
    title: "Low Watt",
    desc: "Ideal untuk kos & kontrakan",
    icon: Wind,
  },
  {
    title: "AC Kantor",
    desc: "Solusi ruang komersial",
    icon: Building2,
  },
];

const BRAND_ITEMS = [
  {
    tagline: "Premium Cooling Solution",
    logo: "/logo-product/daikin-logo.webp",
  },
  {
    tagline: "Reliable & Efficient",
    logo: "/logo-product/panasonic-logo.webp",
  },
  {
    tagline: "Plasmacluster Air Care",
    logo: "/logo-product/sharp-logo.webp",
  },
  {
    tagline: "Smart Cooling Technology",
    logo: "/logo-product/samsung-logo.webp",
  },
  {
    tagline: "Best Value Performance",
    logo: "/logo-product/gree-logo.webp",
  },
  {
    tagline: "Modern Cooling System",
    logo: "/logo-product/midea-logo.webp",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="pb-10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />

        <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-[-120px] bottom-0 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 rounded-full text-cyan-300 text-sm mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              DEALER AC MODERN & TERPERCAYA
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] sm:leading-tight tracking-[-0.03em] mb-5 max-w-xl">
              Dealer AC Modern & Terpercaya
              <span className="block text-cyan-300">
                di Purwokerto & Banyumas
              </span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-7 max-w-xl mb-6">
              Jual AC Daikin, LG, Sharp, Panasonic, dan brand premium lain.
              Ready stock, instalasi rapi, dan rekomendasi AC sesuai ukuran
              ruangan.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 mb-4">
              <a
                href={SITE_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-bold px-6 py-4 rounded-full shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <WhatsappIcon className="w-5 h-5 text-slate-950" />
                Tanya Harga AC
              </a>

              <a
                href="#produk"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
              >
                Lihat Katalog AC
              </a>
            </div>

            <p className="text-white/60 text-sm max-w-xl mb-6">
              Ready stock • Brand resmi • Instalasi rapi • Konsultasi gratis
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 via-slate-900/10 to-transparent rounded-[38px] shadow-[0_0_80px_rgba(14,116,144,0.12)]" />

            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute bottom-4 left-[-24px] w-56 h-56 rounded-full bg-sky-500/10 blur-3xl" />

            <img
              src="/asset/display-ac-wall-mounted.webp"
              alt="Showroom dealer AC premium Radja AC di Purwokerto"
              fetchPriority="high"
              decoding="async"
              className="relative rounded-[34px] border border-white/10 shadow-2xl w-full max-h-[380px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CATEGORY */}
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
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-cyan-500/10 bg-[#071326] hover:bg-[#0A1930] transition-all duration-300 p-6 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>

                <h3 className="text-lg font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-white/55 text-sm leading-6">
                  {item.desc}
                </p>

                <div className="mt-5 text-cyan-300 flex justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BRANDS */}
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
{/* WHY RADJA AC */}
<section className="pb-20">
  <div className="text-center mb-12">
    <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-3">
      KEUNGGULAN KAMI
    </p>

    <h2 className="text-3xl sm:text-4xl font-black leading-tight">
      Kenapa Pilih Radja AC?
    </h2>
  </div>

  <div className="grid grid-cols-2 gap-5">
    {[
      {
        title: "Multi Brand",
        desc: "Daikin, Gree, Panasonic, Samsung & pilihan lengkap lainnya",
        Icon: Star,
      },
      {
        title: "Instalasi Rapi",
        desc: "Teknisi berpengalaman dengan pengerjaan bersih & presisi",
        Icon: Wrench,
      },
      {
        title: "Konsultasi Gratis",
        desc: "Kami bantu temukan AC yang paling tepat untuk Anda",
        Icon: MessageCircle,
      },
      {
        title: "After Sales Support",
        desc: "Garansi penuh dan layanan purna jual terpercaya",
        Icon: Headphones,
      },
    ].map((item) => {
      const Icon = item.Icon;

      return (
        <div
          key={item.title}
          className="rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-[#0A1930] transition-all duration-300 p-6 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-cyan-300" />
          </div>

          <h3 className="text-lg font-bold leading-snug mb-3">
            {item.title}
          </h3>

          <p className="text-white/55 text-sm leading-7">
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
</section>
      
    </>
  );
}