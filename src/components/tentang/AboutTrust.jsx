import WhatsappIcon from "../ui/WhatsappIcon"

export default function AboutTrust() {
  return (
    <aside className="rounded-[28px] border border-cyan-400/10 bg-cyan-500/5 p-8 text-white/90">
      <h2 className="text-2xl font-semibold mb-4">Kenapa memilih Radja AC</h2>
      <ul className="space-y-4">
        {[
          "Fokus pada penjualan AC dengan rekomendasi produk yang sesuai kebutuhan nyata pelanggan.",
          "Pilihan brand dan tipe AC lebih variatif untuk rumah, kantor, hingga kebutuhan komersial.",
          "Harga dan proses pembelian transparan, didampingi tim yang komunikatif dari awal hingga unit terpasang.",
          "Ada dukungan after-sales sehingga pelanggan tetap merasa aman setelah transaksi selesai.",
        ].map((item) => (
          <li key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
            <p className="font-medium">{item}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_0_60px_rgba(14,116,144,0.18)]">
        <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-3">Hubungi Kami</p>
        <h3 className="text-white text-2xl font-bold mb-4">Konsultasi produk via WhatsApp</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          Tanyakan rekomendasi unit, ketersediaan stok, pilihan brand, dan penawaran terbaik untuk kebutuhan Anda.
        </p>
        <a
          href="https://wa.me/62882008246099"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
            <WhatsappIcon className="w-5 h-5 text-slate-950" />
          </span>
          Chat WhatsApp Radja AC
        </a>
      </div>
    </aside>
  )
}
