import SectionHeading from "../ui/SectionHeading"

export default function AboutProfile() {
  return (
    <section>
      <SectionHeading>Profil Singkat Radja AC</SectionHeading>
      <p className="text-slate-300 leading-relaxed mb-4">
        Radja AC adalah dealer AC lokal yang berfokus pada penjualan produk berkualitas dengan proses pembelian yang jelas dan nyaman. Kami melayani kebutuhan unit AC baru untuk berbagai skala, mulai dari rumah tinggal hingga kebutuhan kantor dan usaha, dilengkapi dukungan teknis sebagai nilai tambah.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Konsultasi Produk Tepat", desc: "Bantu pilih kapasitas dan tipe AC sesuai ukuran ruangan, kebutuhan, dan budget." },
          { title: "Pilihan Brand Lengkap", desc: "Menyediakan berbagai merek AC populer dengan opsi produk yang relevan untuk tiap kebutuhan." },
          { title: "Pengadaan & Instalasi Terkoordinasi", desc: "Dari pemesanan unit sampai pemasangan, proses ditangani rapi agar lebih praktis untuk pelanggan." },
          { title: "Dukungan After-Sales", desc: "Tetap responsif setelah pembelian untuk kebutuhan follow-up, perawatan, dan bantuan teknis." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
