import { motion } from "framer-motion";
import { BRAND_IMAGES } from "../utils/imageUtils";

export default function BrandsSection() {
  return (
    <section id="produk" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Brand Pilihan
        </h2>

        <p className="text-white/60">
          Dealer berbagai brand AC terpercaya.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {BRAND_IMAGES.map((brand, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/[0.04] border border-white/10 rounded-[26px] p-6 flex items-center justify-center h-[120px]"
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
        ))}
      </div>
    </section>
  );
}
