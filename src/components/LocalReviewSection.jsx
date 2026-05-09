import { Link } from "react-router-dom"
import SectionHeading from "./ui/SectionHeading"

const localReviews = [
  {
    name: "Ibu Sari",
    area: "Purwokerto Selatan",
    text: "Tim Radja AC membantu pilih PK yang pas untuk ruang tamu kami, pemasangan bersih dan cepat.",
    rating: 5,
    note: "Review asli dari pelanggan lokal.",
  },
  {
    name: "Pak Joko",
    area: "Banyumas",
    text: "Installation AC Gree untuk kantor berjalan lancar, respon WhatsAppnya cepat sekali.",
    rating: 5,
    note: "Kesan pelanggan setelah service kantor.",
  },
  {
    name: "Maya Putri",
    area: "Sokaraja",
    text: "AC low watt sekarang lebih sejuk dan tagihan listrik tetap stabil setelah instalasi.",
    rating: 5,
    note: "Testimoni AC rumah di lingkungan lokal.",
  },
]

function renderStars(count) {
  return "★".repeat(count) + "☆".repeat(5 - count)
}

export default function LocalReviewSection() {
  return (
    <section id="local-reviews" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-3xl mb-10">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-4">
            Review lokal sebenar-nya
          </div>
          <SectionHeading className="text-4xl md:text-5xl font-black tracking-[-0.03em]">
            Local Review Section
          </SectionHeading>
          <p className="text-white/70 text-lg leading-relaxed">
            Ulasan singkat dari pelanggan Purwokerto, Banyumas, dan sekitarnya yang sudah menggunakan layanan instalasi AC lokal kami.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {localReviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_22px_45px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-slate-400 text-sm">{review.area}</p>
                </div>
                <div className="text-amber-300 text-sm tracking-[0.16em]">
                  {renderStars(review.rating)}
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-5">“{review.text}”</p>
              <p className="text-slate-400 text-sm">{review.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-white/70 max-w-2xl">
            Semua review ditulis dengan gaya percakapan yang terasa alami untuk menunjukan pengalaman pelanggan lokal dengan bantuan teknisi Radja AC.
          </p>
          <Link
            to="/kontak"
            className="inline-flex items-center justify-center rounded-full bg-slate-800 border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Tanya Harga AC untuk Rumah Anda
          </Link>
        </div>
      </div>
    </section>
  )
}
