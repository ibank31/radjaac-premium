import { motion } from "framer-motion";

const BRAND_LOGOS = [
  { name: "Daikin", logo: "/daikin-logo.png" },
  { name: "Gree", logo: "/gree-logo.png" },
  { name: "Midea", logo: "/midea-logo.png" },
  { name: "Panasonic", logo: "/panasonic-logo.png" },
  { name: "Sharp", logo: "/sharp-logo.png" },
  { name: "Samsung", logo: "/samsung-logo.png" },
];

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
        {BRAND_LOGOS.map((brand, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/[0.04] border border-white/10 rounded-[26px] p-6 flex items-center justify-center h-[120px]"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              decoding="async"
              className="max-h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
