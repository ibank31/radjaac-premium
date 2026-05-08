export default function PortfolioSection() {
  const portfolios = [
    {
      src: "https://images.unsplash.com/photo-1591047139829-6f61c3a0ce94?auto=format&fit=crop&w=1200&q=80",
      alt: "Teknisi AC memeriksa unit indoor di rumah",
    },
    {
      src: "https://images.unsplash.com/photo-1512149673959-0f1d44020c0b?auto=format&fit=crop&w=1200&q=80",
      alt: "Pemasangan AC di ruang tamu modern",
    },
    {
      src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
      alt: "Proses pembersihan unit AC oleh teknisi profesional",
    },
    {
      src: "https://images.unsplash.com/photo-1592735817023-5ae581aa2d61?auto=format&fit=crop&w=1200&q=80",
      alt: "Tim teknisi AC sedang mengatur peralatan service",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Portfolio Project
        </h2>

        <p className="text-white/60">
          Beberapa project yang telah kami kerjakan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {portfolios.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.2)]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[260px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
