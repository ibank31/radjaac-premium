import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND_IMAGES } from "../utils/imageUtils";

export default function BrandsSection() {
  return (
    <section id="produk" className="py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-4">
          Brand AC Resmi • Ready Stock • Instalasi Rapi
        </div>

        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mb-4">
          Pilihan Brand AC Terpercaya
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto">
          Dealer multi-brand AC modern untuk rumah dan bisnis di Purwokerto & Banyumas. Jelajahi halaman khusus <Link to="/daikin-purwokerto" className="text-cyan-300 hover:text-cyan-200">Daikin Purwokerto</Link> dan <Link to="/gree-purwokerto" className="text-cyan-300 hover:text-cyan-200">Gree Purwokerto</Link> untuk pilihan brand terbaik.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/70">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Ready Stock</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Brand Resmi</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Pilihan AC Lengkap</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {BRAND_IMAGES.map((brand, i) => {
          const route = brand.name === "Daikin" ? "/daikin-purwokerto" : brand.name === "Gree" ? "/gree-purwokerto" : null;

          const content = (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/[0.05] border border-white/10 rounded-[28px] p-5 flex items-center justify-center h-[120px] shadow-[0_15px_40px_rgba(15,23,42,0.25)] transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                loading="lazy"
                decoding="async"
                className="max-h-10 object-contain opacity-80 hover:opacity-100 transition"
                width={80}
                height={40}
              />
            </motion.div>
          );

          return route ? (
            <Link key={i} to={route} className="block">
              {content}
            </Link>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
