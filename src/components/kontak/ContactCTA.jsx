import WhatsappButton from "../ui/WhatsappButton";

export default function ContactCTA() {
  return (
    <section className="rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-slate-900/90 p-5 sm:p-8 shadow-[0_0_60px_rgba(14,116,144,0.16)]">
      <h2 className="text-2xl font-semibold text-white mb-4">
        WhatsApp Contact
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        Gunakan WhatsApp untuk pertanyaan harga, jadwal kunjungan, dan estimasi pengerjaan. Respon cepat tersedia selama jam operasional.
      </p>

      <WhatsappButton className="w-full">
        Chat WhatsApp: 0882-0082-46099
      </WhatsappButton>
    </section>
  );
}