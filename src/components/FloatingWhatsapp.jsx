import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { SITE_DATA } from "../constants/siteData";
import { buildWhatsAppUrlForPath } from "../utils/whatsapp";
import WhatsappIcon from "./ui/WhatsappIcon";

export default function FloatingWhatsapp() {
  const location = useLocation()
  const buttonRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const floatingButtons = Array.from(document.querySelectorAll("[data-floating-whatsapp='true']"))
    const firstButton = floatingButtons[0]

    setIsVisible(!firstButton || firstButton === buttonRef.current)
  }, [location.pathname])

  return (
    <motion.a
      ref={buttonRef}
      data-floating-whatsapp="true"
      href={buildWhatsAppUrlForPath(location.pathname)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat WhatsApp ${SITE_DATA.businessName}`}
      animate={{
        scale: [1, 1.04, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.8,
      }}
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_28px_rgba(37,211,102,0.38)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <WhatsappIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
    </motion.a>
  );
}
