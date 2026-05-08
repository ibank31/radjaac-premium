import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"

export default function ServiceAC() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Service AC Purwokerto | Teknisi Profesional & Fast Response</title>
        <meta name="description" content="Service AC panggilan cepat di Purwokerto dan Banyumas. Teknisi profesional, berpengalaman, dan bergaransi pekerjaan. Melayani perbaikan AC untuk rumah, kantor, dan bisnis." />
        <meta property="og:title" content="Service AC Purwokerto - Perbaikan AC Cepat & Profesional" />
        <meta property="og:description" content="Jasa perbaikan AC profesional dengan teknisi bersertifikat. Melayani service AC untuk rumah, kantor, toko, dan bisnis di Purwokerto Banyumas." />
      </Helmet>

      <Navbar />

      <section className="pt-32 bg-blue-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Service AC Purwokerto
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl">
            Jasa service AC panggilan terpercaya di Purwokerto dan Banyumas.
            Teknisi profesional, cepat datang, dan bergaransi.
          </p>
        </div>
      </section>

    </div>
  )
}