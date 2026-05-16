import { Link } from "react-router-dom"
import { ArrowRight, ShoppingBag } from "lucide-react"

import WhatsappIcon from "../ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../../utils/whatsapp"

export default function AreaPriceCard({ areaName, message, relatedAreas = [] }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <ShoppingBag className="mb-5 h-8 w-8 text-cyan-300" />
      <h2 className="mb-4 text-3xl font-black tracking-[-0.03em]">
        Cari harga AC area {areaName}?
      </h2>
      <p className="mb-5 text-sm leading-7 text-white/62 sm:text-base">
        Cek stok, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat lewat WhatsApp. Untuk area sekitar, pilih halaman terdekat agar informasi lokasi lebih sesuai.
      </p>
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noreferrer"
        className="mb-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:text-base"
      >
        <WhatsappIcon className="h-5 w-5 text-slate-950" />
        Tanya Harga AC {areaName}
      </a>
      {relatedAreas.length ? (
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/38">
            Area terdekat
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedAreas.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-xs font-bold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.1] sm:text-sm"
              >
                {item.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
