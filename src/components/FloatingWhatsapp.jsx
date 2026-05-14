import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrlForPath } from "../utils/whatsapp"
import WhatsappIcon from "./ui/WhatsappIcon"

export default function FloatingWhatsapp() {
  const location = useLocation()

  if (location.pathname !== "/") return null

  return (
    <motion.a
      href={buildWhatsAppUrlForPath(location.pathname)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat WhatsApp ${SITE_DATA.businessName}`}
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 2.8 }}
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_28px_rgba(37,211,102,0.38)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsappIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
    </motion.a>
  )
}
