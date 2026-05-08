export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      text: "Pemasangan sangat rapi dan teknisinya profesional.",
    },
    {
      name: "Rina Amelia",
      text: "Fast response, AC langsung dingin kembali.",
    },
    {
      name: "Andi Prasetyo",
      text: "Harga masuk akal dan pengerjaan bersih.",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Testimoni Pelanggan
        </h2>

        <p className="text-white/60">
          Review dari pelanggan RADJA AC.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white/[0.04] border border-white/10 rounded-[30px] p-7"
          >
            <p className="text-white/70 leading-relaxed mb-6">
              "{item.text}"
            </p>

            <h3 className="font-bold text-lg">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
