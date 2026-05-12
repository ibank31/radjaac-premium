import SectionHeading from "../ui/SectionHeading"

export default function AboutProfile() {
  return (
    <section className="text-center lg:text-left">
      <SectionHeading className="text-center lg:text-left">Profil Singkat RADJA AC</SectionHeading>
      <div className="mx-auto max-w-3xl space-y-4 text-slate-300 lg:mx-0">
        <p className="leading-8">
          RADJA AC hadir sebagai dealer AC lokal yang mengutamakan produk original, rekomendasi yang jelas, dan proses pembelian yang nyaman.
        </p>
        <p className="leading-8">
          Kami melayani kebutuhan AC untuk rumah tinggal, kantor, toko, dan usaha dengan pendekatan yang praktis: memahami kebutuhan ruangan, memilih unit yang sesuai, lalu memastikan pemasangan berjalan aman.
        </p>
      </div>
    </section>
  )
}
