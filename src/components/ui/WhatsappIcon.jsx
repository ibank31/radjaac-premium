export default function WhatsappIcon({ className = "w-6 h-6 object-contain shrink-0", alt = "", ...props }) {
  return (
    <img
      src="/icons-CTA/whatsapp.svg"
      className={className}
      alt={alt}
      aria-hidden={alt === "" ? "true" : undefined}
      loading="lazy"
      {...props}
    />
  )
}
