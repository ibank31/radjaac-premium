import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";

const featuredProducts = [
  {
    brand: "Daikin",
    category: "AC Inverter Premium",
    benefit: "Hemat listrik dan nyaman pemakaian panjang",
    badge: "Inverter",
    cta: "Tanya Harga",
    route: "/daikin-purwokerto",
  },
  {
    brand: "Gree",
    category: "AC Low Watt",
    benefit: "Pilihan tepat untuk ruang keluarga dan kamar",
    badge: "Low Watt",
    cta: "Konsultasi AC",
    route: "/gree-purwokerto",
  },
  {
    brand: "Sharp",
    category: "AC Standard Serba Guna",
    benefit: "Favorit rumah modern yang butuh pendinginan cepat",
    badge: "Best Seller",
    cta: "Cek Ketersediaan",
  },
  {
    brand: "Panasonic",
    category: "AC Inverter Hemat",
    benefit: "Cocok untuk kamar dan kantor kecil",
    badge: "Rumah",
    cta: "Tanya Harga",
  },
  {
    brand: "LG",
    category: "AC Standard Stylish",
    benefit: "Desain premium untuk hunian dan ruang kerja",
    badge: "Kantor",
    cta: "Konsultasi AC",
  },
  {
    brand: "Midea",
    category: "AC Inverter Efisien",
    benefit: "Pilihan andalan untuk performa stabil dan ringkas",
    badge: "Inverter",
    cta: "Cek Ketersediaan",
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-3xl mb-10">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-4">
            Pilihan Produk AC Terbaik
          </div>
          <SectionHeading className="text-4xl md:text-5xl font-black tracking-[-0.03em]">
            Featured AC untuk Rumah & Bisnis
          </SectionHeading>
          <p className="text-white/70 text-lg leading-relaxed">
            Temukan koleksi AC populer dari Daikin, Gree, Sharp, Panasonic, LG, dan Midea yang siap membantu kebutuhan pendinginan di Purwokerto & Banyumas.
          </p>
          <p className="mt-4 text-cyan-300 text-sm font-medium">
            Ready stock berbagai brand AC untuk rumah dan bisnis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.brand}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80 font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {product.brand}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {product.badge}
                </span>
              </div>

              <p className="text-white/70 leading-relaxed mb-8 min-h-[72px]">
                {product.benefit}
              </p>

              <Link
                to={product.route ?? "/kontak"}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {product.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
