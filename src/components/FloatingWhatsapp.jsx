import { motion } from "framer-motion";

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/62882008246099"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp RADJA AC"
      animate={{
        scale: [1, 1.06, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
      }}
      className="fixed bottom-6 md:bottom-7 right-6 md:right-7 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_40px_rgba(37,211,102,0.75)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 hover:bg-[#20BA5A]"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-9 h-9"
      />
    </motion.a>
  );
}
