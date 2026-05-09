export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      text: "AC Daikin rumah saya di Purwokerto Selatan dipasang rapi, dan teknisinya teliti sampai bersih.",
    },
    {
      name: "Rina Amelia",
      text: "Tim Radja AC cepat tanggap lewat WhatsApp dan pemasangan AC kantor Banyumas selesai sesuai janji.",
    },
    {
      name: "Andi Prasetyo",
      text: "Pilih AC low watt untuk kamar Sokaraja sangat membantu, hasilnya dingin tanpa boros listrik.",
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
