import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrlForPath } from "../utils/whatsapp"
import WhatsappIcon from "./ui/WhatsappIcon"

export default function FloatingWhatsapp({ global = false }) {
  const location = useLocation()

  if (!global) return null

  return (
    <motion.a
      href={buildWhatsAppUrlForPath(location.pathname)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat WhatsApp ${SITE_DATA.businessName}`}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ repeat: Infinity, duration: 3.2 }}
      className="floating-whatsapp pointer-events-auto fixed bottom-4 right-4 z-50 flex h-11 w-11 translate-y-0 items-center justify-center rounded-full bg-[#25D366] opacity-100 shadow-[0_8px_20px_rgba(37,211,102,0.28)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 sm:shadow-[0_10px_24px_rgba(37,211,102,0.30)]"
    >
      <WhatsappIcon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
    </motion.a>
  )
}
