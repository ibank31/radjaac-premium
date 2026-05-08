import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"

export default function InstalasiAC() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Instalasi AC Banyumas | Pemasangan AC Profesional & Rapi</title>
        <meta name="description" content="Jasa instalasi AC profesional di Banyumas. Pemasangan rapi, aman, dan cepat untuk rumah, kantor, toko, dan bangunan komersial dengan teknisi bersertifikat." />
        <meta property="og:title" content="Instalasi AC Banyumas - Pemasangan Profesional & Rapi" />
        <meta property="og:description" content="Layanan instalasi AC bersertifikat untuk semua jenis bangunan. Teknisi berpengalaman, pengerjaan rapi, dan bergaransi." />
      </Helmet>

      <Navbar />

      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Instalasi AC Banyumas
          </h1>

          <p className="text-xl text-green-100 max-w-2xl">
            Jasa instalasi AC profesional untuk rumah, kantor,
            toko, dan bangunan komersial di Banyumas.
          </p>
        </div>
      </section>
    </div>
  )
}