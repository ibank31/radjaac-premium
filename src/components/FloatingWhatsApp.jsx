import { useLocation } from "react-router-dom"
import WhatsappIcon from "./ui/WhatsappIcon"
import { buildWhatsAppUrlForPath } from "../utils/whatsapp"

export default function FloatingWhatsApp() {
  const location = useLocation()

  return (
    <a
      href={buildWhatsAppUrlForPath(location.pathname)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp RADJA AC untuk konsultasi beli AC"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-black text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.35)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5"
    >
      <WhatsappIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Konsultasi AC</span>
      <span className="sm:hidden">Chat</span>
    </a>
  )
}
