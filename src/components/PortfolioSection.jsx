export default function PortfolioSection() {
  const portfolios = [
    "/portfolio-1.jpg",
    "/portfolio-2.jpg",
    "/portfolio-3.jpg",
    "/portfolio-4.jpg",
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
            className="overflow-hidden rounded-[32px] border border-white/10"
          >
            <img
              src={item}
              alt="Portfolio"
              className="w-full h-[260px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
