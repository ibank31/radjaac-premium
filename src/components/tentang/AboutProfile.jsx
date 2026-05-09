import SectionHeading from "../ui/SectionHeading";

export default function AboutProfile() {
  return (
    <section>
      <SectionHeading>Profil Singkat Radja AC</SectionHeading>
      <p className="text-slate-300 leading-relaxed mb-4">
        Radja AC adalah layanan AC lokal yang fokus pada kualitas, ketepatan waktu, dan hasil yang dapat dirasakan. Kami melayani service AC, cuci AC, instalasi AC, dan bongkar pasang dengan pendekatan transparan serta solusi yang jelas.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Teknisi Bersertifikat", desc: "Tim terlatih dengan pengalaman menangani semua merek AC." },
          { title: "Garansi Layanan", desc: "Setiap pengerjaan didukung garansi demi kepercayaan pelanggan." },
          { title: "Respon Cepat", desc: "Fast response WhatsApp untuk kebutuhan service dan instalasi mendesak." },
          { title: "Cakupan Luas", desc: "Melayani Purwokerto dan sekitarnya termasuk Banyumas, Sokaraja, dan Ajibarang." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}