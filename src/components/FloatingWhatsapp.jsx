import { motion } from "framer-motion";

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/62882008246099"
      target="_blank"
      rel="noreferrer"
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="fixed bottom-7 right-7 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.7)]"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </motion.a>
  );
}
